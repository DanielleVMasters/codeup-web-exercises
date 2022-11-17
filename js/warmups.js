// //10/20/22
// // function GetPrice(object){
// //     return object.price;
// // }
// //
// // let potatoes = {
// //     name: "Potatoes",
// //     quantity: 2,
// //     price: "$7.89"
// // }
//
// //10/21/22
// function getLString(array){
//     let Lstring = ""
//     array.forEach(function(string){
//         if(string.length > Lstring.length) {
//             Lstring = string
//         }
//     })
//     return Lstring
// }
//
// console.log(getLString(["blue", "green", "Periwinkle"]))
//
// //10/26/22
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];

// // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
// function getTallestHamster(array){
//     let tallest = {heightInMM: 0};
//     array.forEach(function(ham){
//         if (ham.heightInMM > tallest.heightInMM) {
//             tallest = ham;
//         }
//     })
//     return tallest;
//
// }
// console.log(getTallestHamster(hamsters))
//
// function getAverageHeight(array){
//     let height = 0;
//     array.forEach(function(ham){
//         if (height += ham.heightInMM) {
//         }
//     })
//     return height / array.length;
// }
// console.log(getAverageHeight(hamsters))



for(var i = 0; i <= 10; i++) {
    console.log(i);
}

