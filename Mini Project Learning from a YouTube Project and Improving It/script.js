/*
Mini Project: Learning from a YouTube Project and Improving It.
project: "to do list app"
name: Joshua
date: 2026-3-20
*/ 

// Arrays for the three categories
// Each array stores memo objects
let studyList = [];
let workList = [];
let lifeList = [];
// This will point to the current category list.
let currentList = [];
// Load saved data from localStorage
let savedData = localStorage.getItem("memoData");
// If data exists, convert it from string to object.
if (savedData){
    let data = JSON.parse(savedData);
    // Restore each category list
    studyList = data.study;
    workList = data.work;
    lifeList = data.life;
}
// Open a category page
function openCategory(category){
    // Get page elements
    const homePage = document.getElementById("homePage");
    const listPage = document.getElementById("listPage");
    const categoryTitle = document.getElementById("categoryTitle");
    // Hide home page and show list page
    homePage.classList.add("hidden");
    listPage.classList.remove("hidden");
    // Decide which category is selected
    if (category === "study"){
        categoryTitle.textContent = "Study Memo List";
        currentList = studyList;
    }else if (category === "work"){
        categoryTitle.textContent = "Work Memo List";
        currentList = workList;
    }else if (category === "life"){
        categoryTitle.textContent = "Life Memo List";
        currentList = lifeList;
    }
    // Show memos for that category
    showMemos();
}
// Add a new memo
function addMemo(){
    // Get input element
    const inputBox = document.getElementById("inputBox");
    // Check if input is empty
    if (inputBox.value.trim() === ""){
        alert("you must write something.");
        return;
    }
    // Create a memo object
    // memo text
    //status (not completed)
    //save current time
    const newMemo = {
        text: inputBox.value,
        completed: false,
        time: new Date().getTime()
    };
    // Add memo to current category list
    currentList.push(newMemo);
    //Save data to localStorage
    saveData();
    //Clear input box
    inputBox.value = "";
    //Refresh the list on screen
    showMemos();
}
// Show all memos on screen
function showMemos(){
    // Get input element
    const listContainer = document.getElementById("listContainer");
    // Clear old content
    listContainer.innerHTML = "";
    // Loop through all memos.
    currentList.forEach(function(memo, index){
        // Create list item
        let li = document.createElement("li");
        // Create text element
        let text = document.createElement("span");
        text.innerText = memo.text;
        text.className = "memo-text";
        // Create time element
        let time = document.createElement("span");
        time.innerText = new Date(memo.time).toLocaleString();
        time.className = "memo-time";
        // Create Complete button
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";
        completeBtn.className = "complete-btn";
        // When clicked, toggle complete status
        completeBtn.onclick = function(){
            toggleComplete(index);
        };
        // Create Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        // When clicked, delete this memo
        deleteBtn.onclick = function(){
            deleteMemo(index);
        };
        // Group buttons together
        let buttonsDiv = document.createElement("div");
        buttonsDiv.className = "action-buttons";
        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);  
        // Add elements to list item
        li.appendChild(text);
        li.appendChild(time);
        li.appendChild(buttonsDiv);
        
        // If memo is completed
        if (memo.completed){
            li.classList.add("checked");
            completeBtn.innerText = "Undo";
        }
        // Add list item to container
        listContainer.appendChild(li);
    });
}
// Toggle complete / undo
function toggleComplete(index){
    // true<->false, false<->true
    currentList[index].completed = !currentList[index].completed;
    //Update localStorage
    saveData();
    // Refresh the list on screen
    showMemos();
}
// Delete a memo
function deleteMemo(index){
    // Remove the memo at the specified index
    currentList.splice(index, 1);
    // Update localStorage
    saveData();
    // Refresh the list on screen
    showMemos();
}
// Go back to home page
function goHome(){
    const homePage = document.getElementById("homePage");
    const listPage = document.getElementById("listPage");
    const inputBox = document.getElementById("inputBox");
    // Hide list page and show home page
    listPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    // Clear input box
    inputBox.value = "";
}
// Save all data to localStorage
function saveData(){
    // Create an object to store all lists
    let data = {
        study: studyList,
        work: workList,
        life: lifeList
    };
    // convert object to string and save.
    localStorage.setItem("memoData", JSON.stringify(data));
}