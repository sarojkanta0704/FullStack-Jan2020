import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home-component/home.component";
import { CoursesComponent } from "./courses-component/courses.component";
import { ContactComponent } from "./contact-component/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
