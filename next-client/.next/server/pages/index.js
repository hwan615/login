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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction HomePage() {\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket ? socket.onopen = ()=>{\n            socket.send(JSON.stringify({\n                event: \"connect\",\n                data: {\n                    name: \"websocket connected to next.js\",\n                    value: \"hello\"\n                }\n            }));\n            socket.onmessage = (data)=>{\n                console.log(JSON.parse(data.data).type);\n                if (JSON.parse(data.data).type === \"notification\") {\n                    setUser(JSON.parse(data.data).msg);\n                }\n            };\n        } : console.log(\"websocket connection not found\");\n    }, [\n        socket\n    ]);\n    const makeSocketConnection = ()=>{\n        setSocket(new WebSocket(\"ws://localhost:8080\"));\n    };\n    const sendMessage = ()=>{\n        console.log(\"hello\");\n        socket.send(JSON.stringify({\n            event: \"event\",\n            data: \"send message using button\"\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: socket ? \"connected to websocket\" : \"connect websocket to start chat service\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            socket ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: sendMessage,\n                children: \"send message\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 72\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: user\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: makeSocketConnection,\n                children: \"connect websocket\"\n            }, void 0, false, {\n                fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cha/p/login/next-client/pages/index.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLFdBQVc7SUFFakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBO0lBRWhDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RFLFNBQ0FBLE9BQU9JLE1BQU0sR0FBRyxJQUFNO1lBQ3BCSixPQUFPSyxJQUFJLENBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFDYkMsT0FBTztnQkFDUEMsTUFBTTtvQkFBRUMsTUFBTTtvQkFBa0NDLE9BQU87Z0JBQU87WUFDaEU7WUFHRlgsT0FBT1ksU0FBUyxHQUFHLENBQUNILE9BQVM7Z0JBQzNCSSxRQUFRQyxHQUFHLENBQUNSLEtBQUtTLEtBQUssQ0FBQ04sS0FBS0EsSUFBSSxFQUFFTyxJQUFJO2dCQUN0QyxJQUFJVixLQUFLUyxLQUFLLENBQUNOLEtBQUtBLElBQUksRUFBRU8sSUFBSSxLQUFLLGdCQUFnQjtvQkFDakRiLFFBQVFHLEtBQUtTLEtBQUssQ0FBQ04sS0FBS0EsSUFBSSxFQUFFUSxHQUFHO2dCQUNuQyxDQUFDO1lBQ0g7UUFDRixJQUNBSixRQUFRQyxHQUFHLENBQUMsaUNBQWlDO0lBQy9DLEdBQUc7UUFBQ2Q7S0FBTztJQUVYLE1BQU1rQix1QkFBdUIsSUFBTTtRQUNqQ2pCLFVBQVUsSUFBSWtCLFVBQVU7SUFDMUI7SUFFQSxNQUFNQyxjQUFjLElBQU07UUFDeEJQLFFBQVFDLEdBQUcsQ0FBQztRQUNaZCxPQUFPSyxJQUFJLENBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtJQUVKO0lBRUEscUJBQ0UsOERBQUNZOzswQkFDQyw4REFBQ0M7MEJBQUl0QixTQUFTLDJCQUEyQix5Q0FBeUM7Ozs7OztZQUNoRkEsdUJBQVMsOERBQUN1QjtnQkFBT0MsU0FBU0o7MEJBQWE7Ozs7O3FDQUF3Qiw4REFBQ0M7Ozs7b0JBQVU7MEJBQzVFLDhEQUFDQzswQkFBSXBCOzs7Ozs7MEJBQ0wsOERBQUNxQjtnQkFBT0MsU0FBU047MEJBQXNCOzs7Ozs7Ozs7Ozs7QUFHN0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY2xpZW50Ly4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQgPyBcbiAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgc29ja2V0LnNlbmQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBldmVudDogJ2Nvbm5lY3QnLFxuICAgICAgICAgIGRhdGE6IHsgbmFtZTogJ3dlYnNvY2tldCBjb25uZWN0ZWQgdG8gbmV4dC5qcycsIHZhbHVlOiAnaGVsbG8nfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YS5kYXRhKS50eXBlKTtcbiAgICAgICAgaWYgKEpTT04ucGFyc2UoZGF0YS5kYXRhKS50eXBlID09PSBcIm5vdGlmaWNhdGlvblwiKSB7XG4gICAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKGRhdGEuZGF0YSkubXNnKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gOlxuICAgIGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQgY29ubmVjdGlvbiBub3QgZm91bmQnKVxuICB9LCBbc29ja2V0XSlcblxuICBjb25zdCBtYWtlU29ja2V0Q29ubmVjdGlvbiA9ICgpID0+IHtcbiAgICBzZXRTb2NrZXQobmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODBcIikpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgc29ja2V0LnNlbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGV2ZW50OiAnZXZlbnQnLFxuICAgICAgICBkYXRhOiAnc2VuZCBtZXNzYWdlIHVzaW5nIGJ1dHRvbidcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntzb2NrZXQgPyAnY29ubmVjdGVkIHRvIHdlYnNvY2tldCcgOiAnY29ubmVjdCB3ZWJzb2NrZXQgdG8gc3RhcnQgY2hhdCBzZXJ2aWNlJ308L2gxPlxuICAgICAgeyBzb2NrZXQgPyA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfT5zZW5kIG1lc3NhZ2U8L2J1dHRvbj4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgIDxoMT57dXNlcn08L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttYWtlU29ja2V0Q29ubmVjdGlvbn0+Y29ubmVjdCB3ZWJzb2NrZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWVQYWdlIiwic29ja2V0Iiwic2V0U29ja2V0IiwidXNlciIsInNldFVzZXIiLCJvbm9wZW4iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwiZGF0YSIsIm5hbWUiLCJ2YWx1ZSIsIm9ubWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsInR5cGUiLCJtc2ciLCJtYWtlU29ja2V0Q29ubmVjdGlvbiIsIldlYlNvY2tldCIsInNlbmRNZXNzYWdlIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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