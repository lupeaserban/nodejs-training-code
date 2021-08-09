let fs = require('fs')

const getNotes = function () {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!')
    }


}

const removeNote = (title) => {
    const notes = loadNotes();
    let deleted = 0;
    notes.map((note, index) => {
        if (note.title === title) {
            console.log(note.title)
            notes.splice(index, 1);
            saveNotes(notes);
        }
    });
    if (deleted !== 0) {
        console.log("Note deleted successfully!");
    } else console.log('There is no note with title = "' + title + '"!');

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,

}
