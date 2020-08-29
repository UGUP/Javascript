function FindDuplicate(array) {
  let map = new Map();
  for (var i of array) {
    if (!map.has(i)) {
      map.set(i, 0);
    } else {
      return i;
    }
  }
  return -1;
}
var array = [1, 2, 3, 2, 3];
let output = FindDuplicate(array);
console.log(output);
