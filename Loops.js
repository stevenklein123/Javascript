let start = 0;
let end = 20;

for(let i=1; i < end; i++){
    let numbers = i;

    if(numbers % 3==0){
        console.log("Fizz");
        continue;
    }

    if(numbers % 5==0){
        console.log("Buzz");
        continue;
    }

    console.log(numbers)
}