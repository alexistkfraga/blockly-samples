webpackHotUpdate("main",{

/***/ "./src/tutorial_step.js":
/*!******************************!*\
  !*** ./src/tutorial_step.js ***!
  \******************************/
/*! exports provided: TutorialStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TutorialStep\", function() { return TutorialStep; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar TutorialStep = /*#__PURE__*/function () {\n  function TutorialStep() {\n    _classCallCheck(this, TutorialStep);\n\n    this.text = 'Instructions for this step';\n    this.goal = null;\n    this.modalId = 'tutorialModal';\n  }\n\n  _createClass(TutorialStep, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].show(this.modalId);\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"modal-1-title\\\">\\n            Press any key to begin!\\n          </h2>\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"welcomeCloseButton\\\" data-micromodal-close></button>\\n        </header>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return TutorialStep;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWxfc3RlcC5qcz8wODg1Il0sIm5hbWVzIjpbIlR1dG9yaWFsU3RlcCIsInRleHQiLCJnb2FsIiwibW9kYWxJZCIsImNyZWF0ZURvbSIsIk1pY3JvTW9kYWwiLCJzaG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFiO0FBQ0UsMEJBQWM7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksNEJBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUVBLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0Q7O0FBTkg7QUFBQTtBQUFBLDJCQVFTO0FBQ0wsV0FBS0MsU0FBTDtBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtILE9BQXJCO0FBQ0Q7QUFHRDtBQUNGO0FBQ0E7O0FBaEJBO0FBQUE7QUFBQSxnQ0FpQmM7QUFDVkksY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtMLE9BQTdCLEVBQXNDTSxTQUF0QztBQVdEO0FBN0JIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvdHV0b3JpYWxfc3RlcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWxTdGVwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZXh0ID0gJ0luc3RydWN0aW9ucyBmb3IgdGhpcyBzdGVwJztcbiAgICB0aGlzLmdvYWwgPSBudWxsO1xuXG4gICAgdGhpcy5tb2RhbElkID0gJ3R1dG9yaWFsTW9kYWwnO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZG9tIGZvciB0aGUgbW9kYWwuXG4gICAqL1xuICBjcmVhdGVEb20oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tb2RhbElkKS5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fb3ZlcmxheVwiIHRhYmluZGV4PVwiLTFcIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cIm1vZGFsLTEtdGl0bGVcIj5cbiAgICAgICAgICAgIFByZXNzIGFueSBrZXkgdG8gYmVnaW4hXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIG1vZGFsXCIgaWQ9XCJ3ZWxjb21lQ2xvc2VCdXR0b25cIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial_step.js\n");

/***/ })

})