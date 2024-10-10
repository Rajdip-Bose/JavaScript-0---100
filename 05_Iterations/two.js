let array = [1,2,3,4,5,6,7,8,9,10]

for (const element of array) {
    console.log(element);
    
}

let string = "RAJDIP BOSE"

for (const s of string) {
    console.log(s);
    
}


let map = new Map()
map.set("In","India")
map.set("Eg","England")
map.set("Jp","Japan")

console.log(map);


for (const [key,value] of map) {
    console.log(key,value);
    
}