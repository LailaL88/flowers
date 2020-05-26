const blueLavander = document.getElementById("blueLavanderSpan");
const blueLavanderButton = document.getElementById("blueLavanderButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

blueLavanderButton.onclick = function() { decrementNumber(blueLavander); }