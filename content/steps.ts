export type InstructionBlock = {
  number: string;
  title: string;
  body: string[];
  tip?: string;
  link?: {
    href: string;
    label: string;
    note?: string;
  };
};

export type AdvancedBlock = {
  title: string;
  body: string[];
  code?: string;
};

export type StepVariant = "setup" | "standard" | "finish";

export type Step = {
  slug: string;
  title: string;
  summary: string;
  kicker: string;
  intro: string;
  variant: StepVariant;
  instructions: InstructionBlock[];
  advanced?: AdvancedBlock;
};

import { P5_SIGNUP_URL, SKETCH_URL } from "@/lib/workshop-urls";

export const steps: Step[] = [
  {
    slug: "set-up-p5",
    title: "Set up p5.js",
    summary: "Create an account, save a copy of the template, and explore the files.",
    kicker: "Starter file",
    intro:
      "Create a p5.js account, save your own copy of the workshop template, and get familiar with the editor before you build the page.",
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
          note: "You are opening a starter file to copy — not the finished website.",
        },
      },
      {
        number: "3",
        title: "Open the file list.",
        body: [
          "Expand the file list on the left of the editor so you can see every file in the sketch. Your lecturer will explain what each one does.",
        ],
      },
    ],
  },
  {
    slug: "set-up-the-page",
    title: "Set up the page",
    summary: "Create index.html and the basic document.",
    kicker: "Build your page",
    intro:
      "Create the file every web page starts with and give your browser a clear structure to read.",
    variant: "setup",
    instructions: [
      {
        number: "1",
        title: "Create your first file.",
        body: [
          "In your project folder, create a new file named index.html. The name and lowercase letters matter.",
        ],
      },
      {
        number: "2",
        title: "Add the basic document.",
        body: [
          "Copy this starter structure into the file. It gives your browser the information it needs to read the page.",
        ],
      },
      {
        number: "3",
        title: "Open it in your browser.",
        body: [
          "Save the file, then open index.html in a browser. A blank white page means it is working.",
        ],
        tip: "Keep your editor and browser side by side. Save, refresh, and check your work after every small change.",
      },
    ],
    advanced: {
      title: "Add helpful metadata",
      body: [
        "If you have time, add a viewport meta tag inside the head. It tells smaller screens how wide the page should be.",
        "This is not required for the workshop path, but it will help your page look better on a phone when you revisit it later.",
      ],
      code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    },
  },
  {
    slug: "add-the-words",
    title: "Add the words",
    summary: "Put the page content in before any styling.",
    kicker: "Build your page",
    intro: "Put the page content in before any styling.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Add the page heading.",
        body: ['Inside the body, add a heading that says “Meme-ify”.'],
      },
      {
        number: "2",
        title: "Add the instructions.",
        body: [
          "Write one short sentence that tells someone how to use your page.",
        ],
      },
      {
        number: "3",
        title: "Check the order.",
        body: [
          "Save and refresh. Your heading should appear above the instructions.",
        ],
      },
    ],
    advanced: {
      title: "Use elements that describe the content",
      body: [
        "Wrap the heading and instructions in semantic elements such as header and main so the page structure is clear to browsers and assistive tech.",
        "Keep a single main heading on the page. Do not skip heading levels.",
      ],
    },
  },
  {
    slug: "add-a-stylesheet",
    title: "Add a stylesheet",
    summary: "Link a CSS file and set color and type.",
    kicker: "Build your page",
    intro: "Link a CSS file and set color and type.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Create the CSS file.",
        body: ["Create a new file named styles.css in the same folder."],
      },
      {
        number: "2",
        title: "Connect it to the page.",
        body: ["In the head, add a link element that points at styles.css."],
      },
      {
        number: "3",
        title: "Try your first rule.",
        body: [
          "Set a background colour on the body, then save and refresh the page.",
        ],
      },
    ],
    advanced: {
      title: "Keep colours in one place",
      body: [
        "Define custom properties for background, text, and accent colours on the root element.",
        "Use those variables in the rest of the stylesheet so you can adjust the look in one place.",
      ],
    },
  },
  {
    slug: "place-the-sketch",
    title: "Place the sketch",
    summary: "Add the sketch to the page layout.",
    kicker: "Build your page",
    intro: "Add the sketch to the page layout.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Make a space for it.",
        body: [
          "Add a section element underneath your page instructions.",
        ],
      },
      {
        number: "2",
        title: "Add the sketch.",
        body: [
          "Open the copy you saved in step 1. Paste the embed code from your p5.js sketch into that section.",
        ],
      },
      {
        number: "3",
        title: "Check its size.",
        body: [
          "Refresh the page and make sure the sketch fits without covering your words.",
        ],
      },
    ],
  },
  {
    slug: "style-the-page",
    title: "Style the page",
    summary: "Match spacing, type, and color to the example.",
    kicker: "Build your page",
    intro: "Match spacing, type, and color to the example.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Start with the page.",
        body: [
          "Give the page a comfortable width and add space around the edges.",
        ],
      },
      {
        number: "2",
        title: "Style the words.",
        body: [
          "Choose a clear typeface, then set the heading and paragraph sizes.",
        ],
      },
      {
        number: "3",
        title: "Finish the details.",
        body: [
          "Add colour and spacing until your page feels close to the finished example.",
        ],
      },
    ],
  },
  {
    slug: "check-your-page",
    title: "Check your page",
    summary: "Compare what you built with the example.",
    kicker: "Build your page",
    intro: "Compare what you built with the example.",
    variant: "standard",
    instructions: [
      {
        number: "1",
        title: "Open both pages.",
        body: ["Put your version beside the finished Meme-ify app."],
      },
      {
        number: "2",
        title: "Compare one thing at a time.",
        body: [
          "Check the words, spacing, colours, and sketch placement in that order.",
        ],
      },
      {
        number: "3",
        title: "Fix the biggest difference.",
        body: [
          "Choose one useful improvement, make it, then check both pages again.",
        ],
      },
    ],
    advanced: {
      title: "Compare colours in the browser",
      body: [
        "Right-click the example page and inspect key elements. Note background, text, and accent colours.",
        "Adjust your stylesheet until your page feels close, one property at a time.",
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
