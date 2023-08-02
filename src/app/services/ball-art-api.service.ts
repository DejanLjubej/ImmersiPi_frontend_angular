import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallArtApiService {

  readonly ballArtApiUrl = "https://localhost:7165/api/";

  constructor(private httpClient: HttpClient) { }



  getUsers(){
    return this.httpClient.get<any>(this.ballArtApiUrl+ 'users/user/08da164e-a8bd-4d45-8cc0-c9ec8ec8a4f4');
  }
}
