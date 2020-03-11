

/*  Processing: see if it is friday and display banner for Saturday BBQ
 * Output: Display banner on Friday only
 */

let n = new Date();
    let dayOfWeek = n.getDay();
    if (dayOfWeek != 5 ) {
        document.getElementById("bbq").style.display = "none";
    }
    else {
        
        document.getElementById("bbq").style.display = "block";
}
    
