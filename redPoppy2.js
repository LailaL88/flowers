const redPoppy2span = document.getElementById("redPoppy2span");
const redPoppy2button = document.getElementById("redPoppy2button");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}

redPoppy2button.onclick = function() { decrementNumber(redPoppy2span); }