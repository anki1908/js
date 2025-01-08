// Immediately Invoked Function Exppressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Ankita")

