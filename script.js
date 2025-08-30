// Variables
let allNotes = {
    "notesTitles": [ ], 
    "notes": [ ],
    "archiveNotesTitles": [ ], 
    "archiveNotes": [ ],
    "trashNotesTitles": [ ],
    "trashNotes": [ ]
}


// Functions
// Using local storage
function init() {
    getFromLocalStorage();
    renderNotes();
}


// Shows the three notes section in html
function showNoteSection() {
    let noteSection = document.getElementById("showNoteSection")
    noteSection.innerHTML = noteSectionTemplate();
}


// Adds title and note with onclick in index.html
function addNote() {
    let noteTitleInputRef = document.getElementById("noteTitleInput");
    let noteInputRef = document.getElementById("noteInput");
    

    // If empty, abort function
    if (noteTitleInputRef.value.trim() === "" || noteInputRef.value.trim() === "") {
        return;
    }

    if (allNotes.notes.length >= 10) {
        noteTitleInputRef.value = "";
        noteInputRef.value = "";
        return;
    }

    // Saves a note, adds it to the array and clears the input-space
    allNotes.notesTitles.push(noteTitleInputRef.value);
    allNotes.notes.push(noteInputRef.value);

    saveToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}


// Stringify saves strings
function saveToLocalStorage(){
    localStorage.setItem("notesData", JSON.stringify({
        notesTitles: allNotes.notesTitles,
        notes: allNotes.notes
    }));
}


// Parse saves an array
function getFromLocalStorage() {
    let myArray = JSON.parse(localStorage.getItem("notesData"));

    if(myArray != null){
        notesTitles = myArray.notesTitles;
        notes = myArray.notes;
    } 
}


// Renders notes into "content"
function renderNotes() {
    let contentRef = document.getElementById("content"); 
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) { 
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


// Renders notes into "archiveContent"
function renderArchiveNotes() {
    let archiveContentRef = document.getElementById("archiveContent"); 
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) { 
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}


// Renders notes into "trashContent"
function renderTrashNotes() {
    let trashContentRef = document.getElementById("trashContent"); 
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) { 
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


// Renders notes with start and destination key
function moveNote(indexNote, startKey, destinationKey) {
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    renderAllNotes()
}


// Deletes a trash note completely
function deleteNote(indexTrashNote) {
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotes.splice(indexTrashNote, 1);
  
    renderAllNotes()
}


function renderAllNotes() {
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}