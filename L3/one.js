console.log("Hello 1");

setTimeout(function () {
  console.log("Hello 2");
}, 100);

console.log("Hello 3");


/*
Here, setTimeout takes a callback function as first parameter, and time in millisecond as second parameter.

After executing above statements, browser will print Hello 1” & Hello 3” first, then it will print Hello 2”.
This is where event loop comes in, which makes sure your asynchronous code runs after all the synchronous code
is done executing.

*/

const firstName = () => console.log("John");
const lastName = ()  => console.log("Doe");

const printName = () => {
    console.log("My name is : ");
    setTimeout(firstName, 1000);
    lastName();
}

printName();