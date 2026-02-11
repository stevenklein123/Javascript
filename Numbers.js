let num = 987.6543;

console.log(num.toFixed(2));
console.log(num.toPrecision(6));
console.log(num.toString());
console.log(num.valueOf());


let userNumber = 1e309; 

if (userNumber > Number.MAX_VALUE) {
    console.log(`${userNumber} is Too big!`);
} else if (userNumber < Number.MIN_VALUE && userNumber > 0) {
    console.log(`${userNumber} is Too small!`);
} else if (userNumber === 0) {
    console.log(`${userNumber} is Zero`);
} else {
    console.log(`${userNumber} is a Normal number`);
}
