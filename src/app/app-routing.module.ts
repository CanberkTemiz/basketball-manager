import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: "teams", 
    loadComponent: () => import("./pages/teams/teams.component").then((m) => m.TeamsComponent),
  },
  { 
    path: "roster", 
    loadComponent: () => import("./pages/teams/team-roster/team-roster.component").then((m) => m.TeamRosterComponent),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })]
})
export class AppRoutingModule { }
