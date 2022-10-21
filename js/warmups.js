//10/20/22
// function GetPrice(object){
//     return object.price;
// }
//
// let potatoes = {
//     name: "Potatoes",
//     quantity: 2,
//     price: "$7.89"
// }

//10/21/22
function getLString(array){
    let Lstring = ""
    array.forEach(function(string){
        if(string.length > Lstring.length) {
            Lstring = string
        }
    })
    return Lstring
}

console.log(getLString(["blue", "green", "Periwinkle"]))
