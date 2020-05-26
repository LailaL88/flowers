const redPoppySpan = document.getElementById("redPoppySpan");
const redPoppyButton = document.getElementById("redPoppyButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

redPoppyButton.onclick = function() { decrementNumber(redPoppySpan); }