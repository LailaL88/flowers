const flower1 = document.getElementById("flower1");
const flower2 = document.getElementById("flower2");
const flower3 = document.getElementById("flower3");
const flower4 = document.getElementById("flower4");
const flower5 = document.getElementById("flower5");
const flower6 = document.getElementById("flower6");
const flower7 = document.getElementById("flower7");
const flower8 = document.getElementById("flower8");
const flower9 = document.getElementById("flower9");
const flower10 = document.getElementById("flower10");
const flower11 = document.getElementById("flower11");
const flower12 = document.getElementById("flower12");
const flower13 = document.getElementById("flower13");
const flower14 = document.getElementById("flower14");
const flower15 = document.getElementById("flower15");
const selectColor = document.getElementById("color");
const selectType = document.getElementById("type");

class Flower {
    constructor(color, type, id) {
        this.color = color;
        this.type = type;
        this.id = id;
    }
}

const firstFlower = new Flower("pink", "tulip", flower1);
const secondFlower = new Flower("white", "rose", flower2);
const thirdFlower = new Flower("cream", "daisy", flower3);
const fourthFlower = new Flower("red", "tulip", flower4);
const fifthFlower = new Flower("blue", "flax", flower5);
const sixthFlower = new Flower("yellow", "lupin", flower6);
const seventhFlower = new Flower("red", "poppy", flower7);
const eighthFlower = new Flower("yellow", "geranium", flower8);
const ninethFlower = new Flower("white", "daisy", flower9);
const tenthFlower = new Flower("red", "poppy", flower10);
const eleventhFlower = new Flower("pink", "rose", flower11);
const twelvethFlower = new Flower("pink", "tulip", flower12);
const thirteenthFlower = new Flower("blue", "lavander", flower13);
const fourteenthFlower = new Flower("white", "rose", flower14);
const fifteenthFlower = new Flower("pink", "rose", flower15);

let arr = [firstFlower, secondFlower, thirdFlower, fourthFlower,
    fifthFlower, sixthFlower, seventhFlower, eighthFlower,
    ninethFlower, tenthFlower, eleventhFlower, twelvethFlower, thirteenthFlower, fourteenthFlower, fifteenthFlower
];

function filterColor(color) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].color == color) {
            arr[i].id.style.display = "inline";
        }
        if (arr[i].color !== color) {
            arr[i].id.style.display = "none";
        }
    }
}

function filterType(type) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type == type) {
            arr[i].id.style.display = "inline";
        }
        if (arr[i].type !== type) {
            arr[i].id.style.display = "none";
        }
    }
}

selectColor.addEventListener("click", function selectColor(e) {
    if (e.target.value == "Red") {
        filterColor("red");
        e.target.selectedIndex = 7;
    }
    if (e.target.value == "Blue") {
        filterColor("blue");
        e.target.selectedIndex = 8;
    }
    if (e.target.value == "White") {
        filterColor("white");
        e.target.selectedIndex = 12;
    }
    if (e.target.value == "Yellow") {
        filterColor("yellow");
        e.target.selectedIndex = 9;
    }
    if (e.target.value == "Cream") {
        filterColor("cream");
        e.target.selectedIndex = 11;
    }
    if (e.target.value == "Pink") {
        filterColor("pink");
        e.target.selectedIndex = 10;
    }
    if (e.target.value == "All") {
        for (let i = 0; i < arr.length; i++) {
            arr[i].id.style.display = "inline";

        }
        e.target.selectedIndex = 13;
    }

})

selectType.addEventListener("click", function selectType(e) {
    if (e.target.value == "Rose") {
        filterType("rose");
        e.target.selectedIndex = 10;
    }
    if (e.target.value == "Tulip") {
        filterType("tulip");
        e.target.selectedIndex = 11;
    }
    if (e.target.value == "Lavander") {
        filterType("lavander");
        e.target.selectedIndex = 17;
    }
    if (e.target.value == "Daisy") {
        filterType("daisy");
        e.target.selectedIndex = 15;
    }
    if (e.target.value == "Poppy") {
        filterType("poppy");
        e.target.selectedIndex = 14;
    }
    if (e.target.value == "Lupin") {
        filterType("lupin");
        e.target.selectedIndex = 13;
    }
    if (e.target.value == "Geranium") {
        filterType("geranium");
        e.target.selectedIndex = 16;
    }
    if (e.target.value == "Flax") {
        filterType("flax");
        e.target.selectedIndex = 12;
    }
    if (e.target.value == "All") {
        for (let i = 0; i < arr.length; i++) {
            arr[i].id.style.display = "inline";
        }
        e.target.selectedIndex = 9;
    }
})