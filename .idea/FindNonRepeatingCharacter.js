function nonRepeatingCharacter(inputString) {
  var characterArray = inputString.split("");
  var map = new Map();
  for (var num of characterArray) {
    if (map.has(num)) {
      var valueStored = map.get(num);
      map.set(num, valueStored + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (var [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return "_";
}
var inputString = "abacabad";
var firstNonRepeatingChar = nonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar);
