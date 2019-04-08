import { Component, OnInit } from '@angular/core';
import { FlickrAppService } from '../flickr-app.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'flickr-app',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss']
})
export class FlickrComponent implements OnInit {

  searchBox = new FormControl();
  searchModel$: Observable<string>;
  photos: Object;
  

  constructor(private formBuilder: FormBuilder, private flickrService: FlickrAppService) { }

  ngOnInit() {
    this.searchBox.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((query: string) => this.flickrService.getResult(query)))
    .subscribe(value => {
      this.photos = value;
    });
  }

}
