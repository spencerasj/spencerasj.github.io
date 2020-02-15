

/*  Processing: see if it is friday and display banner for Saturday BBQ
 * Output: Display banner on Friday only
 */

function display() {
    let n = new Date();
    let dayOfWeek = n.getDay();
    if (dayOfWeek == 4) {
        document.getElementById("bbq").style.display = "block";
}
     else {
        document.getElementById("bbq").style.display = "none"; 
     }
}
