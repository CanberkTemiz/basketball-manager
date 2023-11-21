import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "teams", loadComponent: () => import("./pages/teams/teams.component").then((m) => m.TeamsComponent)}
  // { path: "/", loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })]
})
export class AppRoutingModule { }
