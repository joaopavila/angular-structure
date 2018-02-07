import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetPostService {

  constructor(private http: Http) { }

  public getPost(): Observable<Object> {
    return this.http.get(`/posts/1`).map(res => res.json());
  }

}
