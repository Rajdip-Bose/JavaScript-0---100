let obj = {
    in : "India",
    us : "United States",
    jp : "japan"
}

for (const key in obj) {
   console.log(key,obj[key]);
   
}

let array = [1,2,3,4,5,6,7,8,9,10]

array.forEach((fruit,index) => {
    console.log(` Fruit ${index} : ${fruit}`);
    
})