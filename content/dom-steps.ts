import { NEW_CODE, type Step } from "./steps";
import { DOM_SKETCH_URL, P5_SIGNUP_URL } from "@/lib/workshop-urls";

const HIGHLIGHT_NEW = [NEW_CODE];

const INDEX_AFTER_HERO_PLACEMENT = `  </section>

  // New code here

  <!-- ========== code ends here ========== -->`;

const DRAW_MARKER_PLACEMENT = `function draw() {
  // ============================================
  // code starts here
  // ============================================

  // New code here

  // ============================================
  // code ends here
  // ============================================
}`;

const DRAW_AFTER_TEXT_PLACEMENT = `  // textContent for meme-top and meme-bottom

  // New code here

  // ============================================
  // code ends here
  // ============================================
}`;

const TEXT_CONTENT_EXAMPLE_JS = `memeTop.textContent = top;
memeBottom.textContent = bottom;`;

const INDEX_AFTER_FORM_CARD_PLACEMENT = `  </section>

  // New code here

  <!-- ========== code ends here ========== -->`;

const PREVIEW_INSIDE_PLACEMENT = `<div class="preview">

  // New code here

</div>`;

const PREVIEW_EMPTY_IMG_PLACEMENT = `<div class="preview">

  // New code here

  <p id="meme-top" class="meme-top"></p>
  <p id="meme-bottom" class="meme-bottom"></p>
</div>`;

const FORM_CARD_TOP_UPLOAD_PLACEMENT = `<section class="card">

  // New code here

  <label for="top">Top text</label>`;

const FORM_CARD_SLIDER_PLACEMENT = `<input id="bottom" type="text" placeholder="...">

  // New code here

</section>`;

const STARTER_HEADER_HTML = `<header>
  <div class="logo">memeo</div>
  <div class="pill">Meme Generator</div>
</header>`;

const STARTER_HERO_SECTION_HTML = `<section class="hero">
  <h1>Make it</h1>
  <h1 class="hero-right">a m<span>!</span>me.</h1>
  <p class="hero-note"><span class="brace">{</span> Upload a picture, add your words, share the joke. <span class="brace">}</span></p>
</section>`;

const APPLY_MEME_TEXT_SIZE_JS = `function applyMemeTextSize(size) {
  let n = Number(size);
  if (!n) n = 9;

  let fontPx = n * 2.2;
  let topLine = document.getElementById("meme-top");
  let bottomLine = document.getElementById("meme-bottom");
  if (topLine) topLine.style.fontSize = fontPx + "px";
  if (bottomLine) bottomLine.style.fontSize = fontPx + "px";

  let label = document.getElementById("sizeLabel");
  if (label) label.textContent = "Text size · " + n;
}`;

const domTemplateLink = DOM_SKETCH_URL
  ? {
      href: DOM_SKETCH_URL,
      label: "Open the DOM template sketch",
      note: "You are opening a starter file to copy, not the finished website.",
    }
  : undefined;

