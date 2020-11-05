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

// module.exports =  encodeWord = word => {
//     let result = '';
//     for(i in word) {
//         for(j in emojis) {
//             if(word[i].toLowerCase() === emojis[j].letter) {
//                 result += emojis[j].symbol;
//             } else {
//                 result += word[i];
//             }
//         }
//     }
//     return result;
// }