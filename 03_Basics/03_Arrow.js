let website = {
    username:"Rajdip",
    price : 999,


    websiteUser : function greetings(){
        console.log(`hello ${this.username} , Welcome to out website.`)
    }
}

website.websiteUser()
website.username="Sam"
website.websiteUser()
 