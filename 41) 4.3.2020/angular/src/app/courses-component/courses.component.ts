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

  editForm: FormGroup;
  editIndex: number;

  deleteForm: FormGroup;
  deleteIndex: number;

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


    /* editForm */
    this.editForm = new FormGroup({
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

    /* deleteForm */
    this.deleteForm = new FormGroup({
      courseno: new FormControl(null),
      coursename: new FormControl(null),
      duration: new FormControl(null)
    });

    //this.editForm.get("courseno").disable();

    this.loadCourses();
  }


  loadCourses()
  {
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


  onNewCourseClick()
  {
    this.newForm.reset();
  }

  onSaveClick()
  {
    if (this.newForm.valid)
    {
      this.coursesService.insertCourse(this.newForm.value).subscribe(
        (response) => {
          console.log(response);
          this.loadCourses();
        },
  
        (err) => {
          console.log(err);
        }
      );
    }
  }


  onEditClick(i)
  {
    var course = this.courses[i];
    this.editForm.reset();

    this.editForm.patchValue({
      courseno: course.courseno,
      coursename: course.coursename,
      duration: course.duration
    });
    this.editIndex = i;
  }


  onUpdateClick()
  {
    if (this.editForm.valid)
    {
      this.coursesService.updateCourse(this.editForm.value).subscribe(
        (response) => {
          console.log(response);
          this.loadCourses();
        },
  
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onDeleteClick(i)
  {
    var course = this.courses[i];
    this.deleteForm.reset();

    this.deleteForm.patchValue({
      courseno: course.courseno,
      coursename: course.coursename,
      duration: course.duration
    });
    this.deleteIndex = i;
  }


  onDeleteConfirmClick()
  {
    if (this.deleteForm.valid)
    {
      this.coursesService.deleteCourse(this.deleteForm.value.courseno).subscribe(
        (response) => {
          console.log(response);
          this.loadCourses();
        },
  
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
