var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getUpperCase = function () {
        var u = this.studentName.toUpperCase();
        return u;
    };
    return Student;
}());
var a = new Student();
a.studentId = 1;
a.studentName = "Scott";
var b = new Student();
b.studentId = 2;
b.studentName = "John";
console.log(a);
console.log(b);
console.log(a.getUpperCase());
console.log(b.getUpperCase());
