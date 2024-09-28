let mysym = Symbol("Key1")

let obj = {
    naam:"rajdip",
    age:21,
    sirname:"bose",
    [mysym]:"lelele"
}

console.log(obj.naam);
console.log(obj["naam"]);
console.log(obj);

// obj.naam="ksksks"
// console.log(obj);
// Object.freeze(obj)
console.log(typeof obj[mysym]);

obj.greeting = function(){
    console.log(`Hellow , Good Morning, ${this.naam}`);
    
}

console.log(obj.greeting());

