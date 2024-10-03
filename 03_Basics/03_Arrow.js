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
    console.log(this.username);
    
}

chai()