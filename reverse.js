//Split string in to an array of letters

//function that will actually reverse string
function reverse(str) {
  let result = "";
  //iterate backwards
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
let reverseString = "please reverse this string";

console.log(reverse(reverseString));
