const mArray = document.querySelectorAll("main section:first-of-type svg g g g");

function svgPattern() {
    let x = Math.floor((Math.random() * mArray.length));
    let selectedElement = mArray[x];
    let opacity = selectedElement.getAttribute("opacity");
    if (opacity === "0") {
        selectedElement.setAttribute("opacity", "1");
    } else {
        selectedElement.setAttribute("opacity", "0");
    }
    
}
setInterval(svgPattern, 5);

const heroSection = document.querySelector("#hero");
const head = document.querySelector("header");
const headButton = document.querySelector("ul button");

function navbarChange() {
    head.style.backgroundColor = "white";
    headButton.style.backgroundColor = "#1a8917";
}
function resetNavbar() {
    head.style.backgroundColor = "#ffc017";
    headButton.style.backgroundColor = "#191919";
}
window.addEventListener("scroll", function() {
    const targetPosition = heroSection.getBoundingClientRect().bottom;
    if (targetPosition < 0) {
        navbarChange();
    } else {
        resetNavbar();
    }
}) 