const marvelHeroes=["Spiderman","Ironman","Thor"]
const dcHeroes=["Superman","Batman","Aquaman"]

// marvelHeroes.push(dcHeroes)

// consolecch.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);


// let allHeroes=marvelHeroes.concat(dcHeroes)

// console.log(allHeroes)


const newHeroes = [...marvelHeroes,...dcHeroes]

console.log(newHeroes);

let op=[2,23,3,[2,33,23,2],4,54,4]

let po = op.flat()

console.log(po);


let na = Array.from("Rajdip Bose")
console.log(na);

let s1 = 8492
let s2 = 34
let s3 = 43

let nq = Array.of(s1,s2,s3)

console.log(nq);
