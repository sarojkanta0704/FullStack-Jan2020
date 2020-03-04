export class Course
{
  courseno: number;
  coursename: string;
  duration: string;

  constructor(courseNo: number, courseName: string, duration: string)
  {
    this.courseno = courseNo;
    this.coursename = courseName;
    this.duration = duration;
  }
}