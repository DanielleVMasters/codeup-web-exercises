

let odd = prompt("Please enter an odd number between 1 and 50.")
for (let i = 1; i < 50; i++) {


    if (odd % 2 === 0) {
       prompt("That wasn't an odd number between 1 and 50 please re-enter.")
        break;

    } else if (i % 2 !== 0) {

        console.log("here is an odd number: " + i)
        continue;

    }
     }
console.log("Yikes, skip number: " + odd)