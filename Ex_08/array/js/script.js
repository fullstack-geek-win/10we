// var empID = [1,2,3,4,5];
// var empName = ['Balaji', 'Chandru', 'Geetha', 'Deepa', 'Sai']

// // 0 - 4
// for (var i = 0; i < 7; i++) {
//     console.log(empID[i]);
//     console.log(empName[i]);
// }

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
document.getElementById("demo").innerHTML = numbers;