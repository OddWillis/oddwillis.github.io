//"Hello world!" Example

// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

//Changing the image on index.html
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Steak_burger_with_cheese_and_onion_rings.jpg") {
    myImage.setAttribute("src", "images/unnamed.jpg");
  } else {
    myImage.setAttribute("src", "images/Steak_burger_with_cheese_and_onion_rings.jpg");
  }
});

//Personalized welcome message (slightly altered)
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  //Conditional for no name, loops function
    if (!myName){
        setUserName();
    }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Burgers are cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Burgers are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});