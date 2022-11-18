import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private http:HttpClient) { }

  players(){
    return this.http.get("")

  }
}
