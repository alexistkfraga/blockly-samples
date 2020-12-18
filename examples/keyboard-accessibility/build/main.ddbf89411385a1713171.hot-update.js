webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\n/* harmony import */ var _welcome_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome_modal */ \"./src/welcome_modal.js\");\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Music game controller.\n */\n\n\n\n\n\n\n/**\n * Class for a controller for the music game, which handles\n * creation of the game and coordination of related modals, tutorials,\n * etc.\n */\n\nvar MusicGameController = /*#__PURE__*/function () {\n  /**\n   * The constructor for the music game controller.\n   */\n  function MusicGameController() {\n    _classCallCheck(this, MusicGameController);\n\n    micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n      onClose: function onClose() {\n        return _speaker__WEBPACK_IMPORTED_MODULE_5__[\"speaker\"].cancel();\n      }\n    });\n    /**\n     * The actual game object.\n     * @type {Music}\n     */\n\n    this.game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n    this.game.loadLevel(1);\n    var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n    helpModal.init(); // Start by showing the key press modal.\n\n    new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"](this.showWelcomeModal).init();\n  }\n  /**\n   * Get the current game object.\n   * @return {Music} The current game object.\n   */\n\n\n  _createClass(MusicGameController, [{\n    key: \"getGame\",\n    value: function getGame() {\n      return this.game;\n    }\n    /**\n     * Show the welcome modal.\n     */\n\n  }, {\n    key: \"showWelcomeModal\",\n    value: function showWelcomeModal() {\n      new _welcome_modal__WEBPACK_IMPORTED_MODULE_4__[\"WelcomeModal\"](this.runTutorial).init();\n    }\n  }, {\n    key: \"runTutorial\",\n    value: function runTutorial() {\n      new Tutorial(this.game.getWorkspace()).init();\n      tutorial.init();\n    }\n  }]);\n\n  return MusicGameController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJLZXlQcmVzc01vZGFsIiwic2hvd1dlbGNvbWVNb2RhbCIsIldlbGNvbWVNb2RhbCIsInJ1blR1dG9yaWFsIiwiVHV0b3JpYWwiLCJnZXRXb3Jrc3BhY2UiLCJ0dXRvcmlhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsbUJBQWI7QUFDRTtBQUNGO0FBQ0E7QUFDRSxpQ0FBYztBQUFBOztBQUNaQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCO0FBQ2RDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGdEQUFPLENBQUNDLE1BQVIsRUFBTjtBQUFBO0FBREssS0FBaEI7QUFJQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsNENBQUosRUFBWjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsU0FBVixDQUFvQixDQUFwQjtBQUVBLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxxREFBSixDQUFjLFNBQWQsRUFBeUIsYUFBekIsQ0FBbEI7QUFDQUQsYUFBUyxDQUFDUCxJQUFWLEdBYlksQ0FlWjs7QUFDQSxRQUFJUyw4REFBSixDQUFrQixLQUFLQyxnQkFBdkIsRUFBeUNWLElBQXpDO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBMUJBO0FBQUE7QUFBQSw4QkEyQlk7QUFDUixhQUFPLEtBQUtJLElBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7QUFqQ0E7QUFBQTtBQUFBLHVDQWtDcUI7QUFDakIsVUFBSU8sMkRBQUosQ0FBaUIsS0FBS0MsV0FBdEIsRUFBbUNaLElBQW5DO0FBQ0Q7QUFwQ0g7QUFBQTtBQUFBLGtDQXNDZ0I7QUFDWixVQUFJYSxRQUFKLENBQWEsS0FBS1QsSUFBTCxDQUFVVSxZQUFWLEVBQWIsRUFBdUNkLElBQXZDO0FBQ0FlLGNBQVEsQ0FBQ2YsSUFBVDtBQUVEO0FBMUNIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgTXVzaWMgZ2FtZSBjb250cm9sbGVyLlxuICovXG5cblxuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSAnbWljcm9tb2RhbCc7XG5pbXBvcnQge011c2ljfSBmcm9tICcuL211c2ljJztcbmltcG9ydCB7SGVscE1vZGFsfSBmcm9tICcuL2hlbHBfbW9kYWwnO1xuaW1wb3J0IHtLZXlQcmVzc01vZGFsfSBmcm9tICcuL2tleV9wcmVzc19tb2RhbCc7XG5pbXBvcnQge1dlbGNvbWVNb2RhbH0gZnJvbSAnLi93ZWxjb21lX21vZGFsJztcbmltcG9ydCB7c3BlYWtlcn0gZnJvbSAnLi9zcGVha2VyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgYSBjb250cm9sbGVyIGZvciB0aGUgbXVzaWMgZ2FtZSwgd2hpY2ggaGFuZGxlc1xuICogY3JlYXRpb24gb2YgdGhlIGdhbWUgYW5kIGNvb3JkaW5hdGlvbiBvZiByZWxhdGVkIG1vZGFscywgdHV0b3JpYWxzLFxuICogZXRjLlxuICovXG5leHBvcnQgY2xhc3MgTXVzaWNHYW1lQ29udHJvbGxlciB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBtdXNpYyBnYW1lIGNvbnRyb2xsZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNaWNyb01vZGFsLmluaXQoe1xuICAgICAgb25DbG9zZTogKCkgPT4gc3BlYWtlci5jYW5jZWwoKSxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3R1YWwgZ2FtZSBvYmplY3QuXG4gICAgICogQHR5cGUge011c2ljfVxuICAgICAqL1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBNdXNpYygpO1xuICAgIHRoaXMuZ2FtZS5sb2FkTGV2ZWwoMSk7XG5cbiAgICBjb25zdCBoZWxwTW9kYWwgPSBuZXcgSGVscE1vZGFsKCdtb2RhbC0xJywgJ21vZGFsQnV0dG9uJyk7XG4gICAgaGVscE1vZGFsLmluaXQoKTtcblxuICAgIC8vIFN0YXJ0IGJ5IHNob3dpbmcgdGhlIGtleSBwcmVzcyBtb2RhbC5cbiAgICBuZXcgS2V5UHJlc3NNb2RhbCh0aGlzLnNob3dXZWxjb21lTW9kYWwpLmluaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZ2FtZSBvYmplY3QuXG4gICAqIEByZXR1cm4ge011c2ljfSBUaGUgY3VycmVudCBnYW1lIG9iamVjdC5cbiAgICovXG4gIGdldEdhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSB3ZWxjb21lIG1vZGFsLlxuICAgKi9cbiAgc2hvd1dlbGNvbWVNb2RhbCgpIHtcbiAgICBuZXcgV2VsY29tZU1vZGFsKHRoaXMucnVuVHV0b3JpYWwpLmluaXQoKTtcbiAgfVxuXG4gIHJ1blR1dG9yaWFsKCkge1xuICAgIG5ldyBUdXRvcmlhbCh0aGlzLmdhbWUuZ2V0V29ya3NwYWNlKCkpLmluaXQoKTtcbiAgICB0dXRvcmlhbC5pbml0KCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ })

})