const yellowGeraniumSpan = document.getElementById("yellowGeraniumSpan");
const yellowGeraniumButton = document.getElementById("yellowGeraniumButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

yellowGeraniumButton.onclick = function() { decrementNumber(yellowGeraniumSpan); }