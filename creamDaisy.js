const creamDaisySpan = document.getElementById("creamDaisySpan");
const creamDaisyButton = document.getElementById("creamDaisyButton");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}


creamDaisyButton.onclick = function() { decrementNumber(creamDaisySpan); }