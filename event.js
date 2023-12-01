function addButton() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button");


    var parent = document.getElementById("homepageMeme");
    parent.appendChild(inputElement);

    var newMeme = document.createElement("m");

    var paragraphText = document.createTextNode("New Meme");

    newMeme.appendChild(paragraphText);

    parent.appendChild(newMeme);
} 

function addButtons() {
    console.log("Adding Start and Stop Buttons");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton();");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick", "stopButton();");
    inputElementStop.setAttribute("disabled", "true");
    

    let parent = document.getElementById("memeImage");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("Pressed Start!");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("homepageMeme");
    memeImage.style.animationDuration = "3s"; 
}

function stopButton() {
    console.log("Pressed Stop!"); 
    
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let memeImage = document.getElementById("homepageMeme");
    memeImage.style.animationDuration = "0s"; 
}