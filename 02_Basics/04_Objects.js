
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

// console.log(user.fullName.UserFullname.firstName);


let obj1 = {1 : "a" , 2 : "b"}
let obj2 = {3 : "c" , 4 : "d"}

// let obj3 = {obj1 , obj2}
let obj4 = {...obj1 , ...obj2}
let obj3 = Object.assign({},obj1 , obj2)
// console.log(obj3);
// console.log(obj4);


// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty("mailid"));

let course = {
    c_name:"Js",
    fees:404,

}

let {c_name} = course
console.log(c_name);


