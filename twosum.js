// const twoSum =(arr, sum)=> {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === sum) {

//         return [arr[i], arr[j]]
//       }
//       count++

//     }
//   }
//   console.log(count)
//   return "Not found"
// }
// const arr =  [1,2,3,4,5,6,7,8,9]
// const sum =17

// console.log(twoSum(arr, sum))

const twoSum = (arr, sum) => {
  let count = 0;
  let checkedNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let neededNumber = sum - current;
    if (!checkedNumbers.includes(neededNumber)) {
      checkedNumbers.push(current);
    } else {
      return [neededNumber, current];
    }
    count++;
  }
  console.log(count);
  return "Not found";
};

let arr = [4, 7, 2, 8, 5, 3, 9, 7, 10];
let sum = 19;

console.log(twoSum(arr, sum));


// function twoSum(arr, sum) {
//   const pastNumbers = []
//   let current, neededNumber

//   for(let i = 0; i < arr.length; i++) {
//       current = arr[i]
//       neededNumber = sum - current
//       if(!pastNumbers.includes(neededNumber)) {
//           pastNumbers.push(current)
//       } else {
//           return [neededNumber, current]
//       }
//   }
//   return false
// }

// const arr = [1,2,3,4,5,6]
// const sum = 11
// console.log(twoSum(arr, sum))











// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;

//   }
//   // Getter
//   getArea() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square); // 100
