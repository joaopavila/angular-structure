import { TestBed, inject } from '@angular/core/testing';

import { GetPostService } from './get-post.service';

describe('GetPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPostService]
    });
  });

  it('should be created', inject([GetPostService], (service: GetPostService) => {
    expect(service).toBeTruthy();
  }));
});
