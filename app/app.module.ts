import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-forms/reactive-form.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	ReactiveFormsModule
  ],
  declarations: [
  	AppComponent,
  	ReactiveFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
