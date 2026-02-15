let startDate = new Date(2026, 1, 26); 
let endDate = new Date("2026-02-28");

let diff = endDate - startDate;

let days = diff / (1000 * 60 * 60 * 24);

if (days < 0) {
    console.log("End date is before start date");
} else {
    console.log(`Days difference: ${days}`);
}
