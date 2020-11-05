const emojis = require('./emojis.js');


// // string-building version
const encodeWord = function(word) {
    let result = '';
    for (const char of word) {
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                result += emoji.symbol;
            } else {
                result += char;
            }
        }
    }
    return result;
}

module.export = encodeWord;