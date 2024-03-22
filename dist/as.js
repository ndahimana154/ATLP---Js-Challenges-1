"use strict";
let setStudentAgeApi = (student, age) => {
    //async code below
    console.log("1. Starting ..");
    setTimeout(() => {
        console.log("2. setting age for the student");
        student.age = age;
    }, 500);
    console.log("3. Done ..");
};
let student = { name: "Eric" };
let age = 20;
setStudentAgeApi(student, age);
