import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallArtApiService {

  readonly ballArtApiUrl = "https://localhost:7165/api/";

  constructor(private httpClient: HttpClient) { }



  getUsers():Observable<any[]>{
    return this.httpClient.get<any>(this.ballArtApiUrl+ 'users');
  }
}
