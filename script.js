// ******************* PART 1

/* Do the following:
Loop through all numbers from 1 to 100.
If a number is divisible by both 3 and 5, log “Fizz Buzz.”     -- DONE
If a number is divisible by 3, log “Fizz.”                     -- DONE
If a number is divisible by 5, log “Buzz.”                     -- DONE
If a number is not divisible by either 3 or 5, log the number.
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' Fizz Buzz');  // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    }
    else if (i % 3 == 0 ) {
        console.log(i + ' Fizz');      // If a number is divisible by 3, log “Fizz.”
    }
    else if (i % 5 == 0 ) {
        console.log(i + ' Buzz');      // If a number is divisible by 5, log “Buzz.”
    }
    else if (i % 3 !== 0 && i % 5 !== 0) {
     console.log(i);         // If a number is not divisible by either 3 or 5, log the number.
    }
  }


// ******************* PART 3