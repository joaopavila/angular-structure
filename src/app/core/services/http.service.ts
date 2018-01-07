import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public registerUser(payload: object) {
    return this.http.post('/regiserUser', payload).map(data => data.json());
  }

  public deleteUser(payload: object) {
    return this.http.post('/deleteUser', payload).map(data => data.json());
  }

  public updateUser(payload: object) {
    return this.http.post('/updateUser', payload).map(data => data.json());
  }

}
