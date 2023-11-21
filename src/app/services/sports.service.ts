import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GroupedTeams, Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  apiKey = environment.apiKey;

  constructor(private http:HttpClient) { }

  getAllTeams():Observable<Team[]> {
    return this.http
      .get<Team[]>(`/AllTeams?key=${this.apiKey}`)
  }

  getGroupByDivisionTeams(): Observable<any> {
    return this.getAllTeams().pipe(
      map((teams) => {
          let groupedTeams: GroupedTeams = {};
          teams.forEach(team => {
            if(team.Division) {
              !groupedTeams.hasOwnProperty(team.Division) ?
                groupedTeams[team.Division] = [team] :
                groupedTeams[team.Division].push(team)
            }
          })
          return groupedTeams;
      })
    )
  }
}
