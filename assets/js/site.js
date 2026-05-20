// write cool JavaScript here

const myButton = document.getElementById('mybutton'); // selects a button element by its ID

const modal = document.getElementById("myModal"); // grabs the modal container so we can show/hide it

// Get the button that opens the modal
const btn = document.getElementById("myBtn"); // selects the open button to attach the click handler

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0]; // selects the first close icon from the class collection

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block"; // changes the modal from hidden to visible by setting it to block display
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; // hides the modal by removing it from the document flow
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // checks if the click landed on the dark overlay rather than the content box, then closes
  }}