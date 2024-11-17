/* 
    Spot the bug 🐞
    Should print: "Most places consider you an adult."... but it doesn't, why?
    
    Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

function checkAge(){
if (age < 3) {
    console.log("You're just a baby!");
    return;
}
if (age >= 3) {
    console.log("You are in elementary school, kid.");
    return;
}
if (age >= 13) {
    console.log("Nice, you're a teenager!");
    return;
}
if (age >= 18) {
    console.log("Most places consider you an adult.");
    return;
}

console.log("What? How did this happen!?");
return  
}

checkAge()

/*
The condition if (age >= 3) will always be true for ages 3 and above,
causing the function to return before reaching the conditions for ages 13 and 18.
This prevents the correct message from being printed for ages 13 and 18. To fix this,
the conditions should be ordered from highest to lowest age.

How to fix it:
function checkAge(){
if (age >= 18) {
    console.log("Most places consider you an adult.");
    return;
}
if (age >= 13) {
    console.log("Nice, you're a teenager!");
    return;
}
if (age >= 3) {
    console.log("You are in elementary school, kid.");
    return;
if (age < 3) {
    console.log("You're just a baby!");
    return;
}
console.log("What? How did this happen!?");
return
}
checkAge()
*/
