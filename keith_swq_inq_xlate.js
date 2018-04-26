var inquirer = require('inquirer');
inquirer.pageSize = 5;


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
                message: '\n\n\n\nPick a language, and I\'ll display a Star Wars quote in that English and the language you chose.',
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
            mashup(inquirerResponse.initMsg);
        })
        .then(getInput)
    
}


function mashup(lang) {
    for (var i =0; i<3; i++) console.log('\n');

    xlate(q = quote(), lang).then(text => {
        console.log(q);
        console.log(text);
    })

}

