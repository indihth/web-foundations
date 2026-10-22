# Memeo workshop reference outline

Lecturer reference for the ~2-hour IADT taster session. The live guide is in [`content/steps.ts`](../content/steps.ts); this document mirrors that content with **Regular** and **Advanced** tracks on every step. Students can switch to Advanced on any step; each Advanced section re-explains `document.getElementById` briefly enough to stand alone.

The finished example is linked from the workshop home page. Step order: banner → header → hero → classes → preview image → text variables (console.log) → upload → preview id → font size → writeOnImage → meme line ids.

## Starter sketch (say once)

Students edit **`index.html`** and **`sketch.js`** only. These are already in the template:

- [`public/example/p5-files/helpers.js`](../public/example/p5-files/helpers.js)
- [`public/example/p5-files/styles.css`](../public/example/p5-files/styles.css) (linked as `style.css` in the sketch)

The starter **`body`** is empty. **`sketch.js`** has `setup()` with `noCanvas()` and an empty `draw()`. Leave `setup()` alone: without `noCanvas()`, p5 would draw a canvas on top of the page.

**Copy vs type:** hero, preview block, upload, preview img id line, meme p tags (classes only), and meme id reveal are **copyable**. Banner, header, class names, top text field (first label/input), bottom text, size slider, and `writeOnImage(...)` are **typed by hand**.

---

## Step 1: Set up p5.js

**Kicker:** Starter file  
**Summary:** Create an account and save your own copy of the workshop template.  
**Slug:** `set-up-p5`

Create a p5.js account and save your own copy of the workshop template.

### Regular

**1. Create a p5.js account.**

Sign up for a free account on the p5.js web editor. You do not need to verify your email to use it in class.

