// function solution(A) {
//   // only positive values, sorted
//   A = A.filter(x => x >= 1).sort((a, b) => a - b)

//   let x = 1

//   for(let i = 0; i < A.length; i++) {
//       // if we find a smaller number no need to continue, cause the array is sorted
//       if(x < A[i]) {
//           return x
//       }
//       x = A[i] + 1
//   }

//   return x
// }
// console.log(solution([1, 3, 6, 4, 1, 2]))




// select d.dept_id, count(e.emp_id) as count, sum(e.salary) as sum_of_salary 
// from department d, employee e
// where d.dept_id = e.dept_id
// group by d.dept_id
// order by d.dept_id;


// function solution(A, K) {
//   var n = A.length;
//   for (var i = 0; i < n - 1; i++) {
//       if ((A[i] != A[i+1]) && (A[i]+ 1 != A[i + 1])) {
//           return false;
//   }
//   if (A[0] != 1 || A[n - 1] != K) 

//     return false;
  
//   else
//       return true;
// }

// }

function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
      if (A[i] != A[i+1] && A[i]+ 1 != A[i + 1]) 
          return false;
  
  if (A[0] != 1 || A[n - 1] != K)
      return false;
  else
      return true;
}
}
// if ((A[i] != A[i+1]) && (A[i]+ 1 != A[i + 1])) {
//   return false;