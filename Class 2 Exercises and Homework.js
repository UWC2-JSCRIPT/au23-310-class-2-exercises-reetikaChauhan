// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const reetikaChauhan = {
 firstName : 'Reetika',
 lastName : 'Chauhan',
 'favorite food' : 'Ramen',
 bestFriend :{
  firstName : 'Punit',
  lastName : 'Kainth',
  'favorite food' : 'pizza'
 }
}

// 2. console.log best friend's firstName and your favorite food
console.log(reetikaChauhan.bestFriend['firstName'] + " " + reetikaChauhan.bestFriend['lastName'], reetikaChauhan['favorite food'])

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTak = [['-','O','-'],['-','X','O'],['X','-','X']]
console.log(ticTak)



// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTak[0][2] = 'O'

// 5. Log the grid to the console.
console.log(ticTak[0])
console.log(ticTak[1])
console.log(ticTak[2])
// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let myEmail = 'foo@bar.baz'
const regexPattern = /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,3}$/;
if (regexPattern.test(myEmail)){
  console.log('It is correct email format')
}
else{
  console.log('It is not correct email format')
}
// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '02/01/2019';
let assignmentDateObject = new Date(assignmentDate)
console.log('Assignement date string converted to date object:',assignmentDateObject)
// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
let DueDate = new Date(assignmentDate)
DueDate.setDate(DueDate.getDate() + 7)
console.log('The Due Date is : ' ,DueDate)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let year = DueDate.getFullYear()
let monthinNumber = DueDate.getMonth()
let month = months[monthinNumber]
let date = DueDate.getDate()
let dateString = date.toString()
dateString = dateString.padStart(2,0)
monthinNumber = (monthinNumber + 1).toString()
monthinNumber = monthinNumber.padStart(2,0)
let htmltagformat = `<time datetime = "${year}-${monthinNumber}-${dateString}">${month} ${dateString}, ${year} </time> `
// 10. log this value using console.log
console.log(htmltagformat)