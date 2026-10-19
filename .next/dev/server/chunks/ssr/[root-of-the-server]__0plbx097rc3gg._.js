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
        slug: "page-structure",
        title: "Set up the page",
        summary: "Every web page starts with the same small skeleton.",
        body: [
            "Create a new file named index.html. This placeholder step will be replaced with the real workshop instructions.",
            "Inside it, add a document type, an html element, a head, and a body. Put the title “Alex Rivera” in the head.",
            "Save the file and open it in a browser. You should see a blank page with that title on the tab."
        ],
        advanced: {
            title: "Tell the browser what this document is",
            body: [
                "Add lang=\"en\" to the html element so the page language is explicit.",
                "Add a meta charset of utf-8 in the head so names and punctuation display correctly."
            ]
        }
    },
    {
        slug: "add-content",
        title: "Add the words",
        summary: "Put the profile content in the body, before any styling.",
        body: [
            "Inside the body, add a heading that reads Alex Rivera.",
            "Add a paragraph: “I am learning HTML and CSS in this workshop.”",
            "Add a list of three classes: HTML basics, CSS colors, and Checking my page."
        ],
        advanced: {
            title: "Use elements that describe the content",
            body: [
                "Wrap the name in a header, the paragraph in main, and the classes in an unordered list.",
                "Keep a single h1. Do not skip from a heading to a much smaller one."
            ]
        }
    },
    {
        slug: "add-styles",
        title: "Add a stylesheet",
        summary: "Link a CSS file and set the page colors and type.",
        body: [
            "Create styles.css in the same folder as index.html.",
            "In the head, add a link element that points at styles.css.",
            "Set the page background to a warm off-white, the text to a near-black, and the font to a sans-serif."
        ],
        advanced: {
            title: "Keep the colors in one place",
            body: [
                "Define custom properties for the background, text, and accent color on the root element.",
                "Use those variables in the rest of the stylesheet. The example page uses the same hex values as this guide."
            ]
        }
    },
    {
        slug: "check-result",
        title: "Compare with the example",
        summary: "Check your page against the finished example.",
        body: [
            "Open the example website and look for a heading, a short paragraph, and a list of classes.",
            "Check that the background is warm and the text is dark, with one blue accent.",
            "This step is a placeholder. The real checklist will replace it later."
        ],
        advanced: {
            title: "Compare colors in the browser",
            body: [
                "Right-click the example page and inspect the body. The computed background should be #f6f4ef and the text #1c1917.",
                "The accent used for links is #1d4ed8. Those values live in both stylesheets so the guide and the example stay matched."
            ]
        }
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