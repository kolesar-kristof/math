var lives = 5;
var success = false;
var points = 0;
var left = Math.floor(Math.random() * 100);
var right = Math.floor(Math.random() * 100);
var operation = Math.random() < 0.5 ? '+' : '-';

const readline = require('readline');
const interface = readline.createInterface(process.stdin, process.stdout);

interface.setPrompt(lives + ' életed van. ' + left + operation  + right + '=');
interface.prompt();

interface.on('line', function(line) {
    if (line == (operation == '+' ? (left+right) : (left-right) )) {
        console.log('Remek! ' + ++points + ' pontod van.');
        left = Math.floor(Math.random() * 100);
        right = Math.floor(Math.random() * 100);
    } else if (line != '') {
        lives -= 1;
    }
    if (lives > 0) {
        interface.setPrompt(lives + ' életed van. ' + left + operation + right + '=');
        interface.prompt();
    } else {
        console.log('Meghaltál. Az eredmény ' + left + operation + right + '=' + (operation == '+' ? (left+right) : (left-right) ) + ' lett volna.');
        interface.close()
    }
}).on('close',function() {
    if (lives > 0 && !success) {
        console.log();
        console.log('Feladtad?');
    }
    process.exit(0);
});
