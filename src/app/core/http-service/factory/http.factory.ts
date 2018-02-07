import { XHRBackend, RequestOptions } from '@angular/http';
import { InterceptedHttp } from '../interceptor/http.interceptor';

export class HttpFactory {
  public static injectHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
    return new InterceptedHttp(xhrBackend, requestOptions);
  }
}
