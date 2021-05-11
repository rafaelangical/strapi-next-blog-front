webpackHotUpdate_N_E("pages/works",{

/***/ "./pages/works.js":
/*!************************!*\
  !*** ./pages/works.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
var _this = undefined,
    _jsxFileName = "/home/rafael/strapi-next-blog/frontend/pages/works.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Works = function Works(_ref) {
  var _workspage$hero;

  var works = _ref.works,
      workspage = _ref.workspage;
  console.log(works);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    seo: workspage.seo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "uk-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "uk-container uk-container-large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, (_workspage$hero = workspage.hero) === null || _workspage$hero === void 0 ? void 0 : _workspage$hero.title), works.length ? works.map(function (item) {
    return __jsx("div", {
      "class": "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid-collapse uk-child-width-1-3@s uk-margin",
      "uk-grid": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("div", {
      "class": "uk-card-media-left uk-cover-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }, __jsx("img", {
      src: item.image[0].url,
      alt: "",
      "uk-cover": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }), __jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image: item.image[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }), __jsx("canvas", {
      width: "400",
      height: "400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 19
      }
    }, __jsx("div", {
      "class": "uk-card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, __jsx("h3", {
      "class": "uk-card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 23
      }
    }, item.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 23
      }
    }, item.description))));
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Sem trabalhos realizados"))));
};

_c = Works;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Works);

var _c;

$RefreshReg$(_c, "Works");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MuanMiXSwibmFtZXMiOlsiV29ya3MiLCJ3b3JrcyIsIndvcmtzcGFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW8iLCJoZXJvIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxTQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFBSyxPQUFHLEVBQUVDLFNBQVMsQ0FBQ0csR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUtILFNBQVMsQ0FBQ0ksSUFBZixvREFBSyxnQkFBZ0JDLEtBQXJCLENBREYsRUFFR04sS0FBSyxDQUFDTyxNQUFOLEdBQ0NQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQixXQUNFO0FBQ0UsZUFBTSx5SEFEUjtBQUVFLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFLLGVBQU0sdUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLEdBQXhCO0FBQTZCLFNBQUcsRUFBQyxFQUFqQztBQUFvQyxzQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyx5REFBRDtBQUFPLFdBQUssRUFBRUYsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQVEsV0FBSyxFQUFDLEtBQWQ7QUFBb0IsWUFBTSxFQUFDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQUpGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBTSxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQU0sZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCRCxJQUFJLENBQUNILEtBQWhDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlHLElBQUksQ0FBQ0csV0FBVCxDQUZGLENBREYsQ0FURixDQURGO0FBa0JELEdBbkJELENBREQsR0FzQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0F4QkosQ0FERixDQUZGLENBREY7QUFrQ0QsQ0FwQ0Q7O0tBQU1iLEs7O0FBbURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3Jrcy5kOTM2MjhjMDI1MDE5ZjU1YzEzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBXb3JrcyA9ICh7IHdvcmtzLCB3b3Jrc3BhZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh3b3Jrcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gc2VvPXt3b3Jrc3BhZ2Uuc2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57d29ya3NwYWdlLmhlcm8/LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3dvcmtzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIHdvcmtzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidWstY2FyZCB1ay1jYXJkLWRlZmF1bHQgdWstZ3JpZC1jb2xsYXBzZSB1ay1jaGlsZC13aWR0aC0xLTJAcyB1ay1tYXJnaW4gdWstZ3JpZC1jb2xsYXBzZSB1ay1jaGlsZC13aWR0aC0xLTNAcyB1ay1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgdWstZ3JpZFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlWzBdLnVybH0gYWx0PVwiXCIgdWstY292ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGltYWdlPXtpdGVtLmltYWdlWzBdfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ1ay1jYXJkLXRpdGxlXCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5TZW0gdHJhYmFsaG9zIHJlYWxpemFkb3M8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbd29ya3MsIHdvcmtzcGFnZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvd29ya3NcIiksXG4gICAgZmV0Y2hBUEkoXCIvd29ya3NwYWdlXCIpLFxuICBdKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHdvcmtzLCB3b3Jrc3BhZ2UgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcbiJdLCJzb3VyY2VSb290IjoiIn0=