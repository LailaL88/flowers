const pinkRoseSpan = document.getElementById("pinkRoseSpan");
const pinkRoseButton = document.getElementById("pinkRoseButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

pinkRoseButton.onclick = function() { decrementNumber(pinkRoseSpan); }