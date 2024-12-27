// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2025, 0, 16, 5 , 3)
//console.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleString());

let myCreatedDate = new Date("2025-01-01")
//console.log(myCreatedDate.toLocaleString());

let myTimpeStamps = Date.now()
//console.log(myTimpeStamps);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());
//console.log(newDate.getMonth());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
        weekday: "long"
})


