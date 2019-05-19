import { Component, OnInit } from '@angular/core';
import {Episode} from '../models/episode'; // [2.1a]
import {ActivatedRoute} from '@angular/router'; // [2.1b]
import {ServiceService} from '../models/service.service'; // [2.1c]

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {

  public showId; // [2.1b]
  seasons: any; // [2.1c]

  seasonClicked = ''; // [2.1f]
  clicked2 = false;
  episodes: Episode[];

                       // [2.1b]                   [2.1c]
  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {

    // [2.1b]
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;


    // [2.1c]
    this.service.getSeasons(this.showId).subscribe( search3 => {
      this.seasons = search3;
    });

  }


// [2.1f]
  showEpisodes(season) {
    this.seasonClicked = season.number;
    this.clicked2 = !this.clicked2;
    this.service.getEpisodes(this.showId).subscribe( search4 => {
      this.episodes = search4;

});
}

}
