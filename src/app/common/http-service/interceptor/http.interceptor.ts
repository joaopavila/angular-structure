import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestMethod, RequestOptions, Request, RequestOptionsArgs, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

import { HeadersHttp } from '../header/http.header';
import { ENVIRONMENT } from '../../../../environments/environment';

const API_URL = ENVIRONMENT.url;

@Injectable()
export class InterceptedHttp extends Http {

  private appHeaders;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
    this.appHeaders = new HeadersHttp(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    // this.showLoader();

    if (typeof url === 'string') {
      return this.get(this.baseUrl(url), options); // Recursion: transform url from String to Request
    }
    return this.sendRequest(url, options)
      .finally(() => {
        this.onEnd();
      });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    // this.showLoader();

    return this.sendRequest({ method: RequestMethod.Get, url: this.baseUrl(url) }, options)
      .finally(() => {
        this.onEnd();
      });
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
    // this.showLoader();

    return this.sendRequest({ method: RequestMethod.Post, url: this.baseUrl(url), body: body }, options)
      .finally(() => {
        this.onEnd();
      });
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
    // this.showLoader();
    return this.sendRequest({ method: RequestMethod.Put, url: this.baseUrl(url), body: body }, options)
      .finally(() => {
        this.onEnd();
    });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.sendRequest({ method: RequestMethod.Delete, url: url, body: '' }, options);
  }

  private baseUrl(req: string) {
    const urlPattern =  API_URL + req;
    return urlPattern;
  }

  private sendRequest(requestOptionArgs: RequestOptionsArgs, options?: RequestOptionsArgs): Observable<any> {
    const requestOptions = new RequestOptions(requestOptionArgs);
    const request = new Request(this.appHeaders.HeadersBasic().merge(requestOptions));

    return super.request(request, options);
  }

  private showLoader(): void {
    const show = true;
  }

  private onEnd() {
    const show = false;
  }
}
