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