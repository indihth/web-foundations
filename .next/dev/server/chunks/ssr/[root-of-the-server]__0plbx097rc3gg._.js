module.exports = [
(()=>{"use strict";return[
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 48,
    height: 48
};
}),
"[project]/app/guide/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__debugCreateInstantConfigStack",
    ()=>__debugCreateInstantConfigStack,
    "default",
    ()=>GuideIndexPage,
    "instant",
    ()=>instant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/steps.ts [app-rsc] (ecmascript)");
;
;
const instant = false;
function GuideIndexPage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/guide/${__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["steps"][0].slug}`);
}
const __debugCreateInstantConfigStack = process.env.NODE_ENV !== 'production' ? function instant() {
    const error = new Error(' ');
    error.name = 'Instant Validation';
    return error;
} : null;
}),
"[project]/content/steps.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStepNavigation",
    ()=>getStepNavigation,
    "steps",
    ()=>steps
]);
const steps = [
    {
        slug: "set-up-the-page",
        title: "Set up the page",
        summary: "Create index.html and the basic document.",
        kicker: "Build your page",
        intro: "Create the file every web page starts with and give your browser a clear structure to read.",
        variant: "setup",
        instructions: [
            {
                number: "1",
                title: "Create your first file.",
                body: [
                    "In your project folder, create a new file named index.html. The name and lowercase letters matter."
                ]
            },
            {
                number: "2",
                title: "Add the basic document.",
                body: [
                    "Copy this starter structure into the file. It gives your browser the information it needs to read the page."
                ]
            },
            {
                number: "3",
                title: "Open it in your browser.",
                body: [
                    "Save the file, then open index.html in a browser. A blank white page means it is working."
                ],
                tip: "Keep your editor and browser side by side. Save, refresh, and check your work after every small change."
            }
        ],
        advanced: {
            title: "Add helpful metadata",
            body: [
                "If you have time, add a viewport meta tag inside the head. It tells smaller screens how wide the page should be.",
                "This is not required for the workshop path, but it will help your page look better on a phone when you revisit it later."
            ],
            code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        }
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
                body: [
                    'Inside the body, add a heading that says “Meme-ify”.'
                ]
            },
            {
                number: "2",
                title: "Add the instructions.",
                body: [
                    "Write one short sentence that tells someone how to use your page."
                ]
            },
            {
                number: "3",
                title: "Check the order.",
                body: [
                    "Save and refresh. Your heading should appear above the instructions."
                ]
            }
        ],
        advanced: {
            title: "Use elements that describe the content",
            body: [
                "Wrap the heading and instructions in semantic elements such as header and main so the page structure is clear to browsers and assistive tech.",
                "Keep a single main heading on the page. Do not skip heading levels."
            ]
        }
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
                body: [
                    "Create a new file named styles.css in the same folder."
                ]
            },
            {
                number: "2",
                title: "Connect it to the page.",
                body: [
                    "In the head, add a link element that points at styles.css."
                ]
            },
            {
                number: "3",
                title: "Try your first rule.",
                body: [
                    "Set a background colour on the body, then save and refresh the page."
                ]
            }
        ],
        advanced: {
            title: "Keep colours in one place",
            body: [
                "Define custom properties for background, text, and accent colours on the root element.",
                "Use those variables in the rest of the stylesheet so you can adjust the look in one place."
            ]
        }
    },
    {
        slug: "copy-the-sketch",
        title: "Make a copy of the p5.js sketch",
        summary: "Duplicate the starter file and connect it to the page.",
        kicker: "Starter file",
        intro: "Duplicate the starter file and connect it to the page.",
        variant: "sketch",
        instructions: []
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
                    "Add a section element underneath your page instructions."
                ]
            },
            {
                number: "2",
                title: "Add the sketch.",
                body: [
                    "Paste the embed code from your p5.js copy into that section."
                ]
            },
            {
                number: "3",
                title: "Check its size.",
                body: [
                    "Refresh the page and make sure the sketch fits without covering your words."
                ]
            }
        ]
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
                    "Give the page a comfortable width and add space around the edges."
                ]
            },
            {
                number: "2",
                title: "Style the words.",
                body: [
                    "Choose a clear typeface, then set the heading and paragraph sizes."
                ]
            },
            {
                number: "3",
                title: "Finish the details.",
                body: [
                    "Add colour and spacing until your page feels close to the finished example."
                ]
            }
        ]
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
                body: [
                    "Put your version beside the finished Meme-ify app."
                ]
            },
            {
                number: "2",
                title: "Compare one thing at a time.",
                body: [
                    "Check the words, spacing, colours, and sketch placement in that order."
                ]
            },
            {
                number: "3",
                title: "Fix the biggest difference.",
                body: [
                    "Choose one useful improvement, make it, then check both pages again."
                ]
            }
        ],
        advanced: {
            title: "Compare colours in the browser",
            body: [
                "Right-click the example page and inspect key elements. Note background, text, and accent colours.",
                "Adjust your stylesheet until your page feels close, one property at a time."
            ]
        }
    },
    {
        slug: "keep-going",
        title: "Keep going",
        summary: "What to try after the workshop.",
        kicker: "Finish & explore",
        intro: "What to try after the workshop.",
        variant: "finish",
        instructions: []
    }
];
function getStepNavigation(slug) {
    const index = steps.findIndex((step)=>step.slug === slug);
    if (index === -1) {
        return null;
    }
    return {
        step: steps[index],
        index,
        number: index + 1,
        total: steps.length,
        previous: index > 0 ? steps[index - 1] : null,
        next: index < steps.length - 1 ? steps[index + 1] : null
    };
}
}),
]})(),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.117ezoe8m31dk.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/guide/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/guide/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0plbx097rc3gg._.js.map