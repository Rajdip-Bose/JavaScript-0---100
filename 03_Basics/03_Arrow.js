let website = {
    username:"Rajdip",
    price : 999,


    websiteUser : function greetings(){
        console.log(`hello ${this.username} , Welcome to out website.`)
        // console.log(this);
        
    }
}

// website.websiteUser()
// website.username="Sam"
// website.websiteUser()


// console.log(this);

 
// let chai = function() {
//     let username = "Jan"
//     console.log(this.username);
    
// }

// chai()
 
let chai = () => {
    let username = "Jan"
    console.log(this);
    
}

// chai()

let addtwo = (num1,num2) => {
    console.log(num1+num2);
    
}
let addthree = (num1,num2,num3) => num1+num2+num3
    


addtwo(9,10)
console.log(addthree(9,10,10))
console.log(typeof addthree)


// tyring out lol i mean cheating

let mul5 = (num1,num2) => console.log(num1*num2)
mul5(9,10)
let mul3 = (num1,num2) => console.log(num1*num2)
mul3(9,10)
let mul4 = (num1,num2) => console.log(num1*num2)
mul4(9,10)
let mul = (num1,num2) => console.log(num1*num2)
mul(9,10)