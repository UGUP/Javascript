function evenlengthNonRepeatingChar(characterArray) {
  var set = new Set();
  for (var char of characterArray) {
    if (!set.has(char)) {
      set.add(char);
    } else {
      set.delete(char);
    }
  }
  if (set.size != 0) {
    var iterator = set.keys();
    var firstNonRepeatingChar = iterator.next().value;
    return firstNonRepeatingChar;
  } else {
    return "_";
  }
}

function oddlengthNonRepeatingChar(characterArray) {
  var set = new Set();
  for (var char = 0; char < characterArray.length; char++) {
    if (
      !set.has(characterArray[char]) &&
      characterArray[char] != characterArray[char - 1] &&
      characterArray[char] != characterArray[char + 1]
    ) {
      set.add(characterArray[char]);
    } else {
      set.delete(characterArray[char]);
    }
  }
  if (set.size !== 0) {
    var iterator = set.keys();
    var firstNonRepeatingChar = iterator.next().value;
    return firstNonRepeatingChar;
  } else {
    return "_";
  }
}

function nonRepeatingCharacter(inputString) {
  var characterArray = inputString.split("");
  var sizeOfArray = characterArray.length;
  if (sizeOfArray % 2 !== 0) {
    return oddlengthNonRepeatingChar(characterArray);
  } else {
    return evenlengthNonRepeatingChar(characterArray);
  }
}
var inputString = "abacabaabacaba";
var firstNonRepeatingChar = nonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar);
