function getNumberOfDays(start, end) {
    const date1 = start;
    const date2 = end;
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2 - date1;
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
} 



let newVisit = Date.now() ;
let lastVisit = localStorage.getItem("lastVisit") ;
document.getElementById("result").innerHTML = "You visited this page " + getNumberOfDays(lastVisit, newVisit) + " days ago!";

localStorage.setItem("lastVisit", newVisit) ;