webpackHotUpdate("static/development/pages/Button/ButtonPage.js",{

/***/ "./components/SideNav/SideNavMenu/SideNavMenu.tsx":
/*!********************************************************!*\
  !*** ./components/SideNav/SideNavMenu/SideNavMenu.tsx ***!
  \********************************************************/
/*! exports provided: SideNavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavMenu", function() { return SideNavMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design */ "../big-design/dist/big-design.es.js");
/* harmony import */ var _bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/big-design-icons */ "../big-design-icons/dist/big-design-icons.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/SideNav/SideNavMenu/styled.tsx");

var _jsxFileName = "/Users/chancellor.clark/big-design/packages/docs/components/SideNav/SideNavMenu/SideNavMenu.tsx";





var SideNavMenu = function SideNavMenu(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isExpanded = _React$useState2[0],
      setIsExpanded = _React$useState2[1];

  var handleClick = function handleClick() {
    return setIsExpanded(!isExpanded);
  };

  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', function () {
    return setIsExpanded(false);
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["StyledMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "subtle",
    onClick: handleClick,
    iconOnly: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_bigcommerce_big_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuIcon"], {
      color: "secondary70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["StyledNavigation"], {
    isExpanded: isExpanded,
    borderBottom: "box",
    borderTop: "box",
    shadow: "floating",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.children)));
};

/***/ })

})
//# sourceMappingURL=ButtonPage.js.959ebcc0bebe7d4ecce3.hot-update.js.map