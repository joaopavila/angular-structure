import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public productList(payload: object) {
    return this.http.post('/productList', payload).map(data => data.json());
  }

}
