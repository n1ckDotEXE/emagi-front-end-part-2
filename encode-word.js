const emojis = require('./emojis.js');

const encodeWord = function(word) {
    const letters = word.split('');
    const symbols = letters.map(function (char) {
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                return emoji.symbol;
            }
        }
        return char;
    })
    return symbols.join();
}

module.exports = encodeWord;