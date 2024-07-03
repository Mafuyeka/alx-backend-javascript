interface Student {
    firstname : string;
    lastname : string;
    age : number;
    location : string;
}

const student1 : Student = {
    firstname: "pascal",
    lastname: "ojukwu",
    age: 20,
    location: "lagos",
};
const student2 : Student = {
    firstname: "Onyeka",
    lastname: "ojukwu",
    age: 22,
    location: "lagos",
};



const studentsList : Student[] = [student1, student2];

function renderTable() {
    const table = document.querySelector('#studentTable tbody');
    studentsList.forEach(element => {

        const row = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = element.firstname;
        const td2 = document.createElement('td');
        td2.textContent = element.location;

        row.appendChild(td1);
        row.appendChild(td2);
        table?.appendChild(row);
    });
}

renderTable();
