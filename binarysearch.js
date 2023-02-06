// const binary = (val, arr) => {
//   let lower = 0;
//   let upper = arr.length - 1;

//   while (lower <= upper) {
//     const middle = lower + Math.floor((upper - lower) / 2);
//     console.log("try")
//     if (val === arr[middle]) {
//       return middle
//     }
//     if (val < arr[middle]) {
//       upper = middle - 1
//     } else {
//        lower =  middle + 1
//     }
//   }
//   return -1
// };

// const values = [5,6,7,8,9,10,11,12,13,14,15]
// console.log(binary(14, values))

const sayHello = (name) => {
  if (name) return `Hello ${name}`;

  return "Hello there";
};

console.log(sayHello());

// const sayHello = (name) => {
//   console.log(`'Hello, ${name}'`)
//   };

//   sayHello("Qualified!");
