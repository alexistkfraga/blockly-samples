webpackHotUpdate("main",{

/***/ "./src/music_game_controller.js":
/*!**************************************!*\
  !*** ./src/music_game_controller.js ***!
  \**************************************/
/*! exports provided: MusicGameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MusicGameController\", function() { return MusicGameController; });\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n/* harmony import */ var _help_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help_modal */ \"./src/help_modal.js\");\n/* harmony import */ var _key_press_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./key_press_modal */ \"./src/key_press_modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n/**\n * Class for a controller for the music game, which handles\n * creation of the game and coordination of related modals, tutorials,\n * etc.\n */\n\nvar MusicGameController = /*#__PURE__*/function () {\n  /**\n   * The constructor for the music game controller.\n   */\n  function MusicGameController() {\n    _classCallCheck(this, MusicGameController);\n\n    micromodal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init({\n      onClose: function onClose() {\n        return speaker.cancel();\n      }\n    });\n    /**\n     * The actual game object.\n     * @type {Music}\n     */\n\n    this.game = new _music__WEBPACK_IMPORTED_MODULE_1__[\"Music\"]();\n    this.game.loadLevel(1);\n    var helpModal = new _help_modal__WEBPACK_IMPORTED_MODULE_2__[\"HelpModal\"]('modal-1', 'modalButton');\n    helpModal.init();\n    var keyPressModal = new _key_press_modal__WEBPACK_IMPORTED_MODULE_3__[\"KeyPressModal\"]();\n    keyPressModal.init();\n  }\n  /**\n   * Get the current game object.\n   * @return {Music}\n   */\n\n\n  _createClass(MusicGameController, [{\n    key: \"getGame\",\n    value: function getGame() {\n      return this.game;\n    }\n  }]);\n\n  return MusicGameController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzPzczYTYiXSwibmFtZXMiOlsiTXVzaWNHYW1lQ29udHJvbGxlciIsIk1pY3JvTW9kYWwiLCJpbml0Iiwib25DbG9zZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJnYW1lIiwiTXVzaWMiLCJsb2FkTGV2ZWwiLCJoZWxwTW9kYWwiLCJIZWxwTW9kYWwiLCJrZXlQcmVzc01vZGFsIiwiS2V5UHJlc3NNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLG1CQUFiO0FBQ0U7QUFDRjtBQUNBO0FBQ0UsaUNBQWM7QUFBQTs7QUFDWkMsc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQjtBQUNkQyxhQUFPLEVBQUU7QUFBQSxlQUFNQyxPQUFPLENBQUNDLE1BQVIsRUFBTjtBQUFBO0FBREssS0FBaEI7QUFJQTtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsNENBQUosRUFBWjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsU0FBVixDQUFvQixDQUFwQjtBQUVBLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxxREFBSixDQUFjLFNBQWQsRUFBeUIsYUFBekIsQ0FBbEI7QUFDQUQsYUFBUyxDQUFDUCxJQUFWO0FBRUEsUUFBTVMsYUFBYSxHQUFHLElBQUlDLDhEQUFKLEVBQXRCO0FBQ0FELGlCQUFhLENBQUNULElBQWQ7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUExQkE7QUFBQTtBQUFBLDhCQTJCWTtBQUNSLGFBQU8sS0FBS0ksSUFBWjtBQUNEO0FBN0JIOztBQUFBO0FBQUEiLCJmaWxlIjoiLi9zcmMvbXVzaWNfZ2FtZV9jb250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHtNdXNpY30gZnJvbSAnLi9tdXNpYyc7XG5pbXBvcnQge0hlbHBNb2RhbH0gZnJvbSAnLi9oZWxwX21vZGFsJztcbmltcG9ydCB7S2V5UHJlc3NNb2RhbH0gZnJvbSAnLi9rZXlfcHJlc3NfbW9kYWwnO1xuXG4vKipcbiAqIENsYXNzIGZvciBhIGNvbnRyb2xsZXIgZm9yIHRoZSBtdXNpYyBnYW1lLCB3aGljaCBoYW5kbGVzXG4gKiBjcmVhdGlvbiBvZiB0aGUgZ2FtZSBhbmQgY29vcmRpbmF0aW9uIG9mIHJlbGF0ZWQgbW9kYWxzLCB0dXRvcmlhbHMsXG4gKiBldGMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNdXNpY0dhbWVDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIG11c2ljIGdhbWUgY29udHJvbGxlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE1pY3JvTW9kYWwuaW5pdCh7XG4gICAgICBvbkNsb3NlOiAoKSA9PiBzcGVha2VyLmNhbmNlbCgpLFxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdHVhbCBnYW1lIG9iamVjdC5cbiAgICAgKiBAdHlwZSB7TXVzaWN9XG4gICAgICovXG4gICAgdGhpcy5nYW1lID0gbmV3IE11c2ljKCk7XG4gICAgdGhpcy5nYW1lLmxvYWRMZXZlbCgxKTtcblxuICAgIGNvbnN0IGhlbHBNb2RhbCA9IG5ldyBIZWxwTW9kYWwoJ21vZGFsLTEnLCAnbW9kYWxCdXR0b24nKTtcbiAgICBoZWxwTW9kYWwuaW5pdCgpO1xuXG4gICAgY29uc3Qga2V5UHJlc3NNb2RhbCA9IG5ldyBLZXlQcmVzc01vZGFsKCk7XG4gICAga2V5UHJlc3NNb2RhbC5pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGdhbWUgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtNdXNpY31cbiAgICovXG4gIGdldEdhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/music_game_controller.js\n");

/***/ })

})