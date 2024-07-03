interface DirectorInterface {
workFromHome() : string;
getCoffeeBreak() : string;
workDirectorTasks() : string;
}

interface TeacherInterface {
  workFromHome() : string;
  getCoffeeBreak(): string;
  workTeacherTasks() : string;
  }

  interface Director extends DirectorInterface {
  }
  class Director implements DirectorInterface {
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workFromHome(): string {
      return "Working from home";
    }
    
  }
  interface Teacher extends TeacherInterface {
  }
  class Teacher implements TeacherInterface {
     workFromHome(): string {
       return "Cannot work from home";
     }
      
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
function createEmployee(salary: number | string) : Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher() as Teacher;
  }
  else {
     return new Director() as Director;
  }
}

function isDirector(employee: Teacher | Director) : employee is  Director {
return (employee as Director).workDirectorTasks() !== undefined
}
function executeWork(employee : Teacher | Director) : void {
if (isDirector(employee)) {
  employee.workDirectorTasks();
}
else {
  employee.workTeacherTasks();
}
}

type Subjects = "Math" | "History";
function teachClass(todayClass : Subjects) : string {
 if (todayClass === "Math") {
  return "Teaching Math";
 }
  else {
    return "Teaching History";
  }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
