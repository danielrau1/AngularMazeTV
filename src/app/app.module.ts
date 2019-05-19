import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // [1.1b]
import {FormsModule} from '@angular/forms'; // [1.1b]
import {MatInputModule} from '@angular/material/input'; // [1.1b]
import {MatButtonModule} from '@angular/material/button'; // [1.1b]
import {HttpClientModule} from '@angular/common/http'; // [1.1e]

import {MatToolbarModule} from '@angular/material/toolbar'; // [1.2a]
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodesComponent } from './episodes/episodes.component';
import { SeasonEpisodesComponent } from './season-episodes/season-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    EpisodesComponent,
    SeasonEpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // [1.1b]
    MatInputModule, // [1.1b]
    MatButtonModule, // [1.1b]
    HttpClientModule, // [1.1e]

    MatExpansionModule, // [1.2a]
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
