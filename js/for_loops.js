function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`)
}
}
showMultiplicationTable(7)

for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 200) + 20
    let oe = (x % 2 > 0) ? " is odd" : " is even";
    console.log(x + oe);
}

for(let i = 1; i < 10; i++ ) {
    let s = ( i + '' ).repeat(i);
    console.log(s);
}
//https://stackoverflow.com/questions/48589554/for-loop-repeating-numbers-in-each-line

for(let i = 100; i >= 5; i -= 5 ){
    console.log(i)
}

