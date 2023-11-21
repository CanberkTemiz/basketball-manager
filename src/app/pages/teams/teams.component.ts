import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupedTeams } from 'src/app/models/team.model';
import { SportsService } from 'src/app/services/sports.service';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { TeamDetailsComponent } from './team-details/team-details.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  imports: [NgFor, NgIf, AsyncPipe, MatDividerModule, MatListModule, TeamDetailsComponent],
  standalone: true
})
export class TeamsComponent implements OnInit {
  teams$: Observable<GroupedTeams>;
  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.teams$ = this.sportsService.getGroupByDivisionTeams()
  }

  getDivision(teams: GroupedTeams): string[] {
    return Object.keys(teams)
  }
}
