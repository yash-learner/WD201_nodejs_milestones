function generateGreetings(name) {
    function spanish() {
        console.log(`Hola! ${name}`);
    }
    function english() {
        console.log(`Hello! ${name}`);
    }
    return {spanish, english};
}

const name = "John";
const greetings = generateGreetings(name);

console.log(typeof(greetings));
console.log(typeof(greetings.spanish));


greetings.spanish();
greetings.english();
