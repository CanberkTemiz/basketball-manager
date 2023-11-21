import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";

@Injectable({providedIn: "root"})
export class CachingInterceptor implements HttpInterceptor {
    private cache: {[url: string]: any} = {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.method !== 'GET') {
            return next.handle(req); // if not get, pass the request through
        }

        const cacheableUrl = this.getCacheableUrl(req.url);

        if(!cacheableUrl) {
            return next.handle(req); // pass req thro if not cacheable
        }

        // check if response is already in the cache
        const cachedData = localStorage.getItem(cacheableUrl)
        if(cachedData) {
            return of(new HttpResponse({ body: JSON.parse(cachedData) }))
        }

        // if data is not in the cache, store the result in cache
        return next.handle(req).pipe(
            tap((event) => {
                // check if event is an HTTP response
                if(event instanceof HttpResponse) {
                    localStorage.setItem(cacheableUrl, JSON.stringify(event.body))
                }
            })
        )
    }

    getCacheableUrl(url: string): string | null {
        if(url.includes('AllTeams')) {
            return url;
        }
        return null;
    }
}