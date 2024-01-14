"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/board/index.js":
/*!***************************************!*\
  !*** ./src/components/board/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/constants */ \"./src/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Board = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const shouldDraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const { activeMenuItem, actionMenuItem } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.menu);\n    const { color, size } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.toolbox[activeMenuItem]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD) {\n            const URL = canvas.toDataURL();\n            const anchor = document.createElement(\"a\");\n            anchor.href = URL;\n            anchor.download = \"sketch.jpg\";\n            anchor.click();\n            console.log(URL);\n        }\n        console.log(\"actionMenuItem\", actionMenuItem);\n    }, [\n        actionMenuItem\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        const changeConfig = ()=>{\n            context.strokeStyle = color;\n            context.lineWidth = size;\n        };\n        changeConfig();\n    }, [\n        color,\n        size\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        const beginPath = (x, y)=>{\n            context.beginPath();\n            context.moveTo(x, y);\n        };\n        const drawLine = (x, y)=>{\n            context.lineTo(x, y);\n            context.stroke();\n        };\n        const handleMouseDown = (e)=>{\n            shouldDraw.current = true;\n            beginPath(e.clientX, e.clientY);\n        };\n        const handleMouseMove = (e)=>{\n            if (!shouldDraw.current) return;\n            drawLine(e.clientX, e.clientY);\n        };\n        const handleMouseUp = (e)=>{\n            shouldDraw.current = false;\n        };\n        canvas.addEventListener(\"mousedown\", handleMouseDown);\n        canvas.addEventListener(\"mousemove\", handleMouseMove);\n        canvas.addEventListener(\"mouseup\", handleMouseUp);\n        return ()=>{\n            canvas.removeEventListener(\"mousedown\", handleMouseDown);\n            canvas.removeEventListener(\"mousemove\", handleMouseMove);\n            canvas.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\components\\\\board\\\\index.js\",\n        lineNumber: 86,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Board, \"LOzz9WngpPZ9OL2JcswqluINRTE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFHekI7R0FuRk1EOztRQUdzQ0Ysb0RBQVdBO1FBQzlCQSxvREFBV0E7OztLQUo5QkU7QUFxRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvaW5kZXguanM/MWM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNRU5VX0lURU1TIH0gZnJvbSBcIkAvc3JjL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcblxyXG5jb25zdCBCb2FyZCA9ICgpID0+e1xyXG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBzaG91bGREcmF3ID0gdXNlUmVmKGZhbHNlKVxyXG4gICAgY29uc3Qge2FjdGl2ZU1lbnVJdGVtLGFjdGlvbk1lbnVJdGVtfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWVudSlcclxuICAgIGNvbnN0IHtjb2xvciwgc2l6ZX09IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9vbGJveFthY3RpdmVNZW51SXRlbV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighY2FudmFzUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgaWYoYWN0aW9uTWVudUl0ZW0gPT09IE1FTlVfSVRFTVMuRE9XTkxPQUQpe1xyXG4gICAgICAgICAgICBjb25zdCBVUkwgPSBjYW52YXMudG9EYXRhVVJMKClcclxuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgICAgICAgIGFuY2hvci5ocmVmID0gVVJMXHJcbiAgICAgICAgICAgIGFuY2hvci5kb3dubG9hZCA9IFwic2tldGNoLmpwZ1wiXHJcbiAgICAgICAgICAgIGFuY2hvci5jbGljaygpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChVUkwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb25NZW51SXRlbVwiLGFjdGlvbk1lbnVJdGVtKTtcclxuICAgIH0sW2FjdGlvbk1lbnVJdGVtXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFuZ2VDb25maWcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUNvbmZpZygpXHJcbiAgICB9LFtjb2xvcixzaXplXSlcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgICAgICBjb25zdCAgYmVnaW5QYXRoID0oeCx5KSA9PiB7XHJcbiAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJhd0xpbmUgPSAoeCx5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHgseSlcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgc2hvdWxkRHJhdy5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgYmVnaW5QYXRoKGUuY2xpZW50WCwgZS5jbGllbnRZKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICBpZighc2hvdWxkRHJhdy5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICAgICAgICBkcmF3TGluZShlLmNsaWVudFgsIGUuY2xpZW50WSlcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGUpID0+IHtcclxuICAgICAgICAgICAgIHNob3VsZERyYXcuY3VycmVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlTW91c2VEb3duKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGhhbmRsZU1vdXNlVXApXHJcblxyXG4gICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxoYW5kbGVNb3VzZURvd24pXHJcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxoYW5kbGVNb3VzZVVwKVxyXG4gICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibmFtZXMiOlsiTUVOVV9JVEVNUyIsInVzZUVmZmVjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJCb2FyZCIsImNhbnZhc1JlZiIsInNob3VsZERyYXciLCJhY3RpdmVNZW51SXRlbSIsImFjdGlvbk1lbnVJdGVtIiwic3RhdGUiLCJtZW51IiwiY29sb3IiLCJzaXplIiwidG9vbGJveCIsImN1cnJlbnQiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsIkRPV05MT0FEIiwiVVJMIiwidG9EYXRhVVJMIiwiYW5jaG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlQ29uZmlnIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwiZHJhd0xpbmUiLCJsaW5lVG8iLCJzdHJva2UiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/board/index.js\n"));

/***/ })

});