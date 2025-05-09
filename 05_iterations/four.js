const myObject = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'ruby',    
}

//for (const key in myObject){
//    console.log(`${key} shortcut is for ${myObject[key]}`);
        
//}

const programming = ["js", "rb", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);

}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('Pa', "Paris")

for (const key in map) {
//    console.log(map[key]);
    
}

// we can not do iteration on map

