let a = 39
const b = 32
// var c = 343

if (true){
    let a = 939
    // console.log("Inner a = ",a );
    
    const b= 9020
    // var c= 83038
}

// console.log("Outer a = ",a);
// console.log(b);  
// console.log(c);



function one(){
    let welcome = 23
    
    function two(){
        let hi = "hellow"
        console.log(welcome);
        
    }

    two()

}
one()
two()