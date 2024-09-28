
// let tinder = new Object()  Singleton

let tinder = {}

tinder.name = "Hero"
tinder.id = 930
tinder.age = 23
tinder.mailid = "hero@tata.com"

// console.log(tinder);


let user = {
    fullName:{
        UserFullname:{
            firstName:"Rajdip",
            lastName:"Bose"
        }
    }
}

console.log(user.fullName.UserFullname.firstName);


let obj1 = {1 : "a" , 2 : "b"}
let obj2 = {3 : "c" , 4 : "d"}

// let obj3 = {obj1 , obj2}
let obj3 = Object.assign({},obj1 , obj2)
console.log(obj3);
