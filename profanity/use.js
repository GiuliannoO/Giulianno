var dictionary = require('./palavroes.js');
module.exports = function use(newDictionary) {
  dictionary.length = 0;
  dictionary.push.apply(dictionary, newDictionary);
};