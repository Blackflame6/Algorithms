// function ransomNote(magazinePage, note) {
//     const magArr = magazinePage.split(' ')
//     const noteArr = note.split(' ')

//     const magObj = {}

//     magArr.forEach((word) => {
//         if(!magObj[word]) magObj[word] = 0
//         magObj[word]++
//     })

//     let noteIsPossible = true

//     noteArr.forEach((word) => {
//         if(magObj[word]) {
//             magObj[word]--
//             if(magObj[word] < 0) noteIsPossible = false
//         }
//         else
//         noteIsPossible = false
//     })
//     return noteIsPossible
// }

// console.log(ransomNote(magazinePage, note))

const magazinePage = `mag mag`;

const note = `mag`;

function ransomNote(magazinePage, note) {
  const magArr = magazinePage.split(" ");
  const noteArr = note.split(" ");

  const noteIsPossible = noteArr.every((word) => {
    const indexOfWord = magArr.indexOf(word);
    if (indexOfWord > -1) {
      magArr.splice(indexOfWord, 1);
      return true;
    }
  });
  return noteIsPossible;
}

console.log(ransomNote(magazinePage, note));
