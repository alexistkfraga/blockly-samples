webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Tutorial = /*#__PURE__*/function () {\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    });\n  }\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.addCallbacks();\n      this.curStepIndex = 0;\n      this.curStep = this.steps[this.curStepIndex];\n      this.curStep.show();\n    }\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      }\n    }\n  }, {\n    key: \"addStep\",\n    value: function addStep() {\n      this.steps.push(new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"]('Instructions'));\n    }\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {//nextStepFn = this.nextStep;\n      // document.getElementById('TutorialModalBtn').addEventListener('click',\n      //   () => {\n      //     // console.log('next step fn');\n      //     // //nextStepFn();\n      //     // this.nextStep();\n      //   });\n    }\n    /**\n     * Creates the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwiY3JlYXRlRG9tIiwiTWljcm9Nb2RhbCIsInNob3ciLCJhZGRDYWxsYmFja3MiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwibGVuZ3RoIiwicHVzaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBYjtBQUNFLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLGVBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLGFBQUksSUFBSUMsMkRBQUosQ0FBaUJELElBQWpCLENBQUo7QUFBQSxLQUE1QixDQUFiO0FBRUQ7O0FBTEg7QUFBQTtBQUFBLDJCQU9TO0FBQ0wsV0FBS0UsU0FBTDtBQUVBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtSLE9BQXJCO0FBQStCLFdBQUtTLFlBQUw7QUFDL0IsV0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLVixLQUFMLENBQVcsS0FBS1MsWUFBaEIsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUgsSUFBYjtBQUNEO0FBZEg7QUFBQTtBQUFBLCtCQWdCYTtBQUNULFdBQUtFLFlBQUw7O0FBQ0EsVUFBSSxLQUFLQSxZQUFMLEdBQW9CLEtBQUtULEtBQUwsQ0FBV1csTUFBbkMsRUFBMkM7QUFDekMsYUFBS0QsT0FBTCxHQUFlLEtBQUtWLEtBQUwsQ0FBVyxLQUFLUyxZQUFoQixDQUFmO0FBQ0EsYUFBS0MsT0FBTCxDQUFhSCxJQUFiO0FBQ0Q7QUFFRjtBQXZCSDtBQUFBO0FBQUEsOEJBd0JZO0FBQ1IsV0FBS1AsS0FBTCxDQUFXWSxJQUFYLENBQWdCLElBQUlSLDJEQUFKLENBQWlCLGNBQWpCLENBQWhCO0FBQ0Q7QUExQkg7QUFBQTtBQUFBLG1DQTRCaUIsQ0FDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7QUFDRjtBQUNBOztBQXZDQTtBQUFBO0FBQUEsZ0NBd0NjO0FBQ1ZTLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLZixPQUE3QixFQUFzQ2dCLFNBQXRDO0FBY0Q7QUF2REg7O0FBQUE7QUFBQTtBQTBEQWpCLFFBQVEsQ0FBQ0csVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBUdXRvcmlhbFN0ZXAgfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kYWxJZCA9ICd0dXRvcmlhbE1vZGFsJztcbiAgICB0aGlzLnN0ZXBzID0gVHV0b3JpYWwuU1RFUFNfVEVYVC5tYXAodGV4dCA9PiBuZXcgVHV0b3JpYWxTdGVwKHRleHQpKTtcblxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuXG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7IHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXggPSAwO1xuICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCsrO1xuICAgIGlmICh0aGlzLmN1clN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgfVxuXG4gIH1cbiAgYWRkU3RlcCgpIHtcbiAgICB0aGlzLnN0ZXBzLnB1c2gobmV3IFR1dG9yaWFsU3RlcCgnSW5zdHJ1Y3Rpb25zJykpO1xuICB9XG5cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIC8vbmV4dFN0ZXBGbiA9IHRoaXMubmV4dFN0ZXA7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1R1dG9yaWFsTW9kYWxCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgLy8gICAoKSA9PiB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAgZm4nKTtcbiAgICAvLyAgICAgLy8gLy9uZXh0U3RlcEZuKCk7XG4gICAgLy8gICAgIC8vIHRoaXMubmV4dFN0ZXAoKTtcbiAgICAvLyAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBkb20gZm9yIHRoZSBtb2RhbC5cbiAgICovXG4gIGNyZWF0ZURvbSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1vZGFsSWQpLmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtMS10aXRsZVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgbW9kYWxcIiBpZD1cInR1dG9yaWFsQ2xvc2VCdG5cIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCIgaWQ9XCJtb2RhbC0xLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cInR1dG9yaWFsTW9kYWxUZXh0XCI+PC9oMj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwibW9kYWxfX2Zvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvZGFsX19idG4gbW9kYWxfX2J0bi1wcmltYXJ5XCIgYXJpYS1sYWJlbD1cIk5leHQgc3RlcFwiIGlkPVwiVHV0b3JpYWxNb2RhbEJ0blwiPk5leHQgc3RlcDwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cbn1cblxuVHV0b3JpYWwuU1RFUFNfVEVYVCA9IFtcbiAgJ0hpdCBlbnRlciB0byBtb3ZlIGZvY3VzIHRvIHRoZSB3b3Jrc3BhY2UnLFxuICAnRW5hYmxlIGtleWJvYXJkIG5hdiBieSBwcmVzc2luZyBDbWQrU2hpZnQrSycsXG4gICdQcmVzcyBYIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBzdGFjayBvZiBibG9ja3MnLFxuICAnUHJlc3MgWSB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3QgYmxvY2snLFxuICAnUHJlc3MgZW50ZXIgdG8gbWFyayB0aGUgZmlyc3QgYmxvY2snLFxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})