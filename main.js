const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

// const userInput = 
// const words = process.argv.slice(2);
// const feature = words[0];
// // const encoding = words.map(encodeWord);
// // console.log(encoding.join(' '));
// const translation = words.map(translateWord)
// const encoding = words.map(encodeWord);

// console.log(translation.join(' '));

const command = process.argv[2];
const words = process.argv.slice(3);

const translation = words.map(translateWord);
const encoding = words.map(encodeWord);

switch(command) {
    case 'translate':
        console.log(translation.join(' '));
        break;
    case 'encode':
        console.log(encoding.join(' '));
        break;
    default:
        console.log('Please enter a valid argument (translate or encode)');    
    }