// Template for submits 
function getNoteTemplate(indexNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${allNotes.notesTitles[indexNote]}</strong><br><br>${allNotes.notes[indexNote]}</p>
            <div class="buttonLine">
                <img class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')" class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template for submits to archive
function getArchiveNoteTemplate(indexArchiveNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${allNotes.archiveNotesTitles[indexArchiveNote]}</strong><br><br>${allNotes.archiveNotes[indexArchiveNote]}</p>
            <div class="buttonLine">
                <img onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')" class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template for submits to trash
function getTrashNoteTemplate(indexTrashNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${allNotes.trashNotesTitles[indexTrashNote]}</strong><br><br>${allNotes.trashNotes[indexTrashNote]}</p>
            <div class="buttonLine">
                <img onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')" class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archiveNotes')" class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="deleteNote(${indexTrashNote})" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template to show all the notes
function noteSectionTemplate(contentId, archiveId, trashId) {
    return `
        <section class="show-note-section">
            <div class="collectNotesArea">
                <h3>Neu</h3>
                <div id="${contentId}"></div>    
            </div>
            <div class="collectNotesArea">
                <h3>Archiv</h3>
                <div id="${archiveId}"></div>    
            </div>
            <div class="collectNotesArea">
                <h3>Papierkorb</h3>
                <div id="${trashId}"></div>         
            </div>
        </section>
    `;
}

document.body.innerHTML += noteSectionTemplate("content", "archiveContent", "trashContent");