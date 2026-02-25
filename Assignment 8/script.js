const messageInput = document.getElementById("messageInput");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const removeNoteBtn = document.getElementById("removeNoteBtn");
const resetBtn = document.getElementById("resetBtn");

const card = document.getElementById("card");
const cardMessage = document.getElementById("cardMessage");

let isAltColor = false;
showBtn.addEventListener("click", function(){
    cardMessage.textContent = messageInput.value;
});

colorBtn.addEventListener("click", function(){
    if(isAltColor === false){
        card.style.backgroundColor = "black";
        card.style.color = "white";
        isAltColor = true;
    }else{
        card.style.backgroundColor = "white";
        card.style.color = "black";
        isAltColor = false;
    }
});

addNoteBtn.addEventListener("click", function(){
    const existingNote = document.getElementById("note");
    if(existingNote){
        return;
    }
    const note = document.createElement("p");
    note.id = "note";
    note.textContent = "This is a note.";
    card.appendChild(note);
});

removeNoteBtn.addEventListener("click", function(){
    const note = document.getElementById("note");
    if(note){
        note.remove();
    }
});

resetBtn.addEventListener("click", function(){
    messageInput.value = "";
    cardMessage.textContent = "";
    card.style.backgroundColor = "white";
    card.style.color = "black";
    isAltColor = false;

    const note = document.getElementById("note");
    if(note){
        note.remove();
    }
});
