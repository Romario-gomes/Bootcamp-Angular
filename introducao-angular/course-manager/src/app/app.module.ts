import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { Error404Component } from './error-404/error-404.component';
import { CourseMolude } from './courses/couse.module';
import { coreModule } from './core/component/nav-bar/core.module';
@NgModule({
  declarations: [
    AppComponent,
 
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseMolude,
    coreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
