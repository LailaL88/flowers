const pinkTulipSpan = document.getElementById("pinkTulipSpan");
const pinkTulipButton = document.getElementById("pinkTulipButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

pinkTulipButton.onclick = function() { decrementNumber(pinkTulipSpan); }