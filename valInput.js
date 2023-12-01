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

    console.log(firstLast.length);
// check if firstlast has fewer than 20 characters. exit if that's the case. 
    if(firstLast.length < 20) {
        alert("Not enough characters. Your first and last name must have at least 20 characters.")
        return false;
    }
    console.log("First Last valid!");
// check if zip has 5 characters and is a number
    if(zip.length !== 5 || isNaN(parseInt(zip))) {
        alert("Invalid zip! Zip must be a number of 5 digits");
        return; 
    }
    console.log("valid zip!");
    
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if(form) {
        form.addEventListener("submit", valInput);
    }
});
