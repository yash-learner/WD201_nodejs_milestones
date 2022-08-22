const firstName = () => console.log("John");
const lastName = ()  => console.log("Doe");

const printName = () => {
    console.log("My name is : ");
    setTimeout(firstName, 100);
    lastName();
}

printName();