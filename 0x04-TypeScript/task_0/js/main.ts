interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
 }

 // student objects
const student1: Student = {
  firstName: 'ken',
  lastName: 'homer',
  age: 42,
  location: 'Nakuru',
}; 

const student2: Student = {
	firstName: 'Milka',
	lastName: 'Salim',
	age: 50,
	location: 'Mombasa',
}; 

// array of students
//const studentsList: Array<Student>= [student1, student2];
const studentsList = [student1, student2];

const table = document.createElement("studentTable");

// Create table header row
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Iterate through the students array and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body or any desired element
document.body.appendChild(table);


 
