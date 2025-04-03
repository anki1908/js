// for

for (let index = 0; index < 10; index++) {
    //const element = index;
    //console.log(element);
    
}

//console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
           // console.log(`Inner loop value ${j} and inner loop ${i}`);
            //console.log(i + '*' + j + '=' + i*j );              
    }
}

let myArray =  ["spiderman", "wonderwoman", "pokemon" ]
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

// break and continue


for (let p = 1; p < 20; p++) {
    if (p == 5) {
   //     console.log(`Detected 7`);
        //    break
    }
   // console.log(`Value of p is ${p}`);

}

for (let p = 1; p < 20; p++) {
    if (p == 5) {
        console.log(`Detected 7`);
        continue
    }
    console.log(`Value of p is ${p}`);

}

