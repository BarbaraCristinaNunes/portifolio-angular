import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiologistComponent } from './pages/biologist/biologist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WebDeveloperComponent } from './pages/webDeveloper/web-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    BiologistComponent,
    WebDeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
