import { TestBed, inject } from '@angular/core/testing';

import { HeadersHttp } from './http.header';

describe('HeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersHttp]
    });
  });

  it('should be created', inject([HeadersHttp], (service: HeadersHttp) => {
    expect(service).toBeTruthy();
  }));
});
