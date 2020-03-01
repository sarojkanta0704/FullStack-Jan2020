import { Component } from "@angular/core";
import { Course } from "../Models/course";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: [ "./courses.component.css" ]
})
export class CoursesComponent
{
  courses: Course[] = [ 
    new Course(1, "UI Technologies", "2 months"),
    new Course(2, "Python", "2 months"),
    new Course(3, "SAP", "3 months")
  ] ;
}