- Link: [Open the p5.js sign-up page](https://editor.p5js.org/signup)

> **Good to know:** Write down your username and password so you can log in again at home.

**2. Save a copy of the template.**

Open the workshop template sketch, then choose File → Save. p5.js saves a copy and adds “Copy” to the name. You can rename the sketch to whatever you like.

- Link: [Open the template sketch](https://editor.p5js.org/indihth/sketches/qt4g9h3-V)  
- *You are opening a starter file to copy, not the finished website.*

### Advanced

`helpers.js` is already in the sketch. It uses `document.getElementById` so later steps can call short names like `topWords()`. The `id` in your HTML and the string inside `getElementById("...")` must match exactly.

---

## Step 2: Find symbols on your keyboard

**Kicker:** Before you code  
**Summary:** Locate the punctuation you'll type for HTML tags and attributes.  
**Slug:** `keyboard-symbols`

HTML uses a small set of punctuation marks. Find them on your keyboard now so you are not hunting for keys during the build.

### Regular

**1. Learn the names.**

- Angle brackets: `<` and `>`. They wrap HTML tags, like `<header>` and `</header>`.
- Square brackets: `[` and `]`. You may see them in code or URLs later.
- Curly braces: `{` and `}`. The finished Memeo page uses them in the hero text.
- Quotation marks: `"` and `"`. They wrap attribute values, like `class="logo"`.

**2. Find the keys.**

The diagram shows a UK English keyboard. Highlighted keys are the ones you need. On UK layouts, double quote is Shift + 2, not Shift + the @ key.

*(Guide UI: keyboard diagram.)*

> **Good to know:** Laptop keys vary slightly by model. If yours looks different, ask your lecturer to point out the same symbols.

### Advanced

The same quotation marks wrap `id="top"` in HTML and `"top"` inside `getElementById("top")` in JavaScript.

---

## Step 3: Explore your sketch

**Kicker:** Starter file  
**Summary:** Find the files you will edit and preview the blank starter page.  
**Slug:** `explore-your-sketch`

Before you type HTML, get to know the sketch you saved: which files are yours to change and how to preview the page.

### Regular

**1. Meet the files in your sketch.**

Expand the file list on the left. You will edit index.html and sketch.js. style.css and helpers.js are already provided. You do not change them. https://picsum.photos/200 is the sample picture for the preview step.

index.html already links the stylesheet and scripts. The body is empty. You will build the page there. sketch.js has setup() with noCanvas() and an empty draw(). Leave setup() alone: without noCanvas(), p5 would add a blank canvas on top of your page.

**2. Preview the starter page.**

Click the play button in the p5 editor to open the page in a new tab. It should be mostly blank. Save and refresh after every change from here on.

### Advanced

Open `topWords` in helpers.js. It finds the element with `document.getElementById("top")` and reads `.value`. Leave the file unchanged; you will use the helper in sketch.js unless you choose Advanced on a later step.

---

## Step 4: Add the banner

**Kicker:** Build your page  
**Summary:** Type the top message bar in HTML only.  
**Slug:** `add-the-banner`

You will build the top of the page with HTML first. No class names yet. Styling comes in a later step.

### Regular

**1. Type the banner inside body.**

Open index.html. Inside body, type the paragraph below. Do not add a class attribute yet.

**2. Save and refresh.**

Save the file and refresh your preview tab. You should see the words, but they will not look like the finished site yet.

### Advanced

**No id on the banner yet** — A `p` is a paragraph. `u` underlines the word inside it. This paragraph has no id, so `getElementById` cannot find it yet.

---

## Step 5: Add the header

**Slug:** `add-the-header`

Add a header block under the banner. Structure only; no classes yet.

### Regular

Type the header below the banner (two `div` elements). Save and refresh.

### Advanced

**Structure without ids** — `header` groups the top of the page. `div` is a plain box for the logo and the label.

---

## Step 6: Add the hero

**Slug:** `add-the-hero`

Copy the hero section below the header. Still no class names.

### Regular

Paste the hero (nested headings, `span`, paragraph). Save and refresh; banner, header, hero in order.

### Advanced

**Hero HTML tags** — `section`, `h1`, `span` for one piece of a line (`a m<span>!</span>me.`).

---

## Step 7: Add CSS classes

**Slug:** `add-css-classes`

Connect HTML to the provided stylesheet. Add `class="banner"`, header classes (`logo`, `pill`), hero classes (`hero`, `hero-right`, `hero-note`, `brace`). You are not writing new CSS today.

### Advanced

**class vs id** — `class` connects to style.css; `id` names one element for `getElementById`. This step only adds classes.

---

## Step 8: Review your progress

**Slug:** `review-your-progress`

Play the sketch and compare banner, header, and hero to the finished example. Class names must match style.css exactly.

### Advanced

**Matching names exactly** — Same rule later for `getElementById("top")` and `id="top"`.

---

## Step 9: Add the preview

**Slug:** `add-the-preview`

Before JavaScript, put the preview on the page. Copy the main/card block; leave `src` empty at first. No id on the image yet, no extra paragraphs inside `.preview`.

**What goes in src?** — Reveal: `https://picsum.photos/200` on the img line. Check the picture in the card.

### Advanced

**src on the img** — `src` is the picture address. The browser loads it into the img tag. You will add more attributes on the preview later.

---

## Step 10: Add top text

**Kicker:** Build your page  
**Summary:** Add the input, then save what the user types in a variable.  
**Slug:** `add-top-text`

You will add a form card above the preview, then use sketch.js to read the box and check that the value is coming through.

### Regular

**1. Add the top text field.**

Inside main, add a new section.card above your preview card. Type the label and input below.

**2. Save the words in a variable.**

Open sketch.js. Inside draw(), type:

```javascript
let topText = topWords();
console.log(topText);
```

`topText` holds whatever `topWords()` read. `console.log` prints it in the p5 editor console. `draw()` runs repeatedly, so watch the newest console line while you type.

**3. Try it.**

Save, refresh, type in the top box, open the console. You should see your text printed. Nothing changes on the picture yet.

### Advanced

**topWords()** — `getElementById("top")`, read `.value`, `console.log(topText)`. No `writeOnImage` on this step.

---

## Step 11: Add bottom text

**Slug:** `add-bottom-text`

Add the bottom field in HTML. In draw(), add `bottomText` with `bottomWords()`, then **print both values with `console.log`**. No code block is shown in the guide—students type it.

Try it: both values in the console; still nothing on the picture.

### Advanced

Same with `getElementById("bottom")` and `.value`.

---

## Step 12: Add upload

**Slug:** `add-upload`

Paste the upload control at the top of the form card. Save and **refresh**, then choose an image.

The sample picture **does not change**. Ask **why**—do not answer on this step.

### Advanced

`showUploadedImage()` / `pictureOf()` — do not mention `id="preview"` yet.

---

## Step 13: Name the preview image

**Slug:** `add-preview-id`

Go back to the img in `.preview`. Add `id="preview"`:

```html
<img id="preview" src="https://picsum.photos/200" alt="Your meme">
```

Save, refresh, upload again—the photo replaces the sample.

### Advanced

`getElementById("preview")` and setting `.src` in `showUploadedImage()`.

---

## Step 14: Add text size

**Slug:** `add-text-size`

Add the slider in HTML. In draw(), add only:

```javascript
let size = fontSize();
```

No `writeOnImage` yet. Slider label does not update until later.

### Advanced

`fontSize()` / `Number(slider.value)`.

---

## Step 15: writeOnImage

**Slug:** `write-on-image`

Introduce the helper: **three arguments** — top text, bottom text, size.

```javascript
writeOnImage(topText, bottomText, size);
```

Add two empty `<p>` tags inside `.preview` with classes `meme-top` and `meme-bottom` (**no ids yet**).

Try it: words still do not show on the picture. Ask **why**.

### Advanced

Read `writeOnImage()` in helpers.js; optional manual `.textContent` + `applyMemeTextSize(size)`.

---

## Step 16: Name the meme lines

**Slug:** `add-preview-overlays`

Same pattern as upload: tags exist, program cannot find them without ids.

**Reveal:** add `id="meme-top"` and `id="meme-bottom"` on the two p tags.

Try again: words on the image; slider resizes text and updates the label.

### Advanced

Ids `meme-top` / `meme-bottom`, `.textContent`, `applyMemeTextSize`.

---

## Step 17: Keep going

**Slug:** `keep-going`

Finish step — optional reading of `applyMemeTextSize` in advanced.

---

## Helper-to-id map

| HTML `id` | Helper (Regular) | Property / action (Advanced) |
|-----------|------------------|------------------------------|
| `top` | `topWords()` | `.value` → `topText` |
| `bottom` | `bottomWords()` | `.value` → `bottomText` |
| `size` | `fontSize()` | `Number(.value)` → `size` |
| `preview` | (upload via helpers) | `.src` = file URL |
| `photo` | `memeoBoot()` / `showUploadedImage()` | file input; `files[0]` → URL |
| `meme-top`, `meme-bottom` | `writeOnImage(...)` | `.textContent` from variables |

`document.getElementById("someId")` returns the one element whose `id="someId"`. The string must match exactly.
