let array = [1,2,3,4,5,6,7,8,9,10]

// let newN = array.map(num => num +10)
// let newN = array.map(num => num +10).map(num => num*10)
let newN = array.map(num => num +10)
                .map(num => num*10)
                .filter( num => num > 150)
console.log(newN);
