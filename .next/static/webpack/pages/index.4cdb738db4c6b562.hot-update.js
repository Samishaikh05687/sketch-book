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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/constants */ \"./src/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/slice/menuslice */ \"./src/slice/menuslice.js\");\n/* harmony import */ var _src_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/socket */ \"./src/socket.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const drawHistory = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);\n    const historyPointer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const shouldDraw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const { activeMenuItem, actionMenuItem } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.menu);\n    const { color, size } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.toolbox[activeMenuItem]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.DOWNLOAD) {\n            const URL = canvas.toDataURL();\n            const anchor = document.createElement(\"a\");\n            anchor.href = URL;\n            anchor.download = \"sketch.jpg\";\n            anchor.click();\n        } else if (actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO || actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) {\n            if (historyPointer.current > 0 && actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.UNDO) historyPointer.current -= 1;\n            if (historyPointer.current < drawHistory.current.length - 1 && actionMenuItem === _src_constants__WEBPACK_IMPORTED_MODULE_1__.MENU_ITEMS.REDO) historyPointer.current += 1;\n            const imageData = drawHistory.current[historyPointer.current];\n            context.putImageData(imageData, 0, 0);\n        }\n        dispatch((0,_src_slice_menuslice__WEBPACK_IMPORTED_MODULE_4__.actionItemClick)(null));\n    }, [\n        actionMenuItem,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        const changeConfig = ()=>{\n            context.strokeStyle = color;\n            context.lineWidth = size;\n        };\n        changeConfig();\n    }, [\n        color,\n        size\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const context = canvas.getContext(\"2d\");\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        const beginPath = (x, y)=>{\n            context.beginPath();\n            context.moveTo(x, y);\n        };\n        const drawLine = (x, y)=>{\n            context.lineTo(x, y);\n            context.stroke();\n        };\n        const handleMouseDown = (e)=>{\n            shouldDraw.current = true;\n            beginPath(e.clientX, e.clientY);\n            _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.emit(\"beginPath\", {\n                x: e.clientX,\n                y: e.clientY\n            });\n        };\n        const handleMouseMove = (e)=>{\n            if (!shouldDraw.current) return;\n            drawLine(e.clientX, e.clientY);\n        };\n        const handleMouseUp = (e)=>{\n            shouldDraw.current = false;\n            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);\n            drawHistory.current.push(imageData);\n            historyPointer.current = drawHistory.current.length - 1;\n        };\n        canvas.addEventListener(\"mousedown\", handleMouseDown);\n        canvas.addEventListener(\"mousemove\", handleMouseMove);\n        canvas.addEventListener(\"mouseup\", handleMouseUp);\n        _src_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"connected\", ()=>{\n            console.log(\"client connected\");\n        });\n        return ()=>{\n            canvas.removeEventListener(\"mousedown\", handleMouseDown);\n            canvas.removeEventListener(\"mousemove\", handleMouseMove);\n            canvas.removeEventListener(\"mouseup\", handleMouseUp);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"D:\\\\Data\\\\projects\\\\sketchbook\\\\src\\\\components\\\\board\\\\index.js\",\n        lineNumber: 105,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Board, \"V/VrQ4zWrHKj0v+HzysgxQRJbBo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L19OX0UvLi9zcmMvY29tcG9uZW50cy9ib2FyZC9pbmRleC5qcz8xYzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1FTlVfSVRFTVMgfSBmcm9tIFwiQC9zcmMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgbWVudUl0ZW1DbGljayxhY3Rpb25JdGVtQ2xpY2sgfSBmcm9tICdAL3NyYy9zbGljZS9tZW51c2xpY2UnXHJcblxyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwiQC9zcmMvc29ja2V0XCI7XHJcblxyXG5jb25zdCBCb2FyZCA9ICgpID0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGRyYXdIaXN0b3J5ID0gdXNlUmVmKFtdKVxyXG4gICAgY29uc3QgaGlzdG9yeVBvaW50ZXIgPSB1c2VSZWYoMClcclxuICAgIGNvbnN0IHNob3VsZERyYXcgPSB1c2VSZWYoZmFsc2UpXHJcbiAgICBjb25zdCB7YWN0aXZlTWVudUl0ZW0sYWN0aW9uTWVudUl0ZW19ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tZW51KVxyXG4gICAgY29uc3Qge2NvbG9yLCBzaXplfT0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b29sYm94W2FjdGl2ZU1lbnVJdGVtXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICBpZihhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5ET1dOTE9BRCl7XHJcbiAgICAgICAgICAgIGNvbnN0IFVSTCA9IGNhbnZhcy50b0RhdGFVUkwoKVxyXG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSBVUkxcclxuICAgICAgICAgICAgYW5jaG9yLmRvd25sb2FkID0gXCJza2V0Y2guanBnXCJcclxuICAgICAgICAgICAgYW5jaG9yLmNsaWNrKClcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5VTkRPIHx8IGFjdGlvbk1lbnVJdGVtID09PSBNRU5VX0lURU1TLlJFRE8pe1xyXG4gICAgICAgICAgICBpZihoaXN0b3J5UG9pbnRlci5jdXJyZW50ID4gMCAmJiBhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5VTkRPKSBoaXN0b3J5UG9pbnRlci5jdXJyZW50IC09IDFcclxuICAgICAgICAgICAgaWYoaGlzdG9yeVBvaW50ZXIuY3VycmVudCA8IGRyYXdIaXN0b3J5LmN1cnJlbnQubGVuZ3RoIC0gMSAmJiBhY3Rpb25NZW51SXRlbSA9PT0gTUVOVV9JVEVNUy5SRURPKSBoaXN0b3J5UG9pbnRlci5jdXJyZW50ICs9IDFcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gZHJhd0hpc3RvcnkuY3VycmVudFtoaXN0b3J5UG9pbnRlci5jdXJyZW50XVxyXG4gICAgICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbkl0ZW1DbGljayhudWxsKSlcclxuICAgIH0sW2FjdGlvbk1lbnVJdGVtLGRpc3BhdGNoXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGFuZ2VDb25maWcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUNvbmZpZygpXHJcbiAgICB9LFtjb2xvcixzaXplXSlcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgaWYoIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgICAgICBjb25zdCAgYmVnaW5QYXRoID0oeCx5KSA9PiB7XHJcbiAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJhd0xpbmUgPSAoeCx5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHgseSlcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgc2hvdWxkRHJhdy5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgYmVnaW5QYXRoKGUuY2xpZW50WCwgZS5jbGllbnRZKVxyXG4gICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2JlZ2luUGF0aCcsIHt4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKCFzaG91bGREcmF3LmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgICAgICAgIGRyYXdMaW5lKGUuY2xpZW50WCwgZS5jbGllbnRZKVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgc2hvdWxkRHJhdy5jdXJyZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodClcclxuICAgICAgICAgICAgIGRyYXdIaXN0b3J5LmN1cnJlbnQucHVzaChpbWFnZURhdGEpXHJcbiAgICAgICAgICAgICBoaXN0b3J5UG9pbnRlci5jdXJyZW50ID0gZHJhd0hpc3RvcnkuY3VycmVudC5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlTW91c2VEb3duKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsaGFuZGxlTW91c2VNb3ZlKVxyXG4gICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGhhbmRsZU1vdXNlVXApXHJcblxyXG4gICAgICAgc29ja2V0Lm9uKFwiY29ubmVjdGVkXCIsKCkgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcImNsaWVudCBjb25uZWN0ZWRcIik7XHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsaGFuZGxlTW91c2VEb3duKVxyXG4gICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLGhhbmRsZU1vdXNlTW92ZSlcclxuICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsaGFuZGxlTW91c2VVcClcclxuICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7Il0sIm5hbWVzIjpbIk1FTlVfSVRFTVMiLCJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwibWVudUl0ZW1DbGljayIsImFjdGlvbkl0ZW1DbGljayIsInNvY2tldCIsIkJvYXJkIiwiZGlzcGF0Y2giLCJjYW52YXNSZWYiLCJkcmF3SGlzdG9yeSIsImhpc3RvcnlQb2ludGVyIiwic2hvdWxkRHJhdyIsImFjdGl2ZU1lbnVJdGVtIiwiYWN0aW9uTWVudUl0ZW0iLCJzdGF0ZSIsIm1lbnUiLCJjb2xvciIsInNpemUiLCJ0b29sYm94IiwiY3VycmVudCIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiRE9XTkxPQUQiLCJVUkwiLCJ0b0RhdGFVUkwiLCJhbmNob3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsIlVORE8iLCJSRURPIiwibGVuZ3RoIiwiaW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwiY2hhbmdlQ29uZmlnIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwiZHJhd0xpbmUiLCJsaW5lVG8iLCJzdHJva2UiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJlbWl0IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImdldEltYWdlRGF0YSIsInB1c2giLCJhZGRFdmVudExpc3RlbmVyIiwib24iLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/board/index.js\n"));

/***/ })

});