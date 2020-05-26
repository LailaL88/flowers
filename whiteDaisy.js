const whiteDaisySpan = document.getElementById("whiteDaisySpan");
const whiteDaisyButton = document.getElementById("whiteDaisyButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

whiteDaisyButton.onclick = function() { decrementNumber(whiteDaisySpan); }