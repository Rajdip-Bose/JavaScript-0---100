let array = [1,2,3,4,5,6,7,8,9,10]

// let newN = array.map(num => num +10)
// let newN = array.map(num => num +10).map(num => num*10)
// let newN = array.map(num => num +10)
//                 .map(num => num*10)
//                 .filter( num => num > 150)
// console.log(newN);


// =================REDUCE===============>
let number = [1,2,3,4]

let total = number.reduce( function (acc,cv) {
    return acc+cv
},0)

console.log(total);
