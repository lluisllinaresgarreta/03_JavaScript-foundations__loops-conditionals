/*
    1. At the start of the program, print out: "--- Animal Checker Program ---"
    2. Create a variable called animal that starts with the value "cat"
    3. Create an if statement that checks if the animal is equal to "cat"
    4. If it is equal to "cat", print out "Meow!" to the screen
    5. If it is equal to "dog", print out "Woof!" to the screen
    6. If it is neither "cat" nor "dog", print out "Must be an alien"
    7. At the end of the program, print out: "--- Animal check complete ---"
    8. Change the animal to different values to make sure it works in all cases
*/
console.log("--- Animal Checker Program ---");

let animal = "cat";

if (animal === "cat") {
    console.log("Meow!");
} else if (animal === "dog") {
    console.log("Woof!");
} else {
    console.log("Must be an alien");
}

console.log("--- Animal check complete ---");

console.log("--- Animal Checker Program ---");

animal = "dog";
if (animal === "cat") {
    console.log("Meow!");
} else if (animal === "dog") {
    console.log("Woof!");
} else {
    console.log("Must be an alien");
}

console.log("--- Animal check complete ---");

console.log("--- Animal Checker Program ---");

animal = "gremlin";
if (animal === "cat") {
    console.log("Meow!");
} else if (animal === "dog") {
    console.log("Woof!");
} else {
    console.log("Must be an alien");
}
console.log("--- Animal check complete ---");
