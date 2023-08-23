import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


//Route components
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { GamesPageComponent } from '../components/games-page/games-page.component';

const routes: Routes =
[
  {path:'**', component:FrontPageComponent},
  {path:'', component:PageNotFoundComponent},
  {path:'games', component:GamesPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OnRouteRoutingModule { }
