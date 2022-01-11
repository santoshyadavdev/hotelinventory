import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  config: any;
  constructor(private http:HttpClient) {}

  init() {
    return this.http
      .get('/assets/config.json')
      .pipe(tap((config) => (this.config = config)));
  }
}
