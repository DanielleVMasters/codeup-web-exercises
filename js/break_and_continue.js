
let odd = prompt("Please enter an odd number between 1 and 50.")
do{





    if(odd % 2 !== 0){
        alert("your input was even please try again.")
    } else if(odd < 1 || odd > 50){
        alert("your number isn't between 1 and 50. Try again")
    } else {
        alert("thank you for your input.")
    }
    break;

}while(true)

console.log("The number to skip is" + odd)
for(let i = 1; i <= 50; i+= 2){
    if(odd == i){
        console.log("Yikes skipping number: " + odd)
        continue;
    }
console.log("Here is an odd number" + i)
}