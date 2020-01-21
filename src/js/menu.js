let menuOpen = false
const BD = document.body

document.getElementById("hamburger").onclick = function() {    
    if (menuOpen == true) {
        BD.style.overflowY = "scroll"

        menuOpen = false

        console.log(menuOpen)
    }
    else {
        BD.style.overflowY = "hidden"

        menuOpen = true
        console.log(menuOpen)
    }
};