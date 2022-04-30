// write a function that returns a string concatonated with another string passed as parameters
// concatonation is when you combine 2 strings into one string

function stringConcat(temp, city) {
  let newString = temp + " " + city;
  return newString;
}

console.log(stringConcat("60", "Ellensburg"));

function sum(a, b) {
  return a + b;
}

// in js you need a way to idetentify the button in question
// set up a listener to the button that will listen for a click
// create an event handling function to do something when the button is clicked
// alert("hooray")

function handleSpecialButtonClick(e) {
  alert("hooray");
}

let specialButton = document.querySelector("#special-button");
specialButton.addEventListener("click", handleSpecialButtonClick);
// any event creates an event object - a handler function takes that as an argument by default

// when submitting the form alert the value of the password input
// Listen to the form for a submit event
// when we hear submit alert value of password

function handleFormSubmit(event) {
  // for submit events specifically prevent the default behavior
  event.preventDefault();
  // object method
  // password-input
  const pw = event.target["password-input"].value;
  // do something that allows you to get the value back from the input
  alert(pw);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", handleFormSubmit);
