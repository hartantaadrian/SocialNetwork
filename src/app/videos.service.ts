import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Video } from './videos/Video';




@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get<any>('https://api.unsplash.com/collections?page=5',{
      headers:{
        Authorization : 'Client-ID stV8bIKKRMn123GdcW92uRe73RlL1TgaQL-innXCaIs'
      }
    })
    ;
  }
}
