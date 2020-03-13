var currentDate = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (i = 1; i < 6; i++) {
    if ([currentDate.getDay() + (i-1)] <= 6) {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i-1)];
    } else {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i-1) - 7];
    }
}