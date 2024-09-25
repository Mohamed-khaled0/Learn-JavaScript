let currentDate = new Date();

let lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

console.log(lastDayOfPrevMonth.toString());

let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let prevMonthName = monthNames[lastDayOfPrevMonth.getMonth()];

console.log(`Previous Month Is ${prevMonthName} And Last Day Is ${lastDayOfPrevMonth.getDate()}`);



// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"