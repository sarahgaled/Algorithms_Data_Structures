// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// NOTES:
// Step 1: Iterate through rows from 0 to n
// Step 2: Create an empty string, 'level'
// Step 3: Iterate from 0 to ??? (columns)
// Step 4: If the column should have a #
// Step 5: Add a '#' to 'level'
// Step 6: Else
// Step 7: Add a space to 'level'
// Step 8: Console.log 'stair'


// function pyramid(n) {
//     // n is the number of total rows that we're working with.
//     const midpoint = Math.floor((2 * n - 1) / 2)
// // creating a for loop that will iterate through each row of our output
//     for (let row = 0; row < n; row++){
//         // for each row that we create, we'll make an empty string
//         let level = ''
//         // iterating through all the different columns in our pyramid 
//         // to get our columns, we're going to take n, double it and then subtract by 1
//         for(let column = 0; column < 2 * n - 1; column++){
//             // we are calulating the midpoint bc if we could figure out the center index, then we can say that take the row number of elements on either side of that center point and make those into pounds
//             // if row increases to 1 then i want to take math.floor() and math.floor() + 1 and math.floor() - 1
//             // so inside of our for loop we're watching for row number of elements to the left of midpoint as well as the right of midpoint
//             // the if statement will make sure that current column we're looking at is within the bounds of midpoint - row and midpoint + row
//             if (midpoint - row <= column && midpoint + row >= column){
//                 // then add a pound
//                 level += '#'
//             } else {
//                 // otherwise we'll add in a space
//                 level += ' '
//             }
//         }

//         console.log(level)
//     }
// }


// SECOND SOlUTION: RECURSION
function pyramid(n, row = 0, level = ''){
    // setting up our base case
    if (row === n){
        return
    }
    // this if statement will detect if we r at the end of a level
    // the amount of columns we can have is determined by 2 * n - 1
    // so we want to check that r level has a length of 2 * n - 1, if we r at that length its time to console.log level and move on to the next row
    if (level.length === 2 * n - 1){
        // then console.log the current level
        console.log(level)
        // and move on to the next row
        // and we r using a return statement to make sure we dont any other work inside this function
        return pyramid(n, row + 1)
    }
    // here we need to calculate the midpoint and then decide if the current element that we r considering is within range of that midpoint
    const midpoint = Math.floor((2 * n - 1) / 2)
    // now we need an if statement to decide whether or not we're going to add on a pound or a space
    // instead of making a function call, I'm going to create a variable call add which is going to contain the character that we're supposed to add to our level string
    // in the recursive solution we determine which column we are currently operating on by looking at the length of our string. so if the length of the level string is less than or equal to or greater or equal to the the difference of midpoint and row, that would take care of making sure that we are on the right or left hand side   
    if (midpoint - row <= level.length && midpoint + row >= level.length){
        // then we will add in a pound
        add = '#'
    } else {
        add = ' '
    }
    // now we will start off our next call to pyramid. n doesnt change and row doesnt either bc we r in middle of a row. we r going to take the new charcter that we generated and add it to our string
    pyramid(n, row, level + add)
}


module.exports = pyramid;
