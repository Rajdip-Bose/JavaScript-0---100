// let d = new Date()
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toJSON());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleString());
// console.log(d.toTimeString());
// console.log(typeof d);
let nd = new Date(2023 ,0 ,23)
// console.log(nd.toString());


// let nt=  Date.now()
// console.log(nt);
// console.log(nd.getTime());

let day = new Date()

console.log(day.toLocaleString('default',{
    weekday:"long"
}));
