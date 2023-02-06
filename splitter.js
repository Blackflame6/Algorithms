const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 3;
function splitter(arr, num) {
  let newArr = [];
  for (let i of arr) {
    let last = newArr[newArr.length - 1];

    if (!last || last.length === num) {
      newArr.push([i]);
    } else {
      last.push(i);
    }
  }
  return newArr;
}

console.log(splitter(arr, num));

