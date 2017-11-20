var dictionary = require('./palavroes.js');
module.exports = function getProfaneWords(str) { str = str || '';
    var regexp = new RegExp(dictionary.join('|'), 'gi');
    return str.match(regexp);
};