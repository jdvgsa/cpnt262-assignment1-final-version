"use strict";

// Read more Toggle

const toggleButton = document.getElementById("toggleButton");
const toggleParagraph = document.getElementById("toggleParagraph");

/* Extra text normal state is hidden, but when toggled by the button it will display
   the extra hidden text. Button Text will also change from "Read More" to "Read Less" and vice versa. */

toggleButton.addEventListener("click", function() {
    if (toggleParagraph.classList.contains("hidden")) {
        toggleParagraph.classList.remove("hidden");
        toggleButton.innerHTML = "Read Less";
    } else {
        toggleParagraph.classList.add("hidden");
        toggleButton.innerHTML = "Read More";
    }
});

// Dark Mode Toggle

const darkMode = document.getElementById("darkModeToggle")
const htmlBody = document.body

/* Button should initially say Toggle Dark Mode, when clicked Text on the button should change to
   "Toggle Light Mode" as well as change the background and text color accordingly. */

darkMode.addEventListener("click", function() {
    if (htmlBody.classList.contains("darkBackground")){
      htmlBody.classList.remove("darkBackground");
      darkMode.innerHTML = "Toggle Dark Mode";
  }
  else {
    htmlBody.classList.add("darkBackground");
    darkMode.innerHTML = "Toggle Light Mode";
  }

});