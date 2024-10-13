let array = [1,2,3,4,5,6,7,8,9,10]

// let newN = array.map(num => num +10)
// let newN = array.map(num => num +10).map(num => num*10)
// let newN = array.map(num => num +10)
//                 .map(num => num*10)
//                 .filter( num => num > 150)
// console.log(newN);


// =================REDUCE===============>
let number = [1,2,3,4]


// =======NORMAL FUNCTION=======>
// let total = number.reduce( function (acc,cv) {
//     console.log(`acc : ${acc} & cv : ${cv}`);
    
//     return acc+cv
// },0)
// console.log(total);


// ===============ARROW FUCTION====>
let totall = number.reduce( (acc,cv) => acc+cv , 0 ) 
console.log(totall);

let courses = [
    {
        name : "java course",
        price : 999
    },
    {
        name : "java course",
        price : 999
    },
    {
        name : "javaScript course",
        price : 999
    },
    {
        name : "Python course",
        price : 999
    }
]
