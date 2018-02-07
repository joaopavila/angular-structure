import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpFactory } from './http-service/factory/http.factory';


@NgModule({
  imports: [
    HttpModule
  ],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: Http,
      useFactory: HttpFactory.injectHttpFactory,
      deps: [XHRBackend, RequestOptions]
    },
  ],
})
export class CoreModule { }
