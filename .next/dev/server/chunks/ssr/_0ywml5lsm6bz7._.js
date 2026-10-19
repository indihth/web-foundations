(()=>{"use strict";module.exports = [
"[project]/components/workshop/step-rail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepRail",
    ()=>StepRail,
    "StepRailShell",
    ()=>StepRailShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/steps.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$workshop$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/workshop-urls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workshop$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workshop/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MOBILE_MAX = 720;
function useIsMobile() {
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
        const update = ()=>setMobile(query.matches);
        update();
        query.addEventListener("change", update);
        return ()=>query.removeEventListener("change", update);
    }, []);
    return mobile;
}
function StepRail({ currentSlug }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [minimized, setMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = useIsMobile();
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steps"].length;
    const currentIndex = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steps"].findIndex((s)=>s.slug === currentSlug);
    const currentNumber = currentIndex >= 0 ? currentIndex + 1 : 1;
    const [lastSlug, setLastSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentSlug);
    if (currentSlug !== lastSlug) {
        setLastSlug(currentSlug);
        if (open) {
            setOpen(false);
        }
    }
    const openMobileSheet = ()=>{
        if (isMobile) {
            setMinimized(false);
        }
        setOpen((value)=>!value);
    };
    const showMinimized = minimized && !isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "mobile-steps-button",
                onClick: openMobileSheet,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Step ",
                            currentNumber,
                            " of ",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workshop/step-rail.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: open ? "Close steps" : "View all steps"
                    }, void 0, false, {
                        fileName: "[project]/components/workshop/step-rail.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workshop/step-rail.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `step-rail ${open ? "open" : ""} ${showMinimized ? "minimized" : ""}`,
                children: showMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "restore-rail",
                    onClick: ()=>setMinimized(false),
                    "aria-label": "Show workshop steps",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workshop$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {}, void 0, false, {
                            fileName: "[project]/components/workshop/step-rail.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Show steps"
                        }, void 0, false, {
                            fileName: "[project]/components/workshop/step-rail.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/workshop/step-rail.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rail-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Workshop steps"
                                }, void 0, false, {
                                    fileName: "[project]/components/workshop/step-rail.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/guide",
                                            children: "View all"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        !isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setMinimized(true),
                                            children: "Minimise"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workshop/step-rail.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/workshop/step-rail.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rail-list",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$steps$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steps"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/guide/${step.slug}`,
                                    className: currentSlug === step.slug ? "current" : undefined,
                                    onClick: ()=>setOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        step.advanced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 98,
                                            columnNumber: 36
                                        }, this) : null
                                    ]
                                }, step.slug, true, {
                                    fileName: "[project]/components/workshop/step-rail.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/workshop/step-rail.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rail-help",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Need a reference?"
                                }, void 0, false, {
                                    fileName: "[project]/components/workshop/step-rail.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$workshop$2d$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXAMPLE_PATH"],
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [
                                        "Open Meme-ify ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workshop$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalIcon"], {}, void 0, false, {
                                            fileName: "[project]/components/workshop/step-rail.tsx",
                                            lineNumber: 105,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workshop/step-rail.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/workshop/step-rail.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/workshop/step-rail.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/workshop/step-rail.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workshop/step-rail.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function StepRailShell({ currentSlug, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "lesson-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepRail, {
                currentSlug: currentSlug
            }, void 0, false, {
                fileName: "[project]/components/workshop/step-rail.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/workshop/step-rail.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/steps.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
];})()

//# sourceMappingURL=_0ywml5lsm6bz7._.js.map