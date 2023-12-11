class polygon{
    constructor (sides) {
       this.sides = sides; 
    }

    alertSides() {
        alert("This polygon has " + this.sides);
    }

    alertFormula() {
        alert("The area of this object is...");
    }
}

class square extends polygon{
    constructor(length) {
        super(4);
        this.length = length;
    }

    area(){
        alert(this.length * this.length);
    }

    alertFormula() {
        super.alertFormula();
        alert("... length squared.");
    }
}

function valInput(event) {
    event.preventDefault();
    let firstName = document.getElementById("fName").value;
    console.log(firstName);
    let lastName = document.getElementById("lName").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
//
    let firstLast = firstName + " " + lastName;
    console.log(firstLast);
// check if firstlast has fewer than 20 characters. exit if that's the case. 
    if(firstLast.length < 20) {
        alert("Not enough characters. Your first and last name must have at least 20 characters.")
        return false;
    }
    console.log("First Last valid!");
// check if zip has 5 characters and is a number

    const zipRegExp = /\b\d{5}\b/;


    if(!zipRegExp.test(zip)) {
        alert("Invalid zip! Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false; 
    }
    console.log("valid zip!");
    
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", valInput);
    }

    var poly = new polygon(8);
    poly.alertFormula();
    poly.alertSides();

    var test = new square(3);
    test.alertFormula(); // polymophism via method overriding
    test.area();
});
