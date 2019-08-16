//create a javascript that will display a page that need a titile 
//1. create a login 
//2. connect to a db sys ..mongo or aws
//3. make a go location 

console.log('starting app.js');
//requre will load in modules, 3 ways to use require
const fs = require('fs'); //1. store the module result into variable fs

const notes = require('./notes.js');//2. use a file you created 
const _ = require('lodash'); //3. use npm module to be included, must fist download into terminal
const yargs = require('yargs'); 

const argv = yargs.argv ; 
var command = argv._[0]; //grab data from terminal
console.log('command:',command);
//console.log('process',process.argv);
console.log('Yargs', argv);//build in parsing  ex.--title=secrets

if(command == 'add'){
    console.log('adding new note');
    notes.addNote(argv.title,argv.body);
}else if(command == 'list'){
    notes.getAll();
    //console.log('listing all note');
}else if(command == 'read'){
    notes.getNote(argv.title);
    //console.log('fetching node')
}else if(command == 'remove'){
    notes.removeNote(argv.title); 
    //console.log('removing node');
}else{
    console.log('not recognized');
}
