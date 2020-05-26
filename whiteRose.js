const whiteRoseSpan = document.getElementById("whiteRoseSpan");
const whiteRoseButton = document.getElementById("whiteRoseButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

whiteRoseButton.onclick = function() { decrementNumber(whiteRoseSpan); }