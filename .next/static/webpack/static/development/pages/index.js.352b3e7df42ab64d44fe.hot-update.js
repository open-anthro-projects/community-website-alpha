webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Takuma.jpeg */ "./static/Takuma.jpeg");
/* harmony import */ var _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/yokai.png */ "./static/yokai.png");
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_yokai_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/kaoru.png */ "./static/kaoru.png");
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_kaoru_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/icon.png */ "./static/icon.png");
/* harmony import */ var _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_icon_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_come_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/come.jpg */ "./static/come.jpg");
/* harmony import */ var _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_come_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_ninja_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/ninja.png */ "./static/ninja.png");
/* harmony import */ var _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_ninja_png__WEBPACK_IMPORTED_MODULE_14__);
















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.handleNavButtonOnClick = _this.handleNavButtonOnClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "handleNavButtonOnClick",
    value: function handleNavButtonOnClick() {
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "right",
        className: "jsx-938463074" + " " + "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "contentheader"
      }, "Recent Artwork"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: {
          pathname: '/artwork',
          query: {
            id: '2'
          }
        },
        as: "/artwork/2/Yokai-Takuma"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-938463074"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-938463074" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "contentheader"
      }, "Recent Offers"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-938463074" + " " + "contentheader"
      }, "Recent Offers"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-938463074" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-938463074" + " " + "cptestImage"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3900323627"
      }, ".navposition{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGcUIsQUFHdUIsa0JBQ3BCIiwiZmlsZSI6IkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IFRha3VtYSBmcm9tIFwiLi4vc3RhdGljL1Rha3VtYS5qcGVnXCJcclxuaW1wb3J0IFlva2FpIGZyb20gXCIuLi9zdGF0aWMveW9rYWkucG5nXCJcclxuaW1wb3J0IEthb3J1IGZyb20gXCIuLi9zdGF0aWMva2FvcnUucG5nXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL3N0YXRpYy9pY29uLnBuZ1wiXHJcbmltcG9ydCBDb21lIGZyb20gXCIuLi9zdGF0aWMvY29tZS5qcGdcIlxyXG5pbXBvcnQgTmluamEgZnJvbSBcIi4uL3N0YXRpYy9uaW5qYS5wbmdcIlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrID0gdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7bWVudVZpc2libGU6IGZhbHNlfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHttZW51VmlzaWJsZTogIXRoaXMuc3RhdGUubWVudVZpc2libGV9KVxyXG5cdH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICA8PlxyXG4gICAgPGRpdiBpZD1cInJpZ2h0XCIgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudGhlYWRlclwiPlJlY2VudCBBcnR3b3JrPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3BcIj5cclxuICAgICAgICBcclxuICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2FydHdvcmsnLCBxdWVyeTogeyBpZDogJzInIH0gfX0gYXM9Jy9hcnR3b3JrLzIvWW9rYWktVGFrdW1hJz5cclxuICAgICAgICA8YT48ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtJY29ufT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IE9mZmVyczwvc3Bhbj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17SWNvbn0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcblxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudGhlYWRlclwiPlJlY2VudCBPZmZlcnM8L3NwYW4+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtZb2thaX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1Rha3VtYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0ljb259PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17TmluamF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIC5uYXZwb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgPHN0eWxlIGpzeD57YFxyXG4gIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNfX25leHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmbGV4OjE7XHJcbiAgfVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlOyAgLyphbGxvd3MgYm90aCBjb2x1bW5zIHRvIHNwYW4gdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBicm93c2VyIHdpbmRvdyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLypwbGFjZXMgdGhlIGxlZnQgYW5kIHJpZ2h0IGhlYWRlcnMgYWJvdmUgdGhlIGJvdHRvbSBjb250ZW50Ki9cclxuICB3aWR0aDogMTAwJTtcclxuICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XHJcbiAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gIGZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLnBhZ2VDb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5jcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleDogMTtcclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIC5jcHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jcHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGVudHtcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7IFxyXG4gIH1cclxufVxyXG5cclxuLmNwdGVzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OjE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNwdGVzdDpob3ZlciAuaW1nX19kZXNjcmlwdGlvbiB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY3B0ZXN0SW1hZ2Uge1xyXG4gIG1heC13aWR0aDpjYWxjKDEwMHZ3IC0gMzJweCk7IFxyXG4gIG1heC1oZWlnaHQ6MjUwcHg7XHJcbn1cclxuXHJcbi5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1heC1oZWlnaHQ6MjUwcHg7XHJcbiAgbWluLWhlaWdodDoyNTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIC8qIHRyYW5zaXRpb24gZWZmZWN0LiBub3QgbmVjZXNzYXJ5ICovXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMsIHZpc2liaWxpdHkgLjJzO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1LDYsNiwwKSxyZ2JhKDUsNiw2LC45NSkpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDUsNiw2LC41KTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5fc2Fuc19ib2xkLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICBmbGV4LXNocmluazogMDsgXHJcbn1cclxuXHJcbiNsZWZ0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwOyAgLyptYWtlcyBzdXJlIHRoYXQgY29udGVudCBpcyBub3QgY3V0IG9mZiBpbiBhIHNtYWxsZXIgYnJvd3NlciB3aW5kb3cqL1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMSUpO1xyXG59XHJcblxyXG4udG9wLWxlZnQge1xyXG4gICAgZmxleC1zaGluazogMDtcclxufVxyXG5cclxuLnRvcC1yaWdodCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gICAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudGhlYWRlcntcclxuICBtYXgtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuXHJcblxyXG4gIC5hcHAtZHJhd2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEyMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2aXNpYmlsaXR5O1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyNTZweDtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuLndyYXBwZXIyIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcbi5pbWFnZXRlc3R7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcblxyXG4uaXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudUNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG5gfTwvc3R5bGU+XHJcbjwvPlxyXG4pfX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG4iXX0= */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2001490592"
      }, "html.jsx-938463074{height:100%;font-family:Roboto,Arial,sans-serif;width:100%;}#__next.jsx-938463074{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;-webkit-flex:1;-ms-flex:1;flex:1;}.content.jsx-938463074{padding-top:16px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.pageContent.jsx-938463074{overflow-y:auto;height:100%;}.cp.jsx-938463074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1;-ms-flex:1;flex:1;}@media (min-width:1025px){.cp.jsx-938463074{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.content.jsx-938463074{overflow-x:auto;}}@media (max-width:1024px){.cp.jsx-938463074{overflow-x:auto;}.content.jsx-938463074{overflow-y:visible;}}.cptest.jsx-938463074{margin-right:16px;margin-left:16px;margin-top:16px;margin-bottom:16px;position:relative;min-width:auto;}.cptest.jsx-938463074:hover .img__description.jsx-938463074{visibility:visible;opacity:1;}.cptestImage.jsx-938463074{max-width:calc(100vw - 32px);max-height:250px;}.img__description.jsx-938463074{position:absolute;top:0;bottom:0;left:0;right:0;color:#fff;visibility:hidden;opacity:0;margin:0px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;max-height:250px;min-height:250px;vertical-align:bottom;-webkit-transition:opacity .2s,visibility .2s;transition:opacity .2s,visibility .2s;}.info.jsx-938463074{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title.jsx-938463074{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title.jsx-938463074{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right.jsx-938463074{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left.jsx-938463074{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left.jsx-938463074{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right.jsx-938463074{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul.jsx-938463074{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom.jsx-938463074{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader.jsx-938463074{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer.jsx-938463074{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container.jsx-938463074{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2.jsx-938463074{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.imagetest.jsx-938463074{height:100%;}.item.jsx-938463074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper.jsx-938463074{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content.jsx-938463074{margin-top:70px;}.menu.jsx-938463074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2.jsx-938463074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.menuContainer.jsx-938463074{min-height:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:240px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGYyxBQUdpQixBQU1ELEFBWUcsQUFpQkUsQUFLTCxBQVFJLEFBS0MsQUFNQSxBQUlHLEFBS0gsQUFTQyxBQUtTLEFBS1YsQUFvQkEsQUFTbUQsQUFPdkQsQUFPQSxBQUlFLEFBT0QsQUFJQyxBQUtNLEFBS1IsQUFNRSxBQVdDLEFBU0csQUFhVixBQVNDLEFBS0UsQUFXSyxBQVFBLEFBSUgsQUFVQSxBQVVHLFdBcFBILENBTnlCLEFBa016QixBQVNqQixFQWhGbUIsQ0FpREosQ0F6SUMsQUFrQmQsQUFNQSxBQXNHaUIsQUEwREgsQUFRaEIsQUF3QmdCLENBek9GLENBa0RJLEFBbUJWLEFBb0JhLEFBMEVYLENBdEhSLEFBY1UsS0FXRCxBQThGRSxFQVRELEVBeklWLEFBd0xvQixBQWdDQSxDQXpPUCxBQTJEZixBQUlrQixFQTBDcUQsRUFuQzlELEFBeUVTLEFBcUJQLENBVE8sQ0F6R0EsRUF1Q0MsR0FsQlQsQUE4Rk0sTUFyR2hCLEFBMElpQixBQWdDQSxFQTVQRixBQTBGRixBQW9GRixDQVpRLEVBN0ZFLEFBdUVyQixDQTRDb0IsRUE1RUMsQ0FtRWMsQ0E5Q25DLEFBSWlCLEFBV08sQ0FqR0csRUE5Q3pCLEFBMEZrQixPQXdFUCxFQXNCNkIsQ0F0RXJCLEFBbUJOLENBaEVLLENBb0ZBLEVBN0N3QyxDQXRFdkMsQUF3S00sQUF1QkQsQUFVQSxHQXBKZCxDQXdFRyxHQTdCc0IsSUFqSVgsQ0E0TEksQ0FyR2xCLEFBK0RaLENBckZpQixBQTZDQyxJQWlEbEIsS0EyQytCLENBbEhWLEVBOEJFLEVBeUJILENBbElJLEFBcUR4QixDQTZDeUMsR0E5R3pCLEtBaUloQixBQTJEa0MsTUE3Q2xDLENBOUllLENBcU5XLEFBZ0NBLENBaEkxQixHQW9GdUIsQ0FqQ04sS0F2S1AsQ0FxR0UsS0FwR0EsRUF1S1osSUFsRUEsQUFxRjBCLENBNUpqQixBQThFVCxDQTNHVyxPQUNELENBMk5PLEFBVUEsSUFqTWYsRUFpR0YsT0F1Rm1CLEFBVUcsS0FuSlAsTUFyRGYsSUErTGEsQ0FyTkEsRUErTkEsQ0F0T1gsS0E2TnFCLEdBck5NLEFBK05OLENBbENHLEtBeEJRLEFBb0NsQyxBQWdDZ0IsVUFuQkEsRUFvQmQsQ0FWYyxJQWxDZSxJQTdMZCxDQStLQSxBQXVDZixHQVVBLFVBaERGLENBL0tTLFFBNkxjLEVBcEhFLHVCQXhFVSxpQ0FDUixZQWtLb0IsdUJBMEJoQyxVQXBIRyxDQXFIbEIsT0ExQnVDLFNBMUZyQixpQkFDTSxpQkF6RVYsS0EyRTJCLCtEQXdGZixHQWxLUixnQkFDaEIsRUEwRUYsQ0F3RkEiLCJmaWxlIjoiRjpcXGNvbW11bml0eS13ZWJzaXRlLWFscGhhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgVGFrdW1hIGZyb20gXCIuLi9zdGF0aWMvVGFrdW1hLmpwZWdcIlxyXG5pbXBvcnQgWW9rYWkgZnJvbSBcIi4uL3N0YXRpYy95b2thaS5wbmdcIlxyXG5pbXBvcnQgS2FvcnUgZnJvbSBcIi4uL3N0YXRpYy9rYW9ydS5wbmdcIlxyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vc3RhdGljL2ljb24ucG5nXCJcclxuaW1wb3J0IENvbWUgZnJvbSBcIi4uL3N0YXRpYy9jb21lLmpwZ1wiXHJcbmltcG9ydCBOaW5qYSBmcm9tIFwiLi4vc3RhdGljL25pbmphLnBuZ1wiXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2sgPSB0aGlzLmhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHttZW51VmlzaWJsZTogZmFsc2V9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTmF2QnV0dG9uT25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe21lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5tZW51VmlzaWJsZX0pXHJcblx0fVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gIDw+XHJcbiAgICA8ZGl2IGlkPVwicmlnaHRcIiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IEFydHdvcms8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYXJ0d29yaycsIHF1ZXJ5OiB7IGlkOiAnMicgfSB9fSBhcz0nL2FydHdvcmsvMi9Zb2thaS1UYWt1bWEnPlxyXG4gICAgICAgIDxhPjxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0ljb259PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRoZWFkZXJcIj5SZWNlbnQgT2ZmZXJzPC9zcGFuPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17TmluamF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtJY29ufT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1Rha3VtYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtZb2thaX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IE9mZmVyczwvc3Bhbj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17SWNvbn0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLm5hdnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICA8c3R5bGUganN4PntgXHJcbiAgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZsZXg6MTtcclxuICB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6MTZweDtcclxuICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAucGFnZUNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmNwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4OiAxO1xyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmNwe1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNwe1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTsgXHJcbiAgfVxyXG59XHJcblxyXG4uY3B0ZXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY3B0ZXN0OmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jcHRlc3RJbWFnZSB7XHJcbiAgbWF4LXdpZHRoOmNhbGMoMTAwdncgLSAzMnB4KTsgXHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxufVxyXG5cclxuLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWFyZ2luOjBweDtcclxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxuICBtaW4taGVpZ2h0OjI1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgLyogdHJhbnNpdGlvbiBlZmZlY3QuIG5vdCBuZWNlc3NhcnkgKi9cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDUsNiw2LDApLHJnYmEoNSw2LDYsLjk1KSk7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuX3NhbnNfYm9sZCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNSw2LDYsLjUpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4jcmlnaHQge1xyXG4gIGZsZXgtc2hyaW5rOiAwOyBcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7ICAvKm1ha2VzIHN1cmUgdGhhdCBjb250ZW50IGlzIG5vdCBjdXQgb2ZmIGluIGEgc21hbGxlciBicm93c2VyIHdpbmRvdyovXHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgd2lkdGg6MjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDExJSk7XHJcbn1cclxuXHJcbi50b3AtbGVmdCB7XHJcbiAgICBmbGV4LXNoaW5rOiAwO1xyXG59XHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50aGVhZGVye1xyXG4gIG1heC1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46YXV0bztcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLmFwcC1kcmF3ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHZpc2liaWxpdHk7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgcGFkZGluZzogMTIwcHggMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG4ud3JhcHBlcjIge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLmltYWdldGVzdHtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51Q29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbmB9PC9zdHlsZT5cclxuPC8+XHJcbil9fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbiJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.352b3e7df42ab64d44fe.hot-update.js.map