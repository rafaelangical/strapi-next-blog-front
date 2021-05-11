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
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
var _this = undefined,
    _jsxFileName = "/home/rafael/strapi-next-blog/frontend/pages/works.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Works = function Works(_ref) {
  var _workspage$hero;

  var works = _ref.works,
      workspage = _ref.workspage;
  console.log(works);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    seo: workspage.seo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "uk-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "uk-container uk-container-large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, (_workspage$hero = workspage.hero) === null || _workspage$hero === void 0 ? void 0 : _workspage$hero.title), works.length ? works.map(function (item) {
    return __jsx("div", {
      "class": "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin",
      "uk-grid": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("div", {
      "class": "uk-card-media-left uk-cover-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, __jsx("img", {
      src: item.image[0].url,
      alt: "",
      "uk-cover": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), __jsx("canvas", {
      width: "600",
      height: "400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 19
      }
    }, __jsx("div", {
      "class": "uk-card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx("h3", {
      "class": "uk-card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 23
      }
    }, item.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 23
      }
    }, item.description))));
  }) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MuanMiXSwibmFtZXMiOlsiV29ya3MiLCJ3b3JrcyIsIndvcmtzcGFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW8iLCJoZXJvIiwidGl0bGUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxTQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFBSyxPQUFHLEVBQUVDLFNBQVMsQ0FBQ0csR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUtILFNBQVMsQ0FBQ0ksSUFBZixvREFBSyxnQkFBZ0JDLEtBQXJCLENBREYsRUFFR04sS0FBSyxDQUFDTyxNQUFOLEdBQ0NQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQixXQUNFO0FBQ0UsZUFBTSx5RUFEUjtBQUVFLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFLLGVBQU0sdUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLEdBQXhCO0FBQTZCLFNBQUcsRUFBQyxFQUFqQztBQUFvQyxzQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBUSxXQUFLLEVBQUMsS0FBZDtBQUFvQixZQUFNLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBSkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFNLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBTSxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJGLElBQUksQ0FBQ0gsS0FBaEMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUcsSUFBSSxDQUFDRyxXQUFULENBRkYsQ0FERixDQVJGLENBREY7QUFpQkQsR0FsQkQsQ0FERCxHQXFCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXZCSixDQURGLENBRkYsQ0FERjtBQWlDRCxDQW5DRDs7S0FBTWIsSzs7QUFrRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmtzLjQ5MzQzYTk3NTc3ZDM2YWI2Yzc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiO1xuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5jb25zdCBXb3JrcyA9ICh7IHdvcmtzLCB3b3Jrc3BhZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh3b3Jrcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZW8gc2VvPXt3b3Jrc3BhZ2Uuc2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57d29ya3NwYWdlLmhlcm8/LnRpdGxlfTwvaDE+XG4gICAgICAgICAge3dvcmtzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIHdvcmtzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidWstY2FyZCB1ay1jYXJkLWRlZmF1bHQgdWstZ3JpZC1jb2xsYXBzZSB1ay1jaGlsZC13aWR0aC0xLTJAcyB1ay1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgdWstZ3JpZFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1jYXJkLW1lZGlhLWxlZnQgdWstY292ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlWzBdLnVybH0gYWx0PVwiXCIgdWstY292ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQwMFwiPjwvY2FudmFzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidWstY2FyZC10aXRsZVwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+U2VtIHRyYWJhbGhvcyByZWFsaXphZG9zPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW3dvcmtzLCB3b3Jrc3BhZ2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL3dvcmtzXCIpLFxuICAgIGZldGNoQVBJKFwiL3dvcmtzcGFnZVwiKSxcbiAgXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB3b3Jrcywgd29ya3NwYWdlIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya3M7XG4iXSwic291cmNlUm9vdCI6IiJ9