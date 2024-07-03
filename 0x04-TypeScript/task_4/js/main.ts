const cteacher : Subjects.Teacher = {
    firstName: 'Pascal',
    lastName: 'Ojukwu',
    experienceTeachingC: 10,
};
export const cpp = new Subjects.Cpp() ;
console.log('c++');
cpp.setTeacher(cteacher);
cpp.getRequirements();
cpp.getAvailableTeacher();

export const java = new Subjects.Java() ;
console.log('java');
cpp.setTeacher(cteacher);
cpp.getRequirements();
cpp.getAvailableTeacher();

export const react = new Subjects.React() ;
console.log('react');
cpp.setTeacher(cteacher);
cpp.getRequirements();
cpp.getAvailableTeacher();
