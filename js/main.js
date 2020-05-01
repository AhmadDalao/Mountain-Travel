// navbar responsive function
function myFunction() {
    var x = document.getElementById("navbar-not-responsive");
    if (x.className === "navbar-list") {
        x.className += " responsive";
        document.getElementById("my-iconX").style.display = "block";
        document.getElementById("my-icon").style.display = "none";

    } else {
        x.className = "navbar-list";
        document.getElementById("my-iconX").style.display = "none";
        document.getElementById("my-icon").style.display = "block";
    }
}