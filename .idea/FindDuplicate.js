function FindDuplicate(array) {
  let map = new Map();
  for (var i = 0; i < array.length; i++) {
    let temp = array[i];
    if (!map.has(temp)) {
      map.set(temp, 0);
    } else {
      return temp;
    }
  }
  return -1;
}
var array = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8];
let output = FindDuplicate(array);
console.log(output);
