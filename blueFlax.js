const blueFlaxSpan = document.getElementById("blueFlaxSpan");
const blueFlaxButton = document.getElementById("blueFlaxButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

blueFlaxButton.onclick = function() { decrementNumber(blueFlaxSpan); }