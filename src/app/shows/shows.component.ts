import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show';
import {ServiceService} from '../models/service.service'; // [1.1c]

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  keyWords = '';
  shows: Show[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

// [1.1c]
  searchShows() {
    console.log(this.keyWords);
    this.service.getShows(this.keyWords).subscribe( search1 => {
      this.shows = search1;
      console.log(this.shows); // For verification to see what obtained
    });
  }

}
