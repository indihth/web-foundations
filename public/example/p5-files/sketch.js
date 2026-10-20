function setup() {
    noCanvas();
  }
  
  function draw() {
    let topText = topWords();
    let bottomText = bottomWords();
    let size = fontSize();
  
    writeOnImage(topText, bottomText, size);
  }
  