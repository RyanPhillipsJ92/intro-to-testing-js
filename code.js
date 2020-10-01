// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if(input === undefined){
        return "Hello, World!";
    }else if(typeof input === 'string'){
        return "Hello, " + input + "!";
    }else if(input === true || input !== true){
        return "Hello, World!";
    }
}
