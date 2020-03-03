import { Component } from "@angular/core";
import { Course } from "../Models/course";
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: [ "./courses.component.css" ]
})
export class CoursesComponent
{
  courses: Course[] = [];

  constructor(private coursesService: CoursesService)
  {
    this.coursesService.getCourses().subscribe(

      (response) => {
        //success
        console.log(response);
        this.courses = response;
      },

      (err) => {
        //error
        console.log(err);
      }

    );
  }
}
