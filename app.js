console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

var command_old = process.argv;
console.log("command_old", command_old);
var argv = yargs.argv;
var command = argv._[0];

console.log('Yargs', argv);
console.log('Command: ', command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command == 'list') {
  var allNotes = notes.getAll();
  console.log("Printing ${allNotes.length} notes.");
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not find');
}


// var user = os.userInfo();
// fs.appendFile('hej.txt', `Dzien dobry ${user.username}! You are ${notes.age}`);

// var note = notes.addNote();
//
// console.log(note);
//
// var sum = notes.add(2,3);
//
// console.log(sum);


// console.log(_.isString(343434));
// console.log(_.isString('Iza'));
//
// console.log(_.uniq(['Lala', 1, 2, 1, 2, 3, 3, 'Lala']));
