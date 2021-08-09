const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

//add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
})

//read note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler  () {
        console.log("Reading a note!")
    }
})

//list notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler () {
        console.log("Listing notes!")
    }
})

yargs.parse()
