class Student
{
  studentId: number;
  studentName: string;

  getUpperCase()
  {
    var u = this.studentName.toUpperCase();
    return u;
  }
}

var a : Student = new Student();
a.studentId = 1;
a.studentName = "Scott";

var b : Student = new Student();
b.studentId = 2;
b.studentName = "John";

console.log(a);
console.log(b);
console.log(a.getUpperCase());
console.log(b.getUpperCase());
