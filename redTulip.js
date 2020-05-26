const redTulipSpan = document.getElementById("redTulipSpan");
const redTulipButton = document.getElementById("redTulipButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

redTulipButton.onclick = function() { decrementNumber(redTulipSpan); }