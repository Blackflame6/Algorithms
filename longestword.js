// const longest = (str) => {
//   const splitStr = str.split(" ");
//   const longestLength = 0;
//   for (let i = 0; i < splitStr; i++) {
//     if (arr[i] > longest) {
//       longestLength = arr[i].length;
//     }
//   }
//   return longestLength;
// };

// console.log(longest("I love to code"));



function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = "";
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
	longestWord = strSplit[i];
     }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog FREELANCER"));