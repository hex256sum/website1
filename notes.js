// Select elements
const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const notesList = document.getElementById('notes-list');

// Load saved notes on page load
window.onload = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToList(note));
};

// Save a new note
saveNoteButton.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (note) {
        // Save to localStorage
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));

        // Add to the list
        addNoteToList(note);

        // Clear the input
        noteInput.value = '';
    }
});

// Add a note to the list
function addNoteToList(note) {
    const li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
}
