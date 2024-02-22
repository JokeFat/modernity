// JavaScript code for the Modern Alert Pop-up

// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button
var closeButton = document.querySelector(".close");

// Get the Dark Mode toggle button
var darkModeToggle = document.querySelector(".modal-buttons button:last-child");

// When the page loads, show the modal with fade-in animation
window.onload = function() {
  modal.style.display = "flex";
  setTimeout(function() {
    document.getElementById("modalContent").classList.add("show");
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }, 50); // Delay added for smoother animation
}

// Function to close the modal with fade-out animation
function closeModal() {
  document.getElementById("modalContent").classList.remove("show");
  modal.style.backgroundColor = "rgba(0, 0, 0, 0)";
  setTimeout(function() {
    modal.style.display = "none";
  }, 300); // Same duration as the CSS transition
}

// Function to set modal content
function setModalContent(title, text) {
  var modalTitle = document.getElementById("modalTitle");
  var modalText = document.getElementById("modalText");

  modalTitle.textContent = title;
  modalText.textContent = text;
}

// Example usage: set modal content with custom text
var customTitle = "Welcome!";
var customText = "Thanks for visiting our website. Feel free to explore.";

setModalContent(customTitle, customText);

// Function for Yes button
function onYes() {
  alert("You clicked Yes!");
}

// Function for No button
function onNo() {
  closeModal();
}

// Dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}
