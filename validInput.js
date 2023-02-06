function isValid(s)  {
  const hashMap = {'(': ')', '{': '}', '[': ']'}
  const stack =  []

  for(let char of s) {
    if(hashMap[char]) {
      stack.push(hashMap[char])
    } else if (stack.pop() !==char ) {
      return false
      
    }
    //
  }
  return (stack.length)
};
const hashMap = {'(': ')', '{': '}', '[': ']'}

console.log(isValid(hashMap))


// function validInput(data){
//   let  test = [];
//   for (let i = 0; i < data.length; i ++){
//       let char = data[data.length -i -1]
//       if (data[0] === ')' || data[data.length %2 === 1]){
//           return false;
//       }else if (data[i] === '(' && char === ')'){

//       }
//   }
// }


