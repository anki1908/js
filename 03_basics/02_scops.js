 
// this {} is called scope
// things written inside {} are called block scope
// things written outside {} are called global scope
//var c = 500
let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("Inner: ", a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);


function one() {
    const username = "Ankita"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
    
}

//one()

if (true) {
    const username = "cheenu"
    if (username === "cheenu") {
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(websit );
    
}
//console.log(username);


//++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num +1
}


addTwo(5)
const addTwo = function (num) {
    return num + 2
}
