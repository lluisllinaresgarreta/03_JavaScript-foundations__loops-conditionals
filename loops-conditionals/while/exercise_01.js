/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

console.log("even:")
let num = 10;
while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

console.log("odd:")
num = 10;
while (num <= 40) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}
