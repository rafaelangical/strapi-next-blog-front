webpackHotUpdate_N_E("pages/works",{

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
var _this = undefined,
    _jsxFileName = "/home/rafael/strapi-next-blog/frontend/components/image.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Image = function Image(_ref) {
  var image = _ref.image,
      style = _ref.style;
  var imageUrl = Object(_lib_media__WEBPACK_IMPORTED_MODULE_1__["getStrapiMedia"])(image);
  return __jsx("img", {
    src: imageUrl,
    alt: image.alternativeText || image.name,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

_c = Image;
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c;

$RefreshReg$(_c, "Image");

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

/***/ }),

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
      "class": "uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin",
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
      image: item.image[0].url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }), __jsx("canvas", {
      width: "600",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MuanMiXSwibmFtZXMiOlsiSW1hZ2UiLCJpbWFnZSIsInN0eWxlIiwiaW1hZ2VVcmwiLCJnZXRTdHJhcGlNZWRpYSIsImFsdGVybmF0aXZlVGV4dCIsIm5hbWUiLCJXb3JrcyIsIndvcmtzIiwid29ya3NwYWdlIiwiY29uc29sZSIsImxvZyIsInNlbyIsImhlcm8iLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNsQyxNQUFNQyxRQUFRLEdBQUdDLGlFQUFjLENBQUNILEtBQUQsQ0FBL0I7QUFFQSxTQUNFO0FBQ0UsT0FBRyxFQUFFRSxRQURQO0FBRUUsT0FBRyxFQUFFRixLQUFLLENBQUNJLGVBQU4sSUFBeUJKLEtBQUssQ0FBQ0ssSUFGdEM7QUFHRSxTQUFLLEVBQUVKLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBT0QsQ0FWRDs7S0FBTUYsSztBQVlTQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxTQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFBSyxPQUFHLEVBQUVDLFNBQVMsQ0FBQ0csR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUtILFNBQVMsQ0FBQ0ksSUFBZixvREFBSyxnQkFBZ0JDLEtBQXJCLENBREYsRUFFR04sS0FBSyxDQUFDTyxNQUFOLEdBQ0NQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQixXQUNFO0FBQ0UsZUFBTSx5RUFEUjtBQUVFLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFLLGVBQU0sdUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNoQixLQUFMLENBQVcsQ0FBWCxFQUFjaUIsR0FBeEI7QUFBNkIsU0FBRyxFQUFDLEVBQWpDO0FBQW9DLHNCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHlEQUFEO0FBQU8sV0FBSyxFQUFFRCxJQUFJLENBQUNoQixLQUFMLENBQVcsQ0FBWCxFQUFjaUIsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBUSxXQUFLLEVBQUMsS0FBZDtBQUFvQixZQUFNLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBSkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFNLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBTSxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkJELElBQUksQ0FBQ0gsS0FBaEMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUcsSUFBSSxDQUFDRSxXQUFULENBRkYsQ0FERixDQVRGLENBREY7QUFrQkQsR0FuQkQsQ0FERCxHQXNCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXhCSixDQURGLENBRkYsQ0FERjtBQWtDRCxDQXBDRDs7S0FBTVosSzs7QUFtRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dvcmtzLjA0MTE4YTA3OTA5YWI3MzUwYmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIjtcblxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGltYWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICBhbHQ9e2ltYWdlLmFsdGVybmF0aXZlVGV4dCB8fCBpbWFnZS5uYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIjtcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgV29ya3MgPSAoeyB3b3Jrcywgd29ya3NwYWdlIH0pID0+IHtcbiAgY29uc29sZS5sb2cod29ya3MpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VvIHNlbz17d29ya3NwYWdlLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgICA8aDE+e3dvcmtzcGFnZS5oZXJvPy50aXRsZX08L2gxPlxuICAgICAgICAgIHt3b3Jrcy5sZW5ndGggPyAoXG4gICAgICAgICAgICB3b3Jrcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLWNhcmQgdWstY2FyZC1kZWZhdWx0IHVrLWdyaWQtY29sbGFwc2UgdWstY2hpbGQtd2lkdGgtMS0yQHMgdWstbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIHVrLWdyaWRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstY2FyZC1tZWRpYS1sZWZ0IHVrLWNvdmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVswXS51cmx9IGFsdD1cIlwiIHVrLWNvdmVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17aXRlbS5pbWFnZVswXS51cmx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0MDBcIj48L2NhbnZhcz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInVrLWNhcmQtdGl0bGVcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPlNlbSB0cmFiYWxob3MgcmVhbGl6YWRvczwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4gIGNvbnN0IFt3b3Jrcywgd29ya3NwYWdlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi93b3Jrc1wiKSxcbiAgICBmZXRjaEFQSShcIi93b3Jrc3BhZ2VcIiksXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgd29ya3MsIHdvcmtzcGFnZSB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==