welcomeMessage();

//welcome message function
function welcomeMessage() {
    //show popup
    let name = prompt("Welcome to Irfan's Portfolio, What is your name?");
    console.log("User name:", name);

    //validate input
    if (name == null || name.trim() === "") {
        //if user cancels or enters empty name, use "Guest" as default
        name = "Guest";
    }
    console.log(`Hello, ${name}! welcome to my portfolio website.`);
    document.getElementById("welcome-speech").innerHTML = `Hello, ${name}! Welcome to my portfolio website.`;
}

function validateForm() { }