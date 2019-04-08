import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';
import { FlickrAppService } from './flickr-app.service';
import {NgxPaginationModule} from 'ngx-pagination'; 
import 'bootstrap';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [FlickrAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
