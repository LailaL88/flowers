const yellowLupinSpan = document.getElementById("yellowLupinSpan");
const yellowLupinButton = document.getElementById("yellowLupinButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

yellowLupinButton.onclick = function() { decrementNumber(yellowLupinSpan); }