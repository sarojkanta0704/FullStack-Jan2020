import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home-component/home.component";
import { CoursesComponent } from "./courses-component/courses.component";
import { ContactComponent } from "./contact-component/contact.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //we have to add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
