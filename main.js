const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const command = process.argv[2];
const words = process.argv.slice(3);

switch(command) {
    case 'translate':
        console.log(words.map(translateWord).join(' '));
        break;
    case 'encode':
        console.log(words.map(encodeWord).join(' '));
        break;
    default:
        console.log('Please enter a valid argument (translate or encode)');    
}