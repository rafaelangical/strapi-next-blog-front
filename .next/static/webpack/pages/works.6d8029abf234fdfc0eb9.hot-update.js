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
  }, (_workspage$hero = workspage.hero) === null || _workspage$hero === void 0 ? void 0 : _workspage$hero.title), __jsx("div", {
    "class": "uk-child-width-1-4@m uk-flex",
    "uk-parallax": "bgy: -200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, works.length ? works.map(function (item) {
    return __jsx("div", {
      "class": "uk-card uk-card-default uk-grid-collapse uk-child-width-1@s uk-margin",
      "uk-grid": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, __jsx("div", {
      "class": "uk-card-media-left uk-cover-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image: item.image[0],
      "uk-cover": true,
      style: {
        maxWidth: 400
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 23
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx("div", {
      "class": "uk-card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 23
      }
    }, __jsx("h3", {
      "class": "uk-card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, item.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, item.description))));
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Sem trabalhos realizados")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MuanMiXSwibmFtZXMiOlsiV29ya3MiLCJ3b3JrcyIsIndvcmtzcGFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW8iLCJoZXJvIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW1hZ2UiLCJtYXhXaWR0aCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLFNBQ0UsbUVBQ0UsTUFBQyx1REFBRDtBQUFLLE9BQUcsRUFBRUMsU0FBUyxDQUFDRyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBS0gsU0FBUyxDQUFDSSxJQUFmLG9EQUFLLGdCQUFnQkMsS0FBckIsQ0FERixFQUVFO0FBQUssYUFBTSw4QkFBWDtBQUEwQyxtQkFBWSxXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLEtBQUssQ0FBQ08sTUFBTixHQUNDUCxLQUFLLENBQUNRLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbEIsV0FDRTtBQUNFLGVBQU0sdUVBRFI7QUFFRSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFBSyxlQUFNLHVDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFEO0FBQ0UsV0FBSyxFQUFFQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLENBRFQ7QUFFRSxzQkFGRjtBQUdFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FKRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQU0sY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFNLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQkYsSUFBSSxDQUFDSCxLQUFoQyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRyxJQUFJLENBQUNHLFdBQVQsQ0FGRixDQURGLENBWEYsQ0FERjtBQW9CRCxHQXJCRCxDQURELEdBd0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBekJKLENBRkYsQ0FERixDQUZGLENBREY7QUFzQ0QsQ0F4Q0Q7O0tBQU1iLEs7O0FBdURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3Jrcy42ZDgwMjlhYmYyMzRmZGZjMGViOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBXb3JrcyA9ICh7IHdvcmtzLCB3b3Jrc3BhZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh3b3Jrcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gc2VvPXt3b3Jrc3BhZ2Uuc2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57d29ya3NwYWdlLmhlcm8/LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWNoaWxkLXdpZHRoLTEtNEBtIHVrLWZsZXhcIiB1ay1wYXJhbGxheD1cImJneTogLTIwMFwiPlxuICAgICAgICAgICAge3dvcmtzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgd29ya3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1ay1jYXJkIHVrLWNhcmQtZGVmYXVsdCB1ay1ncmlkLWNvbGxhcHNlIHVrLWNoaWxkLXdpZHRoLTFAcyB1ay1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICB1ay1ncmlkXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVrLWNvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogNDAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidWstY2FyZC10aXRsZVwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPlNlbSB0cmFiYWxob3MgcmVhbGl6YWRvczwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW3dvcmtzLCB3b3Jrc3BhZ2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3dvcmtzXCIpLFxuICAgIGZldGNoQVBJKFwiL3dvcmtzcGFnZVwiKSxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB3b3Jrcywgd29ya3NwYWdlIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya3M7XG4iXSwic291cmNlUm9vdCI6IiJ9