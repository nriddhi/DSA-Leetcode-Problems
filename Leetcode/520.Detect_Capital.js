var detectCapitalUse = function (word) {
  let k;
  characterf = word.charAt(0);
  characterl = word.charAt(word.length - 1);
  if (
    characterf === characterf.toUpperCase() &&
    characterl === characterl.toLowerCase()
  ) {
     k = 0;
    for (var i = 0; i < word.length; i++) {
      
      if (word[i] === word[i].toUpperCase()) {
        k++;
      }
    }
}
        if (k > 1) {return false;}
        else if (
            (characterf === characterf.toUpperCase() &&
              characterl === characterl.toLowerCase()) ||
            word === word.toUpperCase() ||
            word === word.toLowerCase()
          ) {
            return true;
          } else {
            return false;
          } 
};

console.log(detectCapitalUse("PAG"));
