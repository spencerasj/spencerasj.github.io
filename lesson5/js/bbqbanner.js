

/*  Processing: see if it is friday and display banner for Saturday BBQ
 * Output: Display banner on Friday only
 */

function bbqDay() {
    let dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5) {
        message = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
       document.getElementById("bbq") = message;
}
