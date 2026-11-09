let students = [
  { id: 1001, name: "Ali", marks: 85 },
  { id: 1002, name: "Sara", marks: 45 },
  { id: 1003, name: "Ahmed", marks: 92 },
  { id: 1004, name: "Ayesha", marks: 35 },
  { id: 1005, name: "Hamza", marks: 67 }
];

function checkResult(marks) {
  if (marks >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(checkResult(45)); 
const projectName = "StudyFlow";
const welcomeMessage= "Welcome to " + projectName;
document.querySelector("#welcome-message").textContent = welcomeMessage;

const tableBody = document.querySelector("#student-table-body");

for (let i = 0; i < students.length; i++) {
  let tableRow = document.createElement("tr");

  let idCell = document.createElement("td");
  idCell.textContent = students[i].id;

  let nameCell = document.createElement("td");
  nameCell.textContent = students[i].name;

  let marksCell = document.createElement("td");
  marksCell.textContent = students[i].marks + "%";

  let resultCell = document.createElement("td");
  resultCell.textContent = checkResult(students[i].marks);

  tableRow.appendChild(idCell);
  tableRow.appendChild(nameCell);
  tableRow.appendChild(marksCell);
  tableRow.appendChild(resultCell);

  tableBody.appendChild(tableRow);
}
let totalStudents = students.length;
let passedStudents = 0;
let failedStudents = 0;
let totalMarks = 0;
for(let i = 0; i < students.length; i++){
    totalMarks += students[i].marks;
    if(students[i].marks >= 50){
        passedStudents++;
    }else{
        failedStudents++;
    }
}
let averageMarks = totalMarks / students.length;
console.log("Total Students" , totalStudents);
console.log("Passed Students" , passedStudents);
console.log("Failed Students" , failedStudents);
console.log("Average Marks" , averageMarks + "%");

let getPassingStudents = () =>{
     return students.filter(function(student){
        return student.marks >= 50;
     });
}

const passingList = document.querySelector(".passing-list");
const  passingStudents = getPassingStudents();
for(let i = 0; i < passingStudents.length; i++){
    let studentItem = document.createElement("p");

    studentItem.textContent  = 
    passingStudents[i].name + "-" + passingStudents[i].marks + "%";

    passingList.appendChild(studentItem);
}