import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course } from '../Models/course';

@Injectable({ providedIn: "root"})
export class CoursesService
{
  constructor(private httpClient: HttpClient)
  {
  }
  
  getCourses()
  {
    return this.httpClient.get<Course[]>("/courses");
  }

  insertCourse(course: Course)
  {
    return this.httpClient.post("/insert-course", course, { responseType: "text" });
  }

  updateCourse(course: Course)
  {
    return this.httpClient.post("/update-course", course, { responseType: "text" });
  }

  deleteCourse(courseno: number)
  {
    return this.httpClient.post("/delete-course", { courseno: courseno }, { responseType: "text" })
  }
}

