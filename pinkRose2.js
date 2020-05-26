const pinkRose2span = document.getElementById("pinkRose2span");
const pinkRose2button = document.getElementById("pinkRose2button");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}


pinkRose2button.onclick = function() { decrementNumber(pinkRose2span); }