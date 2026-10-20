// helpers.js — provided for the workshop. You do not need to edit this file.
// Curious how it works? Read the comments below.

// Returns whatever the user typed in the "Top text" box (HTML id="top").
function topWords() {
    let box = document.getElementById("top");
    if (!box) return "";
    return box.value;
  }
  
  // Returns whatever the user typed in the "Bottom text" box (HTML id="bottom").
  function bottomWords() {
    let box = document.getElementById("bottom");
    if (!box) return "";
    return box.value;
  }
  
  // Returns the size slider value as a whole number (HTML id="size").
  // Number(...) turns the slider's text "9" into the integer 9.
  function fontSize() {
    let slider = document.getElementById("size");
    if (!slider) return 9;
    return Number(slider.value);
  }
  
  // Puts your two strings on the picture, at the given size.
  // size is a number (an integer from the slider, or one you type yourself).
  function writeOnImage(top, bottom, size) {
    let topLine = document.getElementById("meme-top");
    let bottomLine = document.getElementById("meme-bottom");
    if (topLine) topLine.textContent = top || "";
    if (bottomLine) bottomLine.textContent = bottom || "";
    applyMemeTextSize(size);
  }
  
  // Turns the chosen file into a temporary URL the browser can show in an <img>.
  function pictureOf(input) {
    let file = input.files[0];
    if (!file) return "";
    return URL.createObjectURL(file);
  }
  
  // Changes how big the meme text looks. size is a number, e.g. 9.
  function applyMemeTextSize(size) {
    let n = Number(size);
    if (!n) n = 9;
  
    let fontPx = n * 2.2;
    let topLine = document.getElementById("meme-top");
    let bottomLine = document.getElementById("meme-bottom");
    if (topLine) topLine.style.fontSize = fontPx + "px";
    if (bottomLine) bottomLine.style.fontSize = fontPx + "px";
  
    let label = document.getElementById("sizeLabel");
    if (label) label.textContent = "Text size · " + n;
  }
  
  // When the user picks a photo, show it in the preview and hide the placeholder.
  function showUploadedImage() {
    let photo = document.getElementById("photo");
    let preview = document.getElementById("preview");
    let empty = document.getElementById("empty");
    if (!photo || !preview) return;
  
    let url = pictureOf(photo);
    if (!url) return;
  
    preview.src = url;
    preview.hidden = false;
    if (empty) empty.hidden = true;
  }
  
  // Connects the upload button when the page loads.
  function memeoBoot() {
    let photo = document.getElementById("photo");
    if (photo) {
      photo.addEventListener("change", showUploadedImage);
    }
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", memeoBoot);
  } else {
    memeoBoot();
  }
  