/** The DOM guide ,  document.getElementById in sketch.js; optional applyMemeTextSize in helpers.js. */
export const domSteps: Step[] = [
  {
    slug: "set-up-p5",
    title: "Set up p5.js",
    summary: "Create an account and save your own copy of the workshop template.",
    kicker: "Starter file",
    intro:
      "Create a p5.js account and save your own copy of the DOM workshop template.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Create a p5.js account.",
        body: [
          "Sign up for a free account on the p5.js web editor. You do not need to verify your email to use it in class.",
        ],
        link: {
          href: P5_SIGNUP_URL,
          label: "Open the p5.js sign-up page",
        },
        tip: "Write down your username and password so you can log in again at home.",
      },
      {
        number: "2",
        title: "Save a copy of the template.",
        body: DOM_SKETCH_URL
          ? [
              "Open the DOM workshop template sketch, then choose File → Save. p5.js saves a copy and adds “Copy” to the name. You can rename the sketch to whatever you like.",
            ]
          : [
              "Your facilitator will share the DOM template sketch link in class. When you have it, open that sketch, then choose File → Save. p5.js saves a copy and adds “Copy” to the name.",
            ],
        link: domTemplateLink,
      },
    ],
  },
  {
    slug: "keyboard-symbols",
    title: "Find symbols on your keyboard",
    summary: "Locate the punctuation you'll type for HTML tags and attributes.",
    kicker: "Before you code",
    intro:
      "HTML uses a small set of punctuation marks. Find them on your keyboard now so you are not hunting for keys during the build.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Learn the names.",
        body: [
          "Angle brackets: `<` and `>`. They wrap HTML tags, like `<header>` and `</header>`.",
          "Square brackets: `[` and `]`. You may see them in code or URLs later.",
          "Curly braces: `{` and `}`. The finished Memeo page uses them in the hero text.",
          "Quotation marks: `\"` and `\"`. They wrap attribute values, like `class=\"logo\"`.",
        ],
      },
      {
        number: "2",
        title: "Find the keys.",
        body: [
          "The diagram shows a UK English keyboard. Highlighted keys are the ones you need. On UK layouts, double quote is Shift + 2, not Shift + the @ key.",
        ],
        keyboardDiagram: true,
        tip: "Laptop keys vary slightly by model. If yours looks different, ask your lecturer to point out the same symbols.",
      },
    ],
  },
  {
    slug: "explore-your-sketch",
    title: "Explore your sketch",
    summary: "Find the files you will edit and preview the blank starter page.",
    kicker: "Starter file",
    intro:
      "Before you type HTML, get to know the sketch you saved: which files are yours to change and how to preview the page.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Meet the files in your sketch.",
        body: [
          "Expand the file list on the left and look through the files. Can you tell what they generally do?",
          "The `index.html` file is set up with what we need to start. The `<body>` of the page is empty ,  this is where you will add code to build the page.",
          "You will use `sketch.js` later to connect the page with JavaScript.",
        ],
        tip: "You will edit `index.html` and `sketch.js` only. `helpers.js` is provided ,  leave it alone unless your lecturer says otherwise. Leave `setup()` and `noCanvas()` in sketch.js alone.",
      },
      {
        number: "2",
        title: "Preview the starter page.",
        body: [
          "Clicking the play button gives you a preview of the `index.html` file.",
        ],
        tip: "The keyboard shortcut for the play button is Ctrl + Enter on Windows and Cmd + Enter on Mac. Save and refresh after every change from here on.",
      },
    ],
  },
  {
    slug: "header-and-hero",
    title: "Header and hero",
    summary: "Type the top of the page with your lecturer.",
    kicker: "Build your page",
    intro:
      "You will build from the top down. Follow along and type the header and hero between the code markers in `index.html`.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Type the header and hero.",
        body: [
          "Open `index.html` and find the section that says `code starts here`. Type out the `header` block below ,  do not paste it.",
          "Below your header, you may copy the hero `section`. Each part uses `class=\"...\"` so `style.css` can style it. You will use `id` attributes on a later step to hook elements up in JavaScript.",
        ],
        code: {
          label: "HTML · index.html · type by hand",
          source: STARTER_HEADER_HTML,
          copyable: false,
        },
        codeSecondary: {
          label: "HTML · hero section · copy below header",
          source: STARTER_HERO_SECTION_HTML,
          copyable: true,
        },
        tip: "If your HTML looks messy after pasting, tidy the indentation: Ctrl + Shift + F on Windows, Cmd + Shift + F on Mac (with the file open in the editor).",
      },
      {
        number: "2",
        title: "Preview the top of the page.",
        body: [
          "Play the sketch. You should see the logo, pill, and hero text styled like the finished Memeo app.",
          "If something looks plain, check that your class names match the reference exactly.",
        ],
      },
    ],
  },
  {
    slug: "read-the-inputs",
    title: "Read the text inputs",
    summary: "Add two fields and read them with getElementById.",
    kicker: "JavaScript",
    intro:
      "You will add top and bottom text fields in HTML, then read what the user types from `sketch.js`.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Add the form card and inputs.",
        body: [
          "Below the hero, follow your lecturer and add a `section` with class `card`. Inside it, add a label and text input for the top line, then a label and text input for the bottom line.",
          "Give the inputs `id=\"top\"` and `id=\"bottom\"`. Tie each label to its input with `for=\"top\"` and `for=\"bottom\"`.",
        ],
        codeSecondary: {
          label: "HTML · index.html · below the hero",
          source: INDEX_AFTER_HERO_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "2",
        title: "What is an id?",
        body: [
          "An `id` names one element on the page. The string must be unique.",
          "`class` is for styling with CSS. `id` is for finding one element in JavaScript with `document.getElementById(\"...\")`. The string inside the quotes must match the `id` exactly.",
        ],
      },
      {
        number: "3",
        title: "Store the elements and read .value.",
        body: [
          "In `sketch.js`, inside `draw()`, in the area marked `code starts here`, use `getElementById` to store each input in a variable ,  for example `top` and `bottom`.",
          "The variable holds the input element, not the typed text. The text is on `.value`.",
          "Use `console.log(top.value)` and `console.log(bottom.value)` while you type in each box.",
        ],
        codeSecondary: {
          label: "JavaScript · sketch.js · inside draw()",
          source: DRAW_MARKER_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
        tip: "Press Stop when you are done watching the console. `draw()` runs again and again, so the console keeps printing while the sketch is playing.",
      },
      {
        number: "4",
        title: "Check it works.",
        body: [
          "Save and play. The console should show whatever you type in the top and bottom fields.",
          "If nothing prints, check the `id` on the input and the string inside `getElementById`.",
        ],
      },
    ],
  },
  {
    slug: "add-the-preview",
    title: "Add the preview area",
    summary: "Add the preview card shell and meme text lines.",
    kicker: "Build your page",
    intro:
      "Next you need a box on the page where your meme words will sit. You will add the image markup in a later step.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Follow along in HTML.",
        body: [
          "Below the form card, add another `section` with class `card`. Inside it, add a short label (class `label`) that says Preview.",
          "Inside that card, add a `div` with class `preview`.",
        ],
        codeSecondary: {
          label: "HTML · index.html · below the form card",
          source: INDEX_AFTER_FORM_CARD_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "2",
        title: "Meme text lines.",
        body: [
          "Inside `.preview`, add two empty `p` elements with classes `meme-top` and `meme-bottom`, and ids `meme-top` and `meme-bottom`.",
          "The classes position the words; the ids let your JavaScript update them.",
        ],
        codeSecondary: {
          label: "HTML · inside .preview",
          source: PREVIEW_INSIDE_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
    ],
  },
  {
    slug: "write-text-on-preview",
    title: "Write text on the preview",
    summary: "Copy input values onto the meme lines with textContent.",
    kicker: "JavaScript",
    intro:
      "`draw()` runs over and over, so you can keep the preview in sync while the user types.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Find the overlay lines.",
        body: [
          "Use `getElementById` to store `#meme-top` and `#meme-bottom` in variables.",
        ],
        codeSecondary: {
          label: "JavaScript · sketch.js · inside draw()",
          source: DRAW_MARKER_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "2",
        title: "Set textContent.",
        body: [
          "Set each overlay line’s `textContent` from the matching text input. Match `#meme-top` to the top box and `#meme-bottom` to the bottom box. Use your own variable names if they differ.",
          "Try a pattern like the example below in `draw()`. You can remove the `console.log` lines when you are ready.",
          "Keep this code at the top of your `draw()` block. You will add the empty message, image, and upload code in later steps below it.",
          "Play the sketch and type in both boxes, then compare your preview with the screenshot.",
        ],
        code: {
          label: "JavaScript · example · textContent",
          source: TEXT_CONTENT_EXAMPLE_JS,
          copyable: false,
          highlights: ["textContent"],
        },
        challenge:
          "Do you get the same output? Why might both lines show `[object HTMLInputElement]`?",
      },
      {
        number: "3",
        title: "Try it.",
        body: [
          "Update your code so the preview shows the words you type, then play the sketch again.",
        ],
        tip: "Reminder: the text the user typed is on the input’s `.value` property ,  read that into `textContent`, not the input element itself.",
      },
    ],
  },
  {
    slug: "show-uploaded-image",
    title: "Empty message and image",
    summary: "Add the placeholder and preview img inside the preview.",
    kicker: "Build your page",
    intro:
      "Before the upload button, add the markup for the empty state and the image that will replace it.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Empty message and img.",
        body: [
          "Inside `.preview`, add a `p` with class `empty` and `id=\"empty\"` ,  a message like “No image yet”.",
          "Add an `img` with `id=\"preview\"` and `alt=\"Your meme\"`.",
          "The `img` tag displays a picture when you set its `src` attribute later in JavaScript.",
        ],
        codeSecondary: {
          label: "HTML · inside .preview · above the meme lines",
          source: PREVIEW_EMPTY_IMG_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
        tip: "When you play the sketch, the dashed empty message should be visible. You will hide the image in the next step.",
      },
      {
        number: "2",
        title: "Hide the preview image.",
        body: [
          "Keep the preview `img` invisible by default so you can show it from JavaScript after upload.",
          
        ],
        challenge:
          "Google how to hide it in HTML and add what you find. Try keywords like 'html tag',  'visible', 'hide' etc. The answer is quite simple...",
      },
    ],
  },
  {
    slug: "add-upload-control",
    title: "Add the upload control",
    summary: "Add the file input and wire up the preview in JavaScript.",
    kicker: "Build your page",
    intro:
      "Now that the preview markup is in place, add the upload control and connect everything in `draw()`.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Add the upload button.",
        body: [
          "At the top of your form card, above the top text label, follow your lecturer and add a file input inside a `label` with class `upload`.",
          "Give the file input `id=\"photo\"`, `type=\"file\"`, and `accept=\"image/*\"`.",
        ],
        codeSecondary: {
          label: "HTML · top of your form card",
          source: FORM_CARD_TOP_UPLOAD_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "2",
        title: "Link up the ids.",
        body: [
          "In `draw()`, use `getElementById` to store `photo`, `preview`, and `empty` in variables ,  the same ids you added in HTML.",
          "Choosing a file should not change the picture yet. You have only connected the names.",
        ],
        codeSecondary: {
          label: "JavaScript · sketch.js · below your text lines",
          source: DRAW_AFTER_TEXT_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "3",
        title: "Show the image once.",
        body: [
          "Below your text lines in `draw()`, run the upload logic only while the preview image is still hidden ,  for example, check `preview.hidden` first.",
          "When the user has chosen a file, use the helper in `helpers.js` that turns the file input into a URL for the `src` attribute.",
          "When you have a URL, set `preview.src`, set `preview.hidden` to `false`, and hide the empty-message element.",
          "Do not `return` early from `draw()`: that would stop your text from updating when there is no file yet.",
          "Do not run the file-to-URL logic on every frame after the image is visible ,  only while the image is still hidden.",
        ],
        codeSecondary: {
          label: "JavaScript · sketch.js · below your getElementById lines",
          source: DRAW_AFTER_TEXT_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "4",
        title: "Try upload.",
        body: [
          "Save and play. Type meme text, choose a photo, and confirm the image appears and the dashed empty message disappears.",
        ],
      },
    ],
  },
  {
    slug: "keep-going",
    title: "Keep going",
    summary: "What to try after the workshop.",
    kicker: "Finish & explore",
    intro: "What to try after the workshop.",
    variant: "finish",
    instructions: [],
  },
  {
    slug: "add-text-size",
    title: "Extra: Add Text Size",
    summary: "Optional: add a size slider and resize the meme text.",
    kicker: "Extra activity",
    intro:
      "The main workshop is done. If you want to go further, add a text-size slider. You already know how to add inputs and read `.value` in `sketch.js`.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Add a range input.",
        body: [
          "In the form card, under the bottom text field, add another input with `type=\"range\"`.",
          "Set `min=\"5\"`, `max=\"16\"`, and `value=\"9\"`. A range without min and max defaults to 0–100, which makes the text huge when passed to the helper.",
          "Give it an `id` you will use in `getElementById`.",
        ],
        codeSecondary: {
          label: "HTML · inside your form card",
          source: FORM_CARD_SLIDER_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
      },
      {
        number: "2",
        title: "Find applyMemeTextSize().",
        body: [
          "Open `applyMemeTextSize(size)` in `helpers.js`. It changes the font size on `#meme-top` and `#meme-bottom`.",
          "Read how it uses the `size` argument. Your slider’s current value is `.value` ,  remember to turn it into a number if you need to.",
        ],
        code: {
          label: "JavaScript · helpers.js · applyMemeTextSize()",
          source: APPLY_MEME_TEXT_SIZE_JS,
          copyable: false,
        },
        tip: "Updating `sizeLabel` in the helper is optional ,  the function already skips that if the label is not on your page.",
      },
      {
        number: "3",
        title: "Wire it in draw().",
        body: [
          "You should only need about two extra lines: read the slider with `getElementById`, then call `applyMemeTextSize` with its `.value`.",
          "Run the sketch and move the slider. Do the meme words change size?",
        ],
        codeSecondary: {
          label: "JavaScript · sketch.js · inside draw()",
          source: DRAW_AFTER_TEXT_PLACEMENT,
          copyable: false,
          highlights: HIGHLIGHT_NEW,
        },
        challenge:
          "Can you call the helper after your text lines so size updates whenever the slider moves?",
      },
    ],
  },
];
