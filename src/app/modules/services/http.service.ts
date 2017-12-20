import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public register(payload: object) {
    return this.http.post('/developers', payload).map(data => data.json());
  }

}
