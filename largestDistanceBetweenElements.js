// Given an array of elements

//  Ensure that the array is composed on only unique value
// Find the greatest distance between two values side by side.

// function largestDistance(array) {
//   const differenceArray = [];
//   for (let i = 0; i <= newArr.length - 2; i++) {
//     const current = newArr[i];
//     const next = newArr[i + 1] ;

//     const difference = next - current;
//     differenceArray.push(difference);
//   }
//   const largest = Math.max(...differenceArray);
//   return largest;
// }

// const arr = [111, 222, 333, 222, 444, 333, 555, 444, 667, 666, 777, 888, 999];
// const newArr = [...new Set(arr)];
// console.log(largestDistance(arr));


function largestDistance(array) {
  // your code here...
const newArr = [...new Set(arr)];


  let largestNum = 0
  for (let i = 0; i <= newArr.length - 2; i++) {
    const current = newArr[i];
    const next = newArr[i + 1];
    
    const difference = next - current;
   if (difference > largestNum ) {
    largestNum = difference
   }
  }

  return largestNum;
}

const arr = [111, 222, 333, 222, 444, 333, 555, 444, 667, 666, 777, 888, 999];
console.log(largestDistance(arr));
