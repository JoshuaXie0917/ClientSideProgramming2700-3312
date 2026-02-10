/******************************************************************************

                            Program Info
    Date: January 22, 2026
    Author: Joshua Xie


*******************************************************************************/


let studentName = "Alex Johnson";
let age = 19;
const program = "IT Programming";
let completedAssignments = 3;
let isLoggedIn = true;
let studentID = "W0123456";

const Total_Assignment = 5;

if (studentName.trim() === "" || studentID.trim() === "") {
    console.log("Invalid identity");
    throw new Error("studentName or studentID are empty!");
}

console.log("---- Data type check ----");
console.log("studentName type:", typeof studentName);
console.log("age type:", typeof age);
console.log("program type:", typeof program);
console.log("completedAssignments type:", typeof completedAssignments);
console.log("isLoggedIn type:", typeof isLoggedIn);
console.log("--------------------------\n");

console.log("---- info check ----");

if (age < 18) {
    console.log("Access denied: Student must be 18 or older");
} else {
    console.log("Access granted");
}

if (!isLoggedIn) {
    console.log("Please log in to continue");
}

switch (program) {
    case "IT Programming":
        console.log("Welcome to the IT Programming program");
        break;
    case "Networking":
        console.log("Welcome to the Networking program");
        break;
    case "Database":
        console.log("Welcome to the Database");
        break;
    case "AI development":
        console.log("Welcome to the AI program");
        break;
    default:
        console.log("Program not recognized");
}
console.log("------------------\n");

console.log("---- Assignment progress ----");

if (completedAssignments < 0) completedAssignments = 0;
if (completedAssignments > Total_Assignment) completedAssignments = Total_Assignment;

for (let i = 1; i <= completedAssignments; i++) {
    console.log("Assignment " + i + " completed");
};

console.log("---- remain assignment ----");
let remaining = Total_Assignment - completedAssignments;

while (remaining > 0) {
    console.log("Remaining assignments: " + remaining);
    remaining--;
};

if (completedAssignments === Total_Assignment) {
    console.log("All assignments completed. Great job!")
};

function displaySummary(name, program) {
    console.log("---- Student Summary ----");
    console.log("Student Name: " + name);
    console.log("Program: " + program);
    console.log("------------------------\n");
};

displaySummary(studentName, program);

function calculateProgress(completed, total) {
    return (completed / total) * 100;
}

let progress = calculateProgress(completedAssignments, Total_Assignment);
console.log("Progress: " + progress.toFixed(2) + "%\n");

const hasPassed = completed => completed >= 3;

if (hasPassed(completedAssignments)) {
    console.log("Status: Passed");
} else {
    console.log("Status: Not Passed");
};
console.log("---------------------------\n");

console.log("===== Final Report =====");
console.log("Name:", studentName);
console.log("Student ID: " + studentID);
console.log("Age:", age);
console.log("Logged in:", isLoggedIn);
console.log("Course:", program);
console.log("Completed Assignments:", completedAssignments + "/" + Total_Assignment);
console.log("Progress:", progress.toFixed(2) + "%");
console.log("Result:", hasPassed(completedAssignments) ? "Passed" : "Failed");
console.log("========================");



/******************************************************************************

                            Cheat Sheet

  // Write the current date into an HTML element (renders as HTML)
    document.getElementById("anyId").innerHTML = Date();

  // Write the current date as plain text (safer, no HTML parsing)
    document.getElementById("anyId").textContent = Date();

  // Print the current date to the browser console (for debugging)
    console.log(Date());

*******************************************************************************/
