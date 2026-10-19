// Updates the meme preview from the form. No animation loop.

function topWords() {
  const box = document.getElementById("top");
  return box ? box.value : "";
}

function bottomWords() {
  const box = document.getElementById("bottom");
  return box ? box.value : "";
}

function fontSize() {
  const slider = document.getElementById("size");
  if (!slider) return 9;
  return Number(slider.value);
}

function writeOnImage(top, bottom, size) {
  const topLine = document.getElementById("meme-top");
  const bottomLine = document.getElementById("meme-bottom");
  if (topLine) topLine.textContent = top || "";
  if (bottomLine) bottomLine.textContent = bottom || "";
  applyMemeTextSize(size);
}

function pictureOf(input) {
  const file = input.files[0];
  if (!file) return "";
  return URL.createObjectURL(file);
}

function applyMemeTextSize(size) {
  let n = Number(size);
  if (!n) n = 9;

  const fontPx = n * 2.2;
  const topLine = document.getElementById("meme-top");
  const bottomLine = document.getElementById("meme-bottom");
  if (topLine) topLine.style.fontSize = fontPx + "px";
  if (bottomLine) bottomLine.style.fontSize = fontPx + "px";

  const label = document.getElementById("sizeLabel");
  if (label) label.textContent = "Text size · " + n;
}

function showUploadedImage() {
  const photo = document.getElementById("photo");
  const preview = document.getElementById("preview");
  const empty = document.getElementById("empty");
  if (!photo || !preview) return;

  const url = pictureOf(photo);
  if (!url) return;

  preview.src = url;
  preview.hidden = false;
  if (empty) empty.hidden = true;
}

function refreshPreview() {
  writeOnImage(topWords(), bottomWords(), fontSize());
}

function memeoBoot() {
  const photo = document.getElementById("photo");
  if (photo) photo.addEventListener("change", showUploadedImage);

  ["top", "bottom", "size"].forEach((id) => {
    const field = document.getElementById(id);
    if (field) field.addEventListener("input", refreshPreview);
  });

  refreshPreview();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", memeoBoot);
} else {
  memeoBoot();
}
