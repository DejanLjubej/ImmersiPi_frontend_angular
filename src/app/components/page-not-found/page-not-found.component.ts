import { Component, OnInit } from '@angular/core';
import { BallArtApiService } from '../../services/ball-art-api.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(babapi: BallArtApiService) { }

  ngOnInit(): void {

  }

}
