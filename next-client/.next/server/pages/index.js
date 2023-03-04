"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction HomePage() {\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(socket);\n        socket ? socket.onopen = ()=>{\n            socket.send(JSON.stringify({\n                event: \"connect\",\n                data: \"websocket connected to next.js\"\n            }));\n            socket.onmessage = (data)=>{\n                console.log(data.data);\n            };\n        } : console.log(\"websocket connection not found\");\n    }, [\n        socket\n    ]);\n    const makeSocketConnection = ()=>{\n        setSocket(new WebSocket(\"ws://localhost:8080\"));\n    };\n    const sendMessage = ()=>{\n        console.log(\"hello\");\n        socket.send(JSON.stringify({\n            event: \"event\",\n            data: \"send message using button\"\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: socket ? \"connected to websocket\" : \"connect websocket to start chat service\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            socket ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: sendMessage,\n                children: \"send message\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 72\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: makeSocketConnection,\n                children: \"connect websocket\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLFdBQVc7SUFFakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQTtJQUVwQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkSSxRQUFRQyxHQUFHLENBQUNIO1FBQ1pBLFNBQ0FBLE9BQU9JLE1BQU0sR0FBRyxJQUFNO1lBQ3BCSixPQUFPSyxJQUFJLENBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFDYkMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1lBR0ZULE9BQU9VLFNBQVMsR0FBRyxDQUFDRCxPQUFTO2dCQUMzQlAsUUFBUUMsR0FBRyxDQUFDTSxLQUFLQSxJQUFJO1lBQ3ZCO1FBQ0YsSUFDQVAsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQztJQUMvQyxHQUFHO1FBQUNIO0tBQU87SUFFWCxNQUFNVyx1QkFBdUIsSUFBTTtRQUNqQ1YsVUFBVSxJQUFJVyxVQUFVO0lBQzFCO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCWCxRQUFRQyxHQUFHLENBQUM7UUFDWkgsT0FBT0ssSUFBSSxDQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFDYkMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7SUFFSjtJQUVBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNDOzBCQUFJZixTQUFTLDJCQUEyQix5Q0FBeUM7Ozs7OztZQUNoRkEsdUJBQVMsOERBQUNnQjtnQkFBT0MsU0FBU0o7MEJBQWE7Ozs7O3FDQUF3Qiw4REFBQ0M7Ozs7b0JBQVU7MEJBQzVFLDhEQUFDRTtnQkFBT0MsU0FBU047MEJBQXNCOzs7Ozs7Ozs7Ozs7QUFHN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY2xpZW50Ly4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXQpXG4gICAgc29ja2V0ID8gXG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIHNvY2tldC5zZW5kKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZXZlbnQ6ICdjb25uZWN0JyxcbiAgICAgICAgICBkYXRhOiAnd2Vic29ja2V0IGNvbm5lY3RlZCB0byBuZXh0LmpzJyxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xuICAgICAgfTtcbiAgICB9IDpcbiAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNvbm5lY3Rpb24gbm90IGZvdW5kJylcbiAgfSwgW3NvY2tldF0pXG5cbiAgY29uc3QgbWFrZVNvY2tldENvbm5lY3Rpb24gPSAoKSA9PiB7XG4gICAgc2V0U29ja2V0KG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwXCIpKTtcbiAgfTtcblxuICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAgIHNvY2tldC5zZW5kKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBldmVudDogJ2V2ZW50JyxcbiAgICAgICAgZGF0YTogJ3NlbmQgbWVzc2FnZSB1c2luZyBidXR0b24nXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57c29ja2V0ID8gJ2Nvbm5lY3RlZCB0byB3ZWJzb2NrZXQnIDogJ2Nvbm5lY3Qgd2Vic29ja2V0IHRvIHN0YXJ0IGNoYXQgc2VydmljZSd9PC9oMT5cbiAgICAgIHsgc29ja2V0ID8gPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+c2VuZCBtZXNzYWdlPC9idXR0b24+IDogPGRpdj48L2Rpdj59XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e21ha2VTb2NrZXRDb25uZWN0aW9ufT5jb25uZWN0IHdlYnNvY2tldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZVBhZ2UiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJjb25zb2xlIiwibG9nIiwib25vcGVuIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJldmVudCIsImRhdGEiLCJvbm1lc3NhZ2UiLCJtYWtlU29ja2V0Q29ubmVjdGlvbiIsIldlYlNvY2tldCIsInNlbmRNZXNzYWdlIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();