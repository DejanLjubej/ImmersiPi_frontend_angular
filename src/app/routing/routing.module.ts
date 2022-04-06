import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Route components
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes =
[
  {path:'', component:FrontPageComponent},
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
