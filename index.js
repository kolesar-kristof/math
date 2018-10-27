var left = Math.floor(Math.random() * 100);
var right = Math.floor(Math.random() * 100);

const readline = require('readline');
const interface = readline.createInterface(process.stdin, process.stdout);

interface.setPrompt(left + '+' + right + '=');
interface.prompt();
interface.on('line', function(line) {
    if (line == left+right) {
        console.log('Remek!');
        interface.close();
    }
    interface.prompt();
}).on('close',function(){
    process.exit(0);
});
