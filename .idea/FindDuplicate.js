function FindDuplicate(array) {
  let set = new Set();
  for (var num of array) {
    if (!set.has(num)) {
      set.add(num);
    } else {
      return num;
    }
  }
  return -1;
}
var array = [1, 2, 3, 4, 2, 4, 5, 5, 3];
let output = FindDuplicate(array);
console.log(output);
