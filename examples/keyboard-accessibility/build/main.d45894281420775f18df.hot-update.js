webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial\n   * @constructor\n   */\n  function Tutorial() {\n    _classCallCheck(this, Tutorial);\n\n    /**\n    * The id of the modal.\n    * @type {string}\n    */\n    this.modalId = 'tutorialModal';\n    this.steps = Tutorial.STEPS_TEXT.map(function (text) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](text);\n    }, this.nextStep);\n    this.curStepIndex = 0;\n    this.curStep = this.steps[this.curStepIndex];\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        this.curStep.show();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].close(this.modalId);\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this = this;\n\n      document.getElementById('TutorialModalBtn').addEventListener('click', function () {\n        _this.nextStep();\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\" aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\" id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"tutorialModalText\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"odal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\" id=\\\"TutorialModalBtn\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\";\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Hit enter to move focus to the workspace', 'Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIm1vZGFsSWQiLCJzdGVwcyIsIlNURVBTX1RFWFQiLCJtYXAiLCJ0ZXh0IiwiVHV0b3JpYWxTdGVwIiwibmV4dFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiY3JlYXRlRG9tIiwiYWRkQ2FsbGJhY2tzIiwiTWljcm9Nb2RhbCIsInNob3ciLCJsZW5ndGgiLCJkb25lIiwiY2xvc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNhOzs7Ozs7OztBQUViO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsUUFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0Usc0JBQWM7QUFBQTs7QUFDWjtBQUNKO0FBQ0E7QUFDQTtBQUNJLFNBQUtDLE9BQUwsR0FBZSxlQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixRQUFRLENBQUNHLFVBQVQsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFJLElBQUlDLDJEQUFKLENBQWlCRCxJQUFqQixDQUFKO0FBQUEsS0FBNUIsRUFBd0QsS0FBS0UsUUFBN0QsQ0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1AsS0FBTCxDQUFXLEtBQUtNLFlBQWhCLENBQWY7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBbEJBO0FBQUE7QUFBQSwyQkFtQlM7QUFDTCxXQUFLRSxTQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNBQyx3REFBVSxDQUFDQyxJQUFYLENBQWdCLEtBQUtaLE9BQXJCO0FBQ0EsV0FBS1EsT0FBTCxDQUFhSSxJQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBNUJBO0FBQUE7QUFBQSwrQkE2QmE7QUFDVCxXQUFLTCxZQUFMOztBQUNBLFVBQUksS0FBS0EsWUFBTCxHQUFvQixLQUFLTixLQUFMLENBQVdZLE1BQW5DLEVBQTJDO0FBQ3pDLGFBQUtMLE9BQUwsR0FBZSxLQUFLUCxLQUFMLENBQVcsS0FBS00sWUFBaEIsQ0FBZjtBQUNBLGFBQUtDLE9BQUwsQ0FBYUksSUFBYjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtFLElBQUw7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBOztBQXpDQTtBQUFBO0FBQUEsMkJBMENTO0FBQ0xILHdEQUFVLENBQUNJLEtBQVgsQ0FBaUIsS0FBS2YsT0FBdEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7QUFoREE7QUFBQTtBQUFBLG1DQWlEaUI7QUFBQTs7QUFDYmdCLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNENDLGdCQUE1QyxDQUE2RCxPQUE3RCxFQUNFLFlBQU07QUFDSixhQUFJLENBQUNaLFFBQUw7QUFDRCxPQUhIO0FBSUQ7QUFFRDtBQUNGO0FBQ0E7O0FBMURBO0FBQUE7QUFBQSxnQ0EyRGM7QUFDVlUsY0FBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtqQixPQUE3QixFQUFzQ21CLFNBQXRDO0FBY0Q7QUExRUg7O0FBQUE7QUFBQTtBQTZFQXBCLFFBQVEsQ0FBQ0csVUFBVCxHQUFzQixDQUNwQiwwQ0FEb0IsRUFFcEIsNkNBRm9CLEVBR3BCLGtEQUhvQixFQUlwQix3Q0FKb0IsRUFLcEIscUNBTG9CLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3R1dG9yaWFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgTXVsdGktc3RlcCB0dXRvcmlhbCB1c2luZyBtb2RhbHMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtUdXRvcmlhbFN0ZXB9IGZyb20gJy4vdHV0b3JpYWxfc3RlcCc7XG5pbXBvcnQgTWljcm9Nb2RhbCBmcm9tICdtaWNyb21vZGFsJztcblxuLyoqXG4gKiBBIG11bHRpLXN0ZXAgdHV0b3JpYWwgZm9yIHRoZSBhY2Nlc3NpYmxlIG11c2ljIGdhbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XG4gIC8qKlxuICAgKiBDbGFzcyBmb3IgYSB0dXRvcmlhbFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICogVGhlIGlkIG9mIHRoZSBtb2RhbC5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbiAgICB0aGlzLm1vZGFsSWQgPSAndHV0b3JpYWxNb2RhbCc7XG4gICAgdGhpcy5zdGVwcyA9IFR1dG9yaWFsLlNURVBTX1RFWFQubWFwKHRleHQgPT4gbmV3IFR1dG9yaWFsU3RlcCh0ZXh0KSwgdGhpcy5uZXh0U3RlcCk7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXggPSAwO1xuICAgIHRoaXMuY3VyU3RlcCA9IHRoaXMuc3RlcHNbdGhpcy5jdXJTdGVwSW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgRE9NIGFuZCBzaG93LlxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURvbSgpO1xuICAgIHRoaXMuYWRkQ2FsbGJhY2tzKCk7XG4gICAgTWljcm9Nb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgdGhpcy5jdXJTdGVwLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHRoZSBuZXh0IHN0ZXAsIG9yIGVuZCB0aGUgdHV0b3JpYWwgaWYgdGhlcmUgYXJlIG5vIG1vcmUgc3RlcHMuXG4gICAqL1xuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLmN1clN0ZXBJbmRleCsrO1xuICAgIGlmICh0aGlzLmN1clN0ZXBJbmRleCA8IHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHR1dG9yaWFsLlxuICAgKi9cbiAgZG9uZSgpIHtcbiAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMubW9kYWxJZCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYW55IGJ1dHRvbnMgb24gdGhlIG1vZGFsLlxuICAgKi9cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUdXRvcmlhbE1vZGFsQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiIGlkPVwidHV0b3JpYWxDbG9zZUJ0blwiIGRhdGEtbWljcm9tb2RhbC1jbG9zZT48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIiBpZD1cIm1vZGFsLTEtY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsX190aXRsZVwiIGlkPVwidHV0b3JpYWxNb2RhbFRleHRcIj48L2gyPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiTmV4dCBzdGVwXCIgaWQ9XCJUdXRvcmlhbE1vZGFsQnRuXCI+TmV4dCBzdGVwPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5UdXRvcmlhbC5TVEVQU19URVhUID0gW1xuICAnSGl0IGVudGVyIHRvIG1vdmUgZm9jdXMgdG8gdGhlIHdvcmtzcGFjZScsXG4gICdFbmFibGUga2V5Ym9hcmQgbmF2IGJ5IHByZXNzaW5nIENtZCtTaGlmdCtLJyxcbiAgJ1ByZXNzIFggdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IHN0YWNrIG9mIGJsb2NrcycsXG4gICdQcmVzcyBZIHRvIG5hdmlnYXRlIHRvIHRoZSBmaXJzdCBibG9jaycsXG4gICdQcmVzcyBlbnRlciB0byBtYXJrIHRoZSBmaXJzdCBibG9jaycsXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})