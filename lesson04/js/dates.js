document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();

const options = {
    weekday: "long",
    day: "short",
    month: "medium",
    year: "numeric"
}

let update = document.lastModified;
document.getElementById("lastModified").innerHTML = update;