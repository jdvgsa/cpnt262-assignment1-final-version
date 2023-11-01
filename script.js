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

/*  Image Gallery generated with JS 
    Rendering Images from an array of objects,
    using Javascript to generate image layout*/

const imagesArray = [
  { src: "images/re1.jpg", },
  { src: "images/re2.jpg", },
  { src: "images/re3.jpg", },
  { src: "images/re4.jpg", },
  { src: "images/re5.jpg", },
  { src: "images/re6.jpg", },
  { src: "images/re7.jpg", },
  { src: "images/re8.jpg", },
  { src: "images/re9.jpg", },
  { src: "images/re10.jpg", }
  
];

const gallery = document.getElementById("gallery");

function createImageElement(imageObj) {
  const { src, alt } = imageObj;
  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.alt = alt;
  imageElement.classList.add('gallery-image');
  return imageElement;
}

function displayImages(imageArray) {
  imageArray.forEach(imageObj => {
    const imageElement = createImageElement(imageObj);
    gallery.appendChild(imageElement);
  });
}

// Initial display

displayImages(imagesArray);

// Input Field

/* This should show an alert to the user indicating how much they are donating once they hit submit */

function showInput() {
  const userInput = document.getElementById("userInput").value;
  alert("You entered: " + userInput);
}

document.getElementById("submitButton").addEventListener("click", showInput);

