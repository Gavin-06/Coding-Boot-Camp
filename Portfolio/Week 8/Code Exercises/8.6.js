let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");

let sentence = firstName + " " + lastName + " just typed their name at the prompt.";

document.getElementById("output").innerHTML = sentence;