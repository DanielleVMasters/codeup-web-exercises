

let i = 2;

while (i <= 65536) {
    console.log(i);
    i += i;
}



let allCones = Math.floor(Math.random() * 50) + 50; //start point

do {
    let x = Math.floor(Math.random() * 5) + 1;

    allCones -= x

    if((allCones - x) < 0){
        console.log("Cannot sell you " + x + " cones I only have " + allCones + " ...");
    }else{
        console.log("Cones available " + allCones)
        allCones -= x;
        console.log(x + " cones sold...");
    }


} while (allCones > 0);

console.log("All cones sold! Yay we're done!")