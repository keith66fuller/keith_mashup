var inquirer  = require('inquirer');

const quote   = require('star-wars-quotes');


require("dotenv").config();

var keys          = require('./keys.js');
const xlate    = require('translate');
xlate.engine   = 'google';
xlate.key      = keys.apikey;

getInput();

function getInput() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'initMsg',
            message: 'Pick a language, and I\'ll display a Star Wars quote in that English and the language you chose.',
            choices: [
                'German',
                'Italian',
                'French',
                'Spanish',
                'exit'
            ]
        }
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.initMsg == 'exit') process.exit();
        mashup(inquirerResponse.initMsg)
        getInput();
    })
    
}


function mashup(a) {
    console.log(a)
    console.log(quote())
    
    xlate(quote(), a).then(text => {
        console.log(a)
        console.log(text)
    })

}

function clearConsole() {
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
}