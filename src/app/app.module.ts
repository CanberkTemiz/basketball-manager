import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { SportsService } from './services/sports.service';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CachingInterceptor } from './interceptors/caching.interceptor';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderComponent,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    UserService, 
    SportsService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
