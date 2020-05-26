const pinkTulip2span = document.getElementById("pinkTulip2span");
const pinkTulip2button = document.getElementById("pinkTulip2button");

function decrementNumber(span) {
    let newNumber = Number(span.innerText);
    if (newNumber > 0) {
        newNumber--;
        span.innerText = newNumber;
    }
}



pinkTulip2button.onclick = function() { decrementNumber(pinkTulip2span); }