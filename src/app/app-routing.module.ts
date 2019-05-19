import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './shows/shows.component'; // [1.1a]

const routes: Routes = [
  {path: '', component: ShowsComponent}, // [1.1a]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
