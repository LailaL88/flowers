const whiteRose2span = document.getElementById("whiteRose2span");
const whiteRose2button = document.getElementById("whiteRose2button");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

whiteRose2button.onclick = function() { decrementNumber(whiteRose2span); }