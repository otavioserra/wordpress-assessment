/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({
  type,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    type: type,
    className: "wa-button",
    children: children
  });
}

/***/ }),

/***/ "./src/components/Div.js":
/*!*******************************!*\
  !*** ./src/components/Div.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Div({
  children,
  type
}) {
  let div;
  switch (type) {
    case 'cols-2':
      div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "wa-grid-cols-2",
        children: children
      });
      break;
    default:
      div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "wa-default-container",
        children: children
      });
  }
  return div;
}

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Form({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
    className: "wa-form-container",
    children: children
  });
}

/***/ }),

/***/ "./src/components/FormHeader.js":
/*!**************************************!*\
  !*** ./src/components/FormHeader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormHeader)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function FormHeader({
  children,
  title
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "wa-header-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      className: "wa-header-title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "wa-header-description",
      children: children
    })]
  });
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Input({
  type,
  name,
  placeholder,
  required
}) {
  let input;
  switch (type) {
    case 'textarea':
      input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
        name: name,
        id: name,
        className: "wa-input",
        placeholder: placeholder,
        required: required
      });
      break;
    default:
      input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: type,
        name: name,
        id: name,
        className: "wa-input",
        placeholder: placeholder,
        required: required
      });
  }
  return input;
}

/***/ }),

/***/ "./src/components/Label.js":
/*!*********************************!*\
  !*** ./src/components/Label.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Label({
  htmlFor,
  children,
  className = ''
}) {
  const classNameAux = 'wa-label' + (className ? ' ' + className : '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
    htmlFor: htmlFor,
    className: classNameAux,
    children: children
  });
}

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Section({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
    className: "wa-section-container",
    children: children
  });
}

/***/ }),

/***/ "./src/components/Selector.js":
/*!************************************!*\
  !*** ./src/components/Selector.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/components/Label.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Selector({
  fields,
  inputLanguage,
  inputFramework,
  label,
  labelLanguage,
  labelFramework,
  required
}) {
  const [languageSelected, setLanguageSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Initialize with labelLanguage
  const [frameworks, setFrameworks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // Add frameworks state
  const [frameworkSelected, setFrameworkSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Initialize framework

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    setLanguageSelected(selectedLanguage);
    let newFrameworks = [];
    fields.forEach(option => {
      if (option.language === selectedLanguage) {
        newFrameworks = option.frameworks;
        return false;
      }
      return true;
    });
    setFrameworks(newFrameworks); // Update the frameworks state
  }
  function handleFrameworkChange(event) {
    const selectedFramework = event.target.value;
    setFrameworkSelected(selectedFramework);
  }
  const classNameLanguage = 'wa-select wa-select-margin' + (languageSelected === labelLanguage || !languageSelected ? ' wp-select-no-option' : '');
  const classNameFramework = 'wa-select' + (frameworkSelected === labelFramework || !frameworkSelected ? ' wp-select-no-option' : '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
      name: inputLanguage,
      id: inputLanguage,
      className: classNameLanguage,
      required: required,
      onChange: handleLanguageChange,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
        value: labelLanguage,
        children: labelLanguage
      }, labelLanguage), fields.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
        value: option.language,
        children: option.language
      }, option.language))]
    }), frameworks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
        name: inputFramework,
        id: inputFramework,
        className: classNameFramework,
        required: required,
        onChange: handleFrameworkChange,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: labelFramework,
          children: labelFramework
        }, labelFramework), frameworks.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: option,
          children: option
        }, option))]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
      htmlFor: inputLanguage,
      className: languageSelected ? 'wa-label-selected' : '',
      children: label
    })]
  });
}

/***/ }),

/***/ "./src/components/Widget.js":
/*!**********************************!*\
  !*** ./src/components/Widget.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/components/Label.js");
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Div */ "./src/components/Div.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./src/components/Section.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");
/* harmony import */ var _FormHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormHeader */ "./src/components/FormHeader.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Selector */ "./src/components/Selector.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









const listFields = [{
  language: 'PHP',
  frameworks: ['Laravel', 'Symfony']
}, {
  language: 'Java',
  frameworks: ['Struts', 'Grails']
}, {
  language: 'JavaScript',
  frameworks: ['React', 'Angular', 'Node']
}, {
  language: ' C#',
  frameworks: ['ASP.NET', 'Blazor']
}];
function Widget() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Interview Development Position",
      children: "Fill all the form and click on submit button to send the form and start to enter in a job assessment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "cols-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
            type: "text",
            name: "first_name",
            placeholder: " ",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
            htmlFor: "first_name",
            children: "First Name"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
            type: "text",
            name: "last_name",
            placeholder: " ",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
            htmlFor: "last_name",
            children: "Last Name"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "cols-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
            type: "tel",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            name: "phone",
            placeholder: " ",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
            htmlFor: "phone",
            children: "Phone Number"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
            type: "date",
            name: "birthdate",
            value: "",
            placeholder: null,
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
            htmlFor: "birthdate",
            children: "Birthdate"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
          type: "email",
          name: "email",
          placeholder: " ",
          required: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "email",
          children: "Email Address"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
          type: "text",
          name: "country",
          placeholder: " ",
          required: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "country",
          children: "Country"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_0__["default"], {
          type: "textarea",
          name: "bioOrResume",
          placeholder: " ",
          required: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "country",
          children: "Short Bio or Resume"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Div__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
          fields: listFields,
          inputLanguage: "language",
          inputFramework: "framework",
          label: "Language & Framework",
          labelLanguage: "Select Language...",
          labelFramework: "Select Framework...",
          required: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "submit",
        children: "Submit"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  componentRootId: 'wa-otavio-serra-component-root',
  componentClassId: 'wa-otavio-serra-block'
};

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Widget */ "./src/components/Widget.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Widget__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Save({
  attributes,
  clientId
}) {
  const blockRootId = `${_config__WEBPACK_IMPORTED_MODULE_1__.config.componentRootId}-${clientId}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    className: _config__WEBPACK_IMPORTED_MODULE_1__.config.componentClassId,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: blockRootId
    })
  });
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"assessment/otavio-serra-plugin","version":"0.1.0","title":"Otavio Serra Plugin Form","category":"widgets","icon":"id","description":"WordPress Assessment block form to get data from the frontend.","example":{},"supports":{"html":false},"textdomain":"otavio-serra-plugin","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":["file:./build/index.css","file:./build/style-index.css"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block.json */ "./block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

// Enqueue script conditionally (only on front end)
if (typeof waOtavioSerraPlugin !== 'undefined' && !waOtavioSerraPlugin.isAdmin) {
  wp.element.useEffect(() => {
    const publicBlockScript = document.createElement('script');
    publicBlockScript.src = `${waOtavioSerraPlugin.pluginUrl}/build/public-block.js`;
    publicBlockScript.type = 'text/javascript';
    document.body.appendChild(publicBlockScript);
    return () => {
      document.body.removeChild(publicBlockScript);
    };
  }, []);
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map