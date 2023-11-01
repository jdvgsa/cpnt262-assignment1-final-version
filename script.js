// Read more button Toggle

const toggleButton = document.getElementById("toggleButton");
const toggleParagraph = document.getElementById("toggleParagraph");

/* Button should display hidden text when clicked. Normal state is for the paragraph to be hidden,
   however if the reader chooses to decide to read more, extra text will be displayed. */

toggleButton.addEventListener("click", function() {
    if (toggleParagraph.classList.contains("hidden")) {
        toggleParagraph.classList.remove("hidden");
    } else {
        toggleParagraph.classList.add("hidden");
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