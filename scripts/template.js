// Template for submits 
function getNoteTemplate(indexNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${notesTitles[indexNote]}</strong><br><br>${notes[indexNote]}</p>
            <div class="buttonLine">
                <img class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img onclick="pushToArchive(${indexNote})" class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="pushToTrash(${indexNote})" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template for submits to archive
function getArchiveNoteTemplate(indexNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${archiveNotesTitles[indexNote]}</strong><br><br>${archivenotes[indexNote]}</p>
            <div class="buttonLine">
                <img onclick="restoreFromArchiveToNotes(${indexNote})" class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="pushToTrash(${indexNote})" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template for submits to trash
function getTrashNoteTemplate(indexTrashNote) {
    return `
        <div class="submittedContainer">
            <p class="submittedNote"><strong>${trashNotesTitles[indexTrashNote]}</strong><br><br>${trashnotes[indexTrashNote]}</p>
            <div class="buttonLine">
                <img onclick="restoreFromTrashToNotes(${indexTrashNote})" class="notes-icons" src="./assets/icons/notes-icon.png" alt="Note Icon">
                <img onclick="pushToArchive(${indexTrashNote})" class="notes-icons" src="./assets/icons/archive-icon.png" alt="Archive Icon">
                <img onclick="deleteNote(${indexTrashNote})" class="notes-icons" src="./assets/icons/delete-icon.png" alt="Delete Icon">
            </div>
        </div>
    `;
}


// Template to show all the notes
function noteSectionTemplate(contentId, archiveId, trashId) {
    return `
        <section id="showNoteSection">
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