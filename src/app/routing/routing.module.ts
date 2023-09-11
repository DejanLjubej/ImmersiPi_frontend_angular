import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Route components
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { GamesPageComponent } from '../components/games-page/games-page.component';
import { PageUnderConstructionComponent } from '../components/page-under-construction/page-under-construction.component';

const routes: Routes =
[
  {path:'', component:FrontPageComponent},
  {path:'products',component:GamesPageComponent},
  {path:'studio',component:PageUnderConstructionComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports:
  [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
