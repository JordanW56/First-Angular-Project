import { TestBed, inject } from '@angular/core/testing';

import { FlickrAppService } from './flickr-app.service';

describe('FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickrAppService]
    });
  });

  it('should ...', inject([FlickrAppService], (service: FlickrAppService) => {
    expect(service).toBeTruthy();
  }));
});