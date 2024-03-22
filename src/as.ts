interface Student {
    name: string;
    age?: number
  }
  let setStudentAgeApi = (student: Student, age:number) => {
    //async code below
    console.log("1. Starting ..");
    setTimeout(() => {
      console.log("2. setting age for the student");
      student.age = age;
    }, 500);
    console.log("3. Done ..");
  };
  
  let student: Student = { name: "Eric" };
  let age:number = 20;
  
  setStudentAgeApi(student, age);
  