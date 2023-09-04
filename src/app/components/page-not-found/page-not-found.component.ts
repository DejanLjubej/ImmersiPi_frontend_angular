import { Component, OnInit } from '@angular/core';
import { BallArtApiService } from '../../services/BallArtService/ball-art-api.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  usersList;
  constructor(private babapi: BallArtApiService) {}

  ngOnInit(): void {
    this.babapi.getUsers().subscribe((data) => {
      console.log(data);
      this.usersList = JSON.stringify(data, null, 20);
      console.log(this.usersList);
    });
  }
}
