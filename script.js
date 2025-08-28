// Variables
let notesTitles = [ ]; 
let notes = [ ];

let archiveNotesTitles = [ ]; 
let archivenotes = [ ];

let trashNotesTitles = [ ]; 
let trashnotes = [ ];


// Functions
// Using local storage
function init() {
    getFromLocalStorage();
    renderNotes();
}


// Adds title and note with onclick in index.html
function addNote() {
    let noteTitleInputRef = document.getElementById("noteTitleInput");
    let noteInputRef = document.getElementById("noteInput");
    

    // If empty, abort function
    if (noteTitleInputRef.value.trim() === "" || noteInputRef.value.trim() === "") {
        return;
    }

    if (notes.length >= 10) {
        noteTitleInputRef.value = "";
        noteInputRef.value = "";
        return;
    }

    // Saves a note, adds it to the array and clears the input-space
    notesTitles.push(noteTitleInputRef.value);
    notes.push(noteInputRef.value);

    saveToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}

// Stringify saves strings
function saveToLocalStorage(){
    localStorage.setItem("notesData", JSON.stringify({
        notesTitles: notesTitles,
        notes: notes
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


// Shows the three notes section in html
function showNoteSection() {
    let noteSection = document.getElementById("showNoteSection")
    noteSection.innerHTML = noteSectionTemplate();
}


// Renders notes into "content"
function renderNotes() {
    let contentRef = document.getElementById("content"); 
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) { 
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


// Renders notes into "archiveContent"
function renderArchiveNotes() {
    let ArchiveContentRef = document.getElementById("archiveContent"); 
    ArchiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < archivenotes.length; indexArchiveNote++) { 
        ArchiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}


// Renders notes into "trashContent"
function renderTrashNotes() {
    let TrashContentRef = document.getElementById("trashContent"); 
    TrashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashnotes.length; indexTrashNote++) { 
        TrashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


// Pushes a note to archive
function pushToArchive(indexNote) {
    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle[0]);

    let archiveNote = notes.splice(indexNote, 1);
    archivenotes.push(archiveNote[0]);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}


// Pushes a note to trash
function pushToTrash(indexNote) {
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    let trashNote = notes.splice(indexNote, 1);
    trashnotes.push(trashNote[0]);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}


// Deletes a trash note completely
function deleteNote(indexTrashNote) {
    trashnotes.splice(indexTrashNote, 1);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}


// Restores from trash to archives
function restoreFromTrashToArchives(indexTrashNote) {
    let restoredTitle = trashNotesTitles.splice(indexTrashNote, 1);
    archiveNotesTitles.push(restoredTitle[0]);

    let restoredNote = trashnotes.splice(indexTrashNote, 1);
    archivenotes.push(restoredNote[0]);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}


// Restores from trash to notes
function restoreFromTrashToNotes(indexTrashNote) {
    let restoredTitle = trashNotesTitles.splice(indexTrashNote, 1);
    notesTitles.push(restoredTitle[0]);

    let restoredNote = trashnotes.splice(indexTrashNote, 1);
    notes.push(restoredNote[0]);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}


// Restores from archive to notes
function restoreFromArchiveToNotes(indexArchiveNote) {
    let restoredTitle = archiveNotesTitles.splice(indexArchiveNote, 1);
    notesTitles.push(restoredTitle[0]);
    
    let restoredNote = archivenotes.splice(indexArchiveNote, 1);
    notes.push(restoredNote[0]);

    renderNotes()
    renderArchiveNotes()
    renderTrashNotes()
}