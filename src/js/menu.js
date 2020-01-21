let menuOpen = false
const BD = document.body

document.getElementById("hamburger").onclick = function() {    
    if (menuOpen == true) {
        BD.style.overflowY = "scroll"

        menuOpen = false
    }
    else {
        BD.style.overflowY = "hidden"

        menuOpen = tru
    }
};