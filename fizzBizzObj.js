function fizzBuzz(num) {
  let fizzObj = {
    fizz: 0,
    buzz: 0,
    fizzBuzz: 0,
  };

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzObj.fizzBuzz++;
    } else if (i % 5 === 0) {
      fizzObj.buzz++;
    } else if (i % 3 === 0) {
      fizzObj.fizz++;
    }
  }
  return fizzObj;
}
// console.log(fizzBuzz(100));

const numArr = [150, 212, 345, 333, 2890, 4456, 2934867, 123, 321, 4765];
function multipleNums(arr) {
  const fizzArr = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    const ans = fizzBuzz(current);
    fizzArr.push(ans);
  }
  return finalAns(fizzArr);
}
console.log(multipleNums(numArr));

function finalAns(arr) {
  // let output = {
  //   manyFizz: 0,
  //   lessFizz; 0
  // }

  let current;
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    console.log(current);
  }
}
// finalAns()
