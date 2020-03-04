import { Component } from "@angular/core";
import { Course } from "../Models/course";
import { CoursesService } from '../Services/courses.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: [ "./courses.component.css" ]
})
export class CoursesComponent
{
  courses: Course[] = [];
  newForm: FormGroup;

  constructor(private coursesService: CoursesService)
  {
    /* newForm */
    this.newForm = new FormGroup({
      courseno: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(5)
      ]),
      coursename: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9 .]*$"),
        Validators.maxLength(30)
      ]),
      duration: new FormControl(null, [])
    });


    //For getting courses
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


  onSaveClick()
  {
    this.coursesService.insertCourse(this.newForm.value).subscribe(
      (response) => {
        console.log(response);
      },

      (err) => {
        console.log(err);
      }
    );
  }
}
