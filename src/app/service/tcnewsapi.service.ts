import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }

  //top headlines  API url
  topHeadlinesNews= 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bab0d3d3cd954217be55c45748d5407e';

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)
  }
}
