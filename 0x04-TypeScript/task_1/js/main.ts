import { runInThisContext } from "vm";

interface Teacher {
    firstName : string;
    lastName : string;
    readonly fullTimeEmployee : boolean;
    yearsOfExperience? : number;
    readonly location : string;
    [key : string] : any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  interface Directors extends Teacher{
    numberOfReports : number;
  }
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  interface  PrintTeacherFunction<Type> {
  (firstName : Type, lastName : Type) : Type;
  }

  const printTeacher: PrintTeacherFunction<string> = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  
    return `${firstLetter}. ${formattedLastName}`;
  };
  console.log(printTeacher("john", "doe"));
  console.log(director1)
  const table = document.querySelector('#studentTable tbody');
  const row = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.textContent = printTeacher("john", "doe");
  row.appendChild(td1);
  table?.appendChild(row);


interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }

interface StudentClass extends Student {};

class StudentClass implements StudentClass
{

    constructor(firstName : string, lastName : string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

const res = new StudentClass("pascal", "ojukwu");
console.log(res.workOnHomework());
console.log(res.displayName());
