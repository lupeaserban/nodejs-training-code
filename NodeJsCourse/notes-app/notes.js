let fs = require('fs')
let chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {

    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("No note was found!"));
    }
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
    listNotes: listNotes,
    readNote: readNote
}
