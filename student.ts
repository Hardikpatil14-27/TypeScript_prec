// Interface
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    marks: number;
}

// Array
let students: Student[] = [];

// Function - Add Student
function addStudent(
    id: number,
    name: string,
    age: number,
    course: string,
    marks: number
): void {

    let student: Student = {
        id,
        name,
        age,
        course,
        marks
    };

    students.push(student);

    console.log(`${name} Added Successfully`);
}

// Function - Show Students
function showStudents(): void {

    console.log("\n----- Student List -----");

    for (let student of students) {

        console.log(
            `ID : ${student.id}
Name : ${student.name}
Age : ${student.age}
Course : ${student.course}
Marks : ${student.marks}
--------------------------`
        );

    }

}

// Function - Result
function checkResult(student: Student): void {

    if (student.marks >= 35) {
        console.log(`${student.name} : Pass`);
    } else {
        console.log(`${student.name} : Fail`);
    }

}

// Function - Average Marks
function averageMarks(): void {

    let total = 0;

    for (let student of students) {

        total += student.marks;

    }

    let average = total / students.length;

    console.log("\nAverage Marks :", average);

}

// Data
addStudent(1, "Hardik", 21, "MCA", 90);
addStudent(2, "Rahul", 22, "BCA", 55);
addStudent(3, "Amit", 20, "BSc", 28);

// Display
showStudents();

console.log("\nResult");

for (let student of students) {

    checkResult(student);

}

averageMarks();