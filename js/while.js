

let i = 2;

while (i <= 65536) {
    console.log(i);
    i += i;
}

let allCones = Math.floor(Math.random() * 50) + 50; //start point
let x = Math.floor(Math.random() * 5) + 1;
let cl = allCones - x
do {
    console.log(x + " cones sold.");
    console.log("Cannot sell you " + x + " I only have " + cl);
    console.log("Yay! I sold them all");//output
    cl--;//up by
} while (allCones < x);//how many