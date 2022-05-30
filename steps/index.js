// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// NOTES:
// Step 1: Iterate from 0 to n = rows
// Step 2: Create an empty string. 'stair'
// Step 3: Iterate using a for loop for column from 0 to n
// Step 4: IF the current column is equal to or less than the current row 
// Step 5: Add a '#' to 'stair'
// Step 6: Else 
// Step 7: Add a space to 'stair'
// Step 8: Console log 'stair'

// function steps(n) {
//     for (let row = 0; row < n; row++){
//         // for every different row that we are going to operate on, we're going to create a completely empty string
//         let stair = ''

//         for (let column = 0; column < n; column++){
//             // if the current column we're looking at is equal to or less than the current row
//             if(column <= row){
//                 // then we want to add a pound symbol to the 'stair' string
//                 stair += '#'
//             } else {
//                 // if not, add a space
//                 stair += ' '
//             }
//         }
//         // after processing a full row and assembling a full stair string, need to make sure we console.log it in the row for loop bc we want to end up with n console.logs so that i get 1 console log for each row we are attempting to assemble herre
//         console.log(stair)
//     }
// }


// RECURSION SOLUTION
// Notes: 
// if (row === n) then we have hit the end of our problem
// if the 'stair' string has a length === n then we are at the end of a row
// if the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space

function steps(n, row = 0, stair = ''){
    // first we r defining our base case and making sure that is satisfied and if it is, we will return
    // defaulting row = 0 as an argument to day that is where i want to start, the very first row
    if (n === row) {
        return
    }
    // checking to see if the length of the stair is equal to n, if it is then that means we r at the end of the row and we should print out the stair string
    if (n === stair.length){
        console.log(stair)
        // we need to make sure we r calling steps in the future and making changes to stair and row.
        // after the if statement which is saying whenever we hit the end of a row, we're going to console.log stair, call steps again but this time we're going to increment the value of row 
        return steps(n, row + 1)
        // we r returning bc after meeting this case, there isnt anything else we want to do or perform so we r returning
    } 
    // handling the case of assembling our 'stair' string
    if (stair.length <= row){
        stair += '#'
    } else {
        stair += ' '
    }
    // the only type of recursion we r doing is if we hit the end of a row. but we still need to make surse that we recurse through a row as well
    // so after appending on some character to the stair string, we then need to call steps again, and thats going to start the entire process over again
    steps(n, row, stair)
}

module.exports = steps;
