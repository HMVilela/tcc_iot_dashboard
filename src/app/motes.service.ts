import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MotesService {

  constructor(private http: Http) { }

  // Get all motes from the API
  getAllMotes() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
}