export class Course
{
  courseNo: number;
  courseName: string;
  duration: string;

  constructor(courseNo: number, courseName: string, duration: string)
  {
    this.courseNo = courseNo;
    this.courseName = courseName;
    this.duration = duration;
  }
}