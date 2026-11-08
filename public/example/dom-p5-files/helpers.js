// DOM workshop starter ,  pictureOf and applyMemeTextSize. You will write the rest in sketch.js.

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
