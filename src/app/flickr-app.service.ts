import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

// some imports included for the get request, because HttpClient uses RxJS code, 
// including error handling and Observables
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FlickrAppService {
  result$: Observable<string[]>;
  key = '0b910fc06649783df449f6ad5a02f6d5';
  constructor(private http: HttpClient) {}
  
  getResult(query: string) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this
      .key}&tags=${query}&format=json&nojsoncallback=1`;
    return this.http
      .get(url)
      .pipe(map((data: any) => {
        if (data.stat === 'ok') {
          return data.photos.photo.map((photo: any) => {
            return {
              url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
              title: photo.title,
            };
          });
        } else {
          return [];
        }
      }));
  }
}