import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from '../models/service.service'; // [2.2c]
import {Episode} from '../models/episode'; // [2.2c]

@Component({
  selector: 'app-season-episodes',
  templateUrl: './season-episodes.component.html',
  styleUrls: ['./season-episodes.component.sass']
})
export class SeasonEpisodesComponent implements OnInit {

  @Input() public seasonId; // [2.2b]
  seasonEpisodes: Episode[]; // [2.2e]

                    // [2.2c]
  constructor(private service: ServiceService) { }

  ngOnInit() {
    // [2.2c]
    this.service.getSeasonEpisodes(this.seasonId).subscribe(search5 => {
      this.seasonEpisodes = search5;
      console.log(this.seasonEpisodes);

    });
  }





}
