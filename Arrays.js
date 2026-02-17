// const users = [
//   { id: 101, name: "Steven", status: "active" },
//   { id: 102, name: "Ana", status: "inactive" },
//   { id: 103, name: "Ben", status: "active" },
//   { id: 104, name: "Carl", status: "inactive" }
// ];



// function FindingFirstUser(){
//     const firstUser = users.find(user => user.status === "inactive");
//     console.log(firstUser);
// }

// function findFirstIndexUser(){
//     const user = users.findIndex(index => index.id === 103);
//     console.log(user);
// }

// function activeUser(){
//     const activeUser = users.filter(active => active.status === "active");
//     console.log(activeUser);
// }

// function updateUser(){
//     const userUpdate = users.find(user => user.status === "inactive");

//     if(userUpdate === "inactive"){
//         console.log(userUpdate.status = "active");
//     }else{
//         console.log("Error");
//         }
// }

// FindingFirstUser();
// console.log(" ");
// findFirstIndexUser();
// console.log(" ");
// activeUser();
// console.log(" ");
// updateUser();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const fruitSorted = fruits.toSorted();

// console.log(fruitSorted);


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();

// console.log(sorted);


// const numbers = [1,2,3];

// numbers.forEach(number =>{
//     console.log(number);
// })

// const doubled = numbers.map(number => number);
// console.log(doubled);

// const result = numbers.flatMap(number => [number ,number % 2==0]);
// console.log(result);

// const ages = [29,20,39,1,4,26];

// const adults = ages.filter(age => age >= 18);

// console.log(adults);

// const numbers = [1, 2, 3, 4];

// const total = numbers.reduce((sum, num) => sum + num, 0);

// console.log(total);


const numbers = [5, 10, 15, 20, 25];
const students = [
  { name: "Ana", grade: 85 },
  { name: "Ben", grade: 72 },
  { name: "Carl", grade: 90 },
  { name: "Dana", grade: 65 }
];

function printAll(){
    numbers.forEach(number => {
    console.log(number);
});
}

function doubleValue(){
    const double = numbers.map(number => number * 2);
    console.log(double);
}

function arrayNames(){
    const arrName = students.map(student => student.name);
    console.log(arrName);
}

function passedStudent(){
    const pass = students.filter(student => student.grade >= 75);
    console.log(pass);
}

function average(){
        const average = students.reduce((grades , student) => grades + student.grade,0);
        const ave = average / students.length;
        console.log(ave);
    }

function greaterthanNumber15(){
    const resultNumber = numbers.filter(number => number > 15);
    console.log(resultNumber);
}

function summationNumbers(){
    const summation = numbers.reduce((sum , number ) => number + sum , 0);
    console.log(summation);
}

function multipleFIve(){
    const result = numbers.every(number => (number * 5));
    console.log(result);
}

function morethanNumber20(){
    const morethan = numbers.some(number => number >= 20);
    console.log(morethan);
}


function resultAll(){
    printAll();
    doubleValue();
    greaterthanNumber15();
    summationNumbers();
    multipleFIve();
    morethanNumber20()
}

// resultAll();
average();
passedStudent();
arrayNames();
