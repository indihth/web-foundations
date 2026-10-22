export type InstructionCode = {
  label: string;
  source: string;
  copyable?: boolean;
  /** Substrings in source to emphasize (e.g. new class names). */
  highlights?: string[];
};

/** When Advanced mode is on, replaces parts of a numbered instruction. */
export type AdvancedInstructionOverride = {
  title?: string;
  body?: string[];
  /** Hide regular code blocks on this instruction (e.g. helper calls in sketch.js). */
  omitCode?: boolean;
};

export type InstructionBlock = {
  number: string;
  title: string;
  body: string[];
  tip?: string;
  challenge?: string;
  explained?: string;
  link?: {
    href: string;
    label: string;
    note?: string;
  };
  code?: InstructionCode;
  /** Optional second snippet (e.g. placement context after the main block). */
  codeSecondary?: InstructionCode;
  /** Show the HTML symbol keyboard diagram. */
  keyboardDiagram?: boolean;
  /** Collapsible answer (e.g. after a “figure it out” prompt). */
  reveal?: InstructionReveal;
  advanced?: AdvancedInstructionOverride;
};

export type InstructionReveal = {
  triggerLabel: string;
  hideLabel?: string;
  body?: string[];
  code: InstructionCode;
};

export type AdvancedBlock = {
  title: string;
  body: string[];
};

export type StepVariant = "standard" | "finish";

export type Step = {
  slug: string;
  title: string;
  summary: string;
  kicker: string;
  intro: string;
  variant: StepVariant;
  instructions: InstructionBlock[];
  advanced: AdvancedBlock;
};

import { P5_SIGNUP_URL, SKETCH_URL } from "@/lib/workshop-urls";

const BANNER_HTML_PLAIN = `<p>Memeo is <u>free</u>, no sign-up, and runs entirely in your browser.</p>`;

const BANNER_HTML_WITH_CLASS = `<p class="banner">Memeo is <u>free</u>, no sign-up, and runs entirely in your browser.</p>`;

const HEADER_HTML_PLAIN = `<header>
  <div>memeo</div>
  <div>Meme Generator</div>
</header>`;

const HEADER_HTML_WITH_CLASSES = `<header>
  <div class="logo">memeo</div>
  <div class="pill">Meme Generator</div>
</header>`;

const HERO_HTML_PLAIN = `<section>
  <h1>Make it</h1>
  <h1>a m<span>!</span>me.</h1>
  <p><span>{</span> Upload a picture, add your words, share the joke. <span>}</span></p>
</section>`;

const HERO_HTML_WITH_CLASSES = `<section class="hero">
  <h1>Make it</h1>
  <h1 class="hero-right">a m<span>!</span>me.</h1>
  <p class="hero-note"><span class="brace">{</span> Upload a picture, add your words, share the joke. <span class="brace">}</span></p>
</section>`;

const PREVIEW_HTML = `<main>
  <section class="card">
    <p class="label">Preview</p>

    <div class="preview">
      <img src="" alt="Your meme">
    </div>
  </section>
</main>`;

const PREVIEW_IMG_SRC = `<img src="https://picsum.photos/200" alt="Your meme">`;

const PREVIEW_IMG_WITH_ID = `<img id="preview" src="https://picsum.photos/200" alt="Your meme">`;

const MEME_P_LINES_NO_IDS = `      <p class="meme-top"></p>
      <p class="meme-bottom"></p>`;

const MEME_P_LINES_WITH_IDS = `      <p id="meme-top" class="meme-top"></p>
      <p id="meme-bottom" class="meme-bottom"></p>`;

const TOP_INPUT_HTML = `<section class="card">
  <label for="top">Top text</label>
  <input id="top" type="text" placeholder="When the code finally runs">
</section>`;

const BOTTOM_INPUT_HTML = `<label for="bottom">Bottom text</label>
<input id="bottom" type="text" placeholder="And you still do not know why">`;

const FORM_CARD_BOTTOM_PLACEMENT = `<section class="card">
  <label for="top">Top text</label>
  <input id="top" type="text" placeholder="When the code finally runs">

  // Add code here

</section>`;

const PREVIEW_MEME_PLACEMENT = `<div class="preview">
  <img src="https://picsum.photos/200" alt="Your meme">

  // Add code here

</div>`;

const DRAW_READ_TOP_JS = `let topText = topWords();
console.log(topText);`;

const WRITE_ON_IMAGE_CALL_SYNTAX_JS = `writeOnImage(top, bottom, size);`;

