import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './shows/shows.component'; // [1.1a]
import {EpisodesComponent} from './episodes/episodes.component'; // [2.1a]

const routes: Routes = [
  {path: '', component: ShowsComponent}, // [1.1a]
  {path: 'episodes/:id', component: EpisodesComponent} // [2.1a]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
