import { ConnectionBackend, RequestOptions, Http, Headers} from '@angular/http';

export class HeadersHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
      super(backend, defaultOptions);
  }

  public HeadersBasic() {
    const baseOptions: RequestOptions = new RequestOptions({
        headers: this.myHeaders(),
    });

    return baseOptions;
  }

  private myHeaders() {
    const headers: Headers = new Headers();
    return headers;
  }
}