const DRAW_WRITE_ON_IMAGE_JS = `let topText = topWords();
let bottomText = bottomWords();

writeOnImage(topText, bottomText);`;

const UPLOAD_HTML = `<label class="upload">
  <input id="photo" type="file" accept="image/*">
  Upload image ↑
</label>`;

export const steps: Step[] = [
  {
    slug: "set-up-p5",
    title: "Set up p5.js",
    summary: "Create an account and save your own copy of the workshop template.",
    kicker: "Starter file",
    intro:
      "Create a p5.js account and save your own copy of the workshop template.",
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
        body: [
          "Open the workshop template sketch, then choose File → Save. p5.js saves a copy and adds “Copy” to the name. You can rename the sketch to whatever you like.",
        ],
        link: {
          href: SKETCH_URL,
          label: "Open the template sketch",
          note: "You are opening a starter file to copy, not the finished website.",
        },
      },
    ],
    advanced: {
      title: "helpers.js and getElementById",
      body: [
        "helpers.js is already in the sketch. It uses document.getElementById so later steps can call short names like topWords(). The id in your HTML and the string inside getElementById(\"...\") must match exactly.",
      ],
    },
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
    advanced: {
      title: "Quotes in HTML and JavaScript",
      body: [
        "The same quotation marks wrap id=\"top\" in HTML and \"top\" inside getElementById(\"top\") in JavaScript.",
      ],
    },
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
          "The `index.html` file is set up with what we need to start. The `<body>` of the page is empty, this is where we'll be adding code to build the page.",
          "We'll be looking at `sketch.js` later in the session.",
        ],
        tip: "You will edit `index.html` and `sketch.js` only. Leave `setup()` and `noCanvas()` in sketch.js alone: without `noCanvas()`, p5 would add a blank canvas on top of your page.",
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
    advanced: {
      title: "topWords in helpers.js",
      body: [
        "Open topWords in helpers.js. It finds the element with document.getElementById(\"top\") and reads .value. Leave the file unchanged; you will use the helper in sketch.js unless you choose Advanced on a later step.",
      ],
    },
  },
  {
    slug: "add-the-banner",
    title: "Add the banner",
    summary: "Type the top message bar in HTML only.",
    kicker: "Build your page",
    intro:
      "We'll be building the page from the top down, this is how html is loaded.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Type the banner inside body.",
        body: [
          "Open your `index.html` file and find the section that says `code starts here` and type out the following code.",
        ],
        code: {
          label: "HTML · index.html",
          source: BANNER_HTML_PLAIN,
          copyable: false,
        },
      },
      {
        number: "2",
        title: "Preview your changes.",
        body: [
          "Preview the changes by playing the sketch (with the play button or using the shortcut).",
        ],
      },
    ],
    advanced: {
      title: "No id on the banner yet",
      body: [
        "A p is a paragraph. u underlines the word inside it. This paragraph has no id, so getElementById cannot find it yet.",
      ],
    },
  },
  {
    slug: "add-the-header",
    title: "Add the header",
    summary: "Type the logo row in HTML only.",
    kicker: "Build your page",
    intro:
      "The header is typically the top of every website. This is where the navigation bar usually lives. Our site doesn't have a navigation bar but it does have a site title, so we'll add that here.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Type the header below the banner.",
        body: [
          "Below your banner paragraph, type the header block.",
        ],
        code: {
          label: "HTML · index.html",
          source: HEADER_HTML_PLAIN,
          copyable: false,
        },
      },
      {
        number: "2",
        title: "Preview your changes.",
        body: [
          "Preview your changes. Notice that the two new elements that sit inside the `<header>` tag are in a row, with a light border below. The template sketch we are using has some default styling already setup.",
           ],
        challenge: "Look through the files `style.css` and find where it says `header {` — the code inside those curly braces is the styling that gets applied to the `<header>` tag. What is the styling applied to the `<header>` tag?",
      },
    ],
    advanced: {
      title: "Structure without ids",
      body: [
        "`header` groups the top of the page. `div` is a plain box for the logo and the label. Still no id attributes, so nothing for getElementById yet.",
      ],
    },
  },
  {
    slug: "add-the-hero",
    title: "Add the hero",
    summary: "Copy the big headline section in HTML only.",
    kicker: "Build your page",
    intro:
      "The hero is the part of the site that you will notice first. It's to grab your attention and let you know what the site is about. Ours tells us we can make a meme and upload our own image.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Copy the hero section.",
        body: [
          "Below the header, paste the hero section. The code here can be copied and directly pasted into your code.",
        ],
        explained:
          "A `<h>` tag stands for 'heading'. A `<h1>` is the top level heading, usually used for the site title or slogan. Notice that inside the 2nd `<h1>` there is `<span>!</span>`. A `<span>` is a generic tag we use to wrap around a part of text. We are using it style just the exclamation mark.",
        code: {
          label: "HTML · index.html",
          source: HERO_HTML_PLAIN,
          copyable: true,
        },
      },
      {
        number: "2",
        title: "Check your page so far.",
        body: [
          "This is what our page should look like so far.",
        ],
        tip: "If something looks wrong, check that each closing tag matches its opening tag.",
      },
    ],
    advanced: {
      title: "Hero HTML tags",
      body: [
        "`section` groups this region. `h1` is a heading. `span` wraps one piece of a line, which is why `a m<span>!</span>me.` is copied rather than typed.",
      ],
    },
  },
  {
    slug: "add-css-classes",
    title: "Add CSS classes",
    summary: "Connect your HTML to the provided stylesheet.",
    kicker: "Build your page",
    intro:
      "Until now, the page has looked quite plain. Now we're going to add some styling to some of our elements.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Find the banner styles.",
        body: [
          "The style rules have already been written and are stored in the style.css file. Open the file and find the class for `.banner`.",
        ],
        tip: "Use Ctrl + F to search the file for the text `.banner`",
      },
      {
        number: "2",
        title: "Add the banner class.",
        body: [
          "Now we need to add the style classes to our HTML elements. We do this by adding `class=\"myClassName\"`, replace 'myClassName' with the real name of the class. Classes are always added in the open tag of an element.",
          "Return to your `index.html` file and add the class 'banner' to the banner `<p>` tag.",
        ],
        code: {
          label: "HTML · index.html",
          source: BANNER_HTML_WITH_CLASS,
          copyable: false,
          highlights: ["class=\"banner\""],
        },
      },
      {
        number: "3",
        title: "Classes on the header.",
        body: [
          "On the first div in the header, add class=\"logo\". On the second div, add class=\"pill\".",
        ],
        code: {
          label: "HTML · index.html",
          source: HEADER_HTML_WITH_CLASSES,
          copyable: false,
          highlights: ["class=\"logo\"", "class=\"pill\""],
        },
      },
      {
        number: "4",
        title: "Classes on the hero.",
        body: [
          "Add class=\"hero\" on the section. Add hero-right on the second h1, hero-note on the paragraph, and brace on each span around the curly brackets.",
        ],
        code: {
          label: "HTML · index.html",
          source: HERO_HTML_WITH_CLASSES,
          copyable: false,
          highlights: ["class=\"hero\"", "class=\"hero-right\"", "class=\"hero-note\"", "class=\"brace\"", "class=\"brace\""],
        },
      },
      {
        number: "5",
        title: "Preview and compare.",
        body: [
          "Preview work and check against the example website. If something isn't displaying as it should, check the class name is correct and that it's added to the correct element.",
        ],
      },
    ],
    advanced: {
      title: "class vs id",
      body: [
        "class connects an element to style.css and can be reused on many elements. id names one element so JavaScript can find it with document.getElementById. This step only adds classes; id comes on the form and preview later.",
      ],
    },
  },
  {
    slug: "add-the-preview",
    title: "Add the preview",
    summary: "Add the preview card and wire up the sample image.",
    kicker: "Build your page",
    intro:
      "Now we'll add a place for our image to be previewed on our page. We'll look at a new tag for images, `<img>` and what that tag requires.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Copy the preview block.",
        body: [
          "Below the hero, paste this code block.",
        ],
        code: {
          label: "HTML · index.html",
          source: PREVIEW_HTML,
          copyable: true,
        },
      },
      {
        number: "2",
        title: "What goes in src?",
        body: [
          "Notice the `<img>` tag attributes here, `src=\"\"` and `alt=\"Your meme\"`. What might these mean?",
        ],
        reveal: {
          triggerLabel: "Show the answer",
          hideLabel: "Hide the answer",
          body: [
            "'src' stands for source, where the image comes from. It takes the 'path', the address of where the file lives on your computer, or a URL. You can display almost any image you can find on the internet here, if you find the proper URL. For now, we'll use a website that provides sample images for developers. It'll return a new image every time you refresh the page.",
            "Paste this URL inside the 'src' attribute: `https://picsum.photos/200`. Your code should now look like this:",
          ],
          code: {
            label: "HTML · the img line",
            source: PREVIEW_IMG_SRC,
            copyable: false,
            highlights: ["https://picsum.photos/200"],
          },
        },
      },
      {
        number: "3",
        title: "Preview the image.",
        body: [
          "Preview the changes. If you don't see an image, check that the full URL was pasted inside the src quotes `\" \"`. Does your 'src' attribute have the equals? `src=\"\"`? Do you have the closing `>` ?",
        ],
      },
    ],
    advanced: {
      title: "src on the img",
      body: [
        "`src` is the address of the picture (`https://picsum.photos/200`). The browser loads that URL into the `img` tag. You will add more attributes on the preview later.",
      ],
    },
  },
  {
    slug: "add-top-text",
    title: "Add top text",
    summary: "Add a text input with a label.",
    kicker: "Build your page",
    intro:
      "This step introduces a few more new tags. These are used for creating forms in HTML and are used extensively in web development.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Add the top text field.",
        body: [
          "To create a text input field, we need two things. A label for the input and the input itself (the box you type into). The `<label>` tag takes the attribute `for=\"\"`, this ties it to the correct input.",
          "Paste this block of code directly below the starting `<main>` tag, above your preview card.",
        ],
        code: {
          label: "HTML · index.html",
          source: TOP_INPUT_HTML,
          copyable: true,
        },
      },
      {
        number: "2",
        title: "Preview changes and try the input.",
        body: [
          "Preview your changes, your page should look like this now. The new input should be on the left, the image preview on the right. Try typing something into your new input.",
        ],
      },
    ],
    advanced: {
      title: "Labels and ids",
      body: [
        "The `for` attribute on a label must match the `id` on the input. Later, `topWords()` will look up `id=\"top\"` with getElementById.",
      ],
    },
  },
  {
    slug: "read-the-text",
    title: "Read the text in JavaScript",
    summary: "Use sketch.js to read what the user types.",
    kicker: "Build your page",
    intro:
      "Moving on to Javascript! So far, we've only looked at HTML and CSS but now we're going to add some interactivity with Javascript. The web uses these three languages as the basis. HTML for structure, CSS for styling and JS for making the website actually do something.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Read the top text box.",
        body: [
          "Open the file `sketch.js`. There are two functions already setup, `setup()` and `draw()`. Inside `draw()`, in the area marked `code starts here`, add the following code.",
        ],
        code: {
          label: "JavaScript · sketch.js · inside draw()",
          source: DRAW_READ_TOP_JS,
          copyable: false,
        },
        explained: "Pay attention to the case of the variable names and functions. Code is case sensitive, so 'myVariable' is not the same as 'myvariable'.",
        advanced: {
          omitCode: true,
          body: [
            "Inside `draw()`, in the marked area, use document.getElementById(\"top\") to find the input. Read `.value` into a variable named topText, then use console.log to print it.",
          ],
        },
      },
      {
        number: "2",
        title: "Watch the console.",
        body: [
          "Run this code and type something into your input. Watch the 'Console' below your code editor. It will start printing out whatever you type. Now we have a way to store the top line text.",
        ],
        tip: "To stop the console from printing, press the 'Stop' button beside the 'Play' button.",
      },
      
      {
        number: "3",
        title: "Add the bottom text field in HTML.",
        body: [
          "Back in your `index.html` file, add the HTML for the 2nd input field called 'bottom'. Add it between the previous `<input>` tag and the closing `</section>` tag.",
        ],
        code: {
          label: "HTML · add inside your form card",
          source: BOTTOM_INPUT_HTML,
          copyable: false,
        },
        codeSecondary: {
          label: "HTML · where the bottom field goes",
          source: FORM_CARD_BOTTOM_PLACEMENT,
          copyable: false,
          highlights: ["// Add code here"],
        },
      },
      {
        number: "4",
        title: "Read both text boxes.",
        body: [
          "Try editing the `sketch.js` file to print out the bottom text as well as the top. Just like with `topWords()` there's a function called `bottomWords()`. How would you print the bottom text to the console as well?",
        ],
        advanced: {
          omitCode: true,
          body: [
            "Add bottomText with getElementById(\"bottom\") and `.value`, same pattern as the top box. console.log both variables.",
          ],
        },
      },
    ],
    advanced: {
      title: "topWords() and bottomWords()",
      body: [
        "These helpers in helpers.js use getElementById with `\"top\"` and `\"bottom\"`. The id on your HTML must match exactly.",
      ],
    },
  },
  {
    slug: "write-on-image",
    title: "writeOnImage",
    summary: "Call the helper that puts your text on the picture.",
    kicker: "Build your page",
    intro:
      "Time to make the text display on our image. A function called `writeOnImage()` will do this for us.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Calling a function with arguments.",
        body: [
          "You have already called functions like `topWords()` and `console.log(something)`. The values inside the parentheses are arguments — information you pass in so the function can use it.",
          "`writeOnImage()` takes arguments too. It uses them to put your meme text on the picture: first the top line, then the bottom line. You will add a third argument for text size later.",
          "In `draw()` you already read the inputs into variables. When you call `writeOnImage(...)`, what should you put inside the parentheses?",
        ],
        code: {
          label: "JavaScript · calling writeOnImage",
          source: WRITE_ON_IMAGE_CALL_SYNTAX_JS,
          copyable: false,
          highlights: ["top", "bottom", "size"],
        },
        advanced: {
          body: [
            "Pass your `topText` and `bottomText` variables as the first two arguments, in that order.",
          ],
        },
      },
      {
        number: "2",
        title: "Call writeOnImage.",
        body: [
          "Inside `draw()`, after your two variables, call `writeOnImage` with those variables as arguments, in the same order as the parameters: top text first, then bottom text.",
          "Remove the `console.log` lines, we do not need them anymore.",
        ],
        reveal: {
          triggerLabel: "Show the answer",
          hideLabel: "Hide the answer",
          body: ["Your `draw()` code should look like this:"],
          code: {
            label: "JavaScript · sketch.js · inside draw()",
            source: DRAW_WRITE_ON_IMAGE_JS,
            copyable: false,
          },
        },
        advanced: {
          body: [
            "Call writeOnImage(topText, bottomText) after your variables, or set `.textContent` on the overlay paragraphs yourself.",
          ],
        },
      },
      {
        number: "3",
        title: "Add the meme lines in HTML.",
        body: [
          "Inside your preview div, below the img, add two empty p elements. Use the class names below so style.css can position the meme text.",
          "What will these `<p>` elements do here?",
        ],
        code: {
          label: "HTML · index.html · inside .preview",
          source: MEME_P_LINES_NO_IDS,
          copyable: true,
          highlights: ["meme-top", "meme-bottom"],
        },
        codeSecondary: {
          label: "HTML · where to add the new code",
          source: PREVIEW_MEME_PLACEMENT,
          copyable: false,
          highlights: ["// Add code here"],
        },
      },
      {
        number: "4",
        title: "Try it.",
        body: [
          "Run the changes. What happens when you write in the input fields now? Are they working? Why not?",
        ],
      },
    ],
    advanced: {
      title: "writeOnImage()",
      body: [
        "writeOnImage() in helpers.js uses getElementById to find the overlay lines and sets their textContent from your variables. Read the function in helpers.js without rewriting it.",
      ],
    },
  },
  {
    slug: "add-preview-overlays",
    title: "Name the meme lines",
    summary: "Add ids on the overlay paragraphs so writeOnImage can find them.",
    kicker: "Build your page",
    intro:
      "writeOnImage() is running, and the paragraphs are on the page. The program still needs ids on those tags so JavaScript can find them.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Why the words did not show.",
        body: [
          "The p tags are in the right place, but writeOnImage() looks them up by id. Without matching ids, it has nothing to update.",
        ],
        challenge: "Can you figure out which ids to add? Check helpers.js or the next reveal if you are stuck.",
        advanced: {
          body: [
            "writeOnImage() uses getElementById with fixed id strings. Without those ids on your p tags, the function runs but cannot set `.textContent` on the lines.",
          ],
        },
      },
      {
        number: "2",
        title: "Add ids on the p tags.",
        body: [
          "Update both meme paragraphs so each has an id as well as its class.",
        ],
        reveal: {
          triggerLabel: "Show the answer",
          hideLabel: "Hide the answer",
          body: [
            "Add id=\"meme-top\" on the top line and id=\"meme-bottom\" on the bottom line. The class names stay the same.",
          ],
          code: {
            label: "HTML · both p tags · inside .preview",
            source: MEME_P_LINES_WITH_IDS,
            copyable: true,
            highlights: ['id="meme-top"', 'id="meme-bottom"'],
          },
        },
      },
      {
        number: "3",
        title: "Try it again.",
        body: [
          "Save and refresh. Type in the top and bottom boxes. Words should appear on the image.",
        ],
      },
    ],
    advanced: {
      title: "Ids on the overlay",
      body: [
        "`meme-top` and `meme-bottom` are the ids writeOnImage looks up. `.textContent` is where your saved topText and bottomText go.",
      ],
    },
  },
  {
    slug: "add-upload",
    title: "Add upload",
    summary: "Add the upload control and try choosing a photo.",
    kicker: "Build your page",
    intro:
      "We want to upload our own image and replace the sample image. To do this, we need to add a button to upload the image.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Copy the upload control.",
        body: [
          "At the top of the form card, above the top text label, paste the upload block.",
        ],
        code: {
          label: "HTML · index.html",
          source: UPLOAD_HTML,
          copyable: true,
        },
      },
      {
        number: "2",
        title: "Refresh and upload.",
        body: [
          "Save and refresh the page so helpers.js can find the new input. Choose an image from your computer.",
          "The sample picture in the preview does not change. Why do you think that is?",
         ],
         challenge: "Try and get the upload image to display... it's the same issue we had when trying to display the text. Check the `<img>` tag, what's missing?",       
      },
      {
        number: "3",
        title: "Try upload again.",
        body: [
          "Save and refresh. Choose an image again. It should replace the sample in the preview.",
        ],
        reveal: {
          triggerLabel: "Reveal previous answer",
          hideLabel: "Hide the answer",
          body: [
            "Add id=\"preview\" on the img inside your preview div. Keep the same src value you added earlier.",
          ],
          code: {
            label: "HTML · the img line · inside .preview",
            source: PREVIEW_IMG_WITH_ID,
            copyable: true,
            highlights: ['id="preview"'],
          },
        },
      },
    ],
    advanced: {
      title: "pictureOf() and showUploadedImage()",
      body: [
        "When you pick a file, showUploadedImage() runs. It uses getElementById(\"preview\") to find the img, then sets `.src` to a temporary URL from the file you chose.",
        "Do not paste a second change listener into sketch.js or the upload will fire twice.",
        "Read pictureOf and showUploadedImage in helpers.js; rewriting them is not required in class.",
      ],
    },
  },
  {
    slug: "keep-going",
    title: "Keep going",
    summary: "What to try after the workshop.",
    kicker: "Finish & explore",
    intro: "What to try after the workshop.",
    variant: "finish",
    instructions: [],
    advanced: {
      title: "applyMemeTextSize",
      body: [
        "applyMemeTextSize in helpers.js turns the size number into pixel sizes and updates the slider label (sizeLabel). Reading it is optional; rewriting it is not part of the class.",
      ],
    },
  },
  {
    slug: "add-text-size",
    title: "Add text size",
    summary: "Optional: add a size slider and resize the meme text.",
    kicker: "Extra activity",
    intro:
      "The main workshop is done. If you want to go further, the finished Memeo app also has a text-size slider. You already know how to add inputs and read them in sketch.js — see if you can wire this one up.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Plan a slider.",
        body: [
          "In the form card, under the bottom text field, add another input. HTML has an input type for sliders: use `type=\"range\"`. Range inputs also take `min` and `max` attributes to set the smallest and largest values.",
        ],
      },
      {
        number: "2",
        title: "Find fontSize().",
        body: [
          "Open `fontSize()` in `helpers.js`. It reads a slider on the page. Which `id` does it look for? Your new input needs to match.",
        ],
      },
      {
        number: "3",
        title: "Use the size in draw().",
        body: [
          "In `draw()`, inside the area marked `code starts here`, call `fontSize()` and save the result in a variable. Pass that number to `writeOnImage` as a third argument, after top text and bottom text. Keep your `topText` and `bottomText` variables.",
        ],
      },
      {
        number: "4",
        title: "Try the slider.",
        body: [
          "Preview your page and move the slider. Do the words on the image change size?",
        ],
      },
    ],
    advanced: {
      title: "fontSize()",
      body: [
        "`fontSize()` uses getElementById(\"size\") and `Number(...)` on `.value`. The slider needs `id=\"size\"`. The call becomes writeOnImage with top text, bottom text, then size. `applyMemeTextSize` in helpers.js also updates the label when `id=\"sizeLabel\"` is on the slider label.",
      ],
    },
  },
];

export function getStepNavigation(slug: string) {
  const index = steps.findIndex((step) => step.slug === slug);
  if (index === -1) {
    return null;
  }

  return {
    step: steps[index],
    index,
    number: index + 1,
    total: steps.length,
    previous: index > 0 ? steps[index - 1] : null,
    next: index < steps.length - 1 ? steps[index + 1] : null,
  };
}
