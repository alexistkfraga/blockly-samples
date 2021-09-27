/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Combo text input and dropdown field.
 * @author alexistkfraga@gmail.com (Alexis Fraga)
 */

import Blockly from 'blockly/core';

 /**
  * Grid dropdown field.
  */
 export class FieldCombo extends Blockly.FieldDropdown {
   /**
    * Class for an grid dropdown field.
    * @param {(!Array.<!Array>|!Function)} menuGenerator A non-empty array of
    *     options for a dropdown list, or a function which generates these
    *     options.
    * @param {Function=} validator A function that is called to validate
    *    changes to the field's value. Takes in a language-neutral dropdown
    *    option & returns a validated language-neutral dropdown option, or null
    *    to abort the change.
    * @param {Object=} config A map of options used to configure the field.
    *    See the [field creation documentation]{@link https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown#creation}
    *    for a list of properties this parameter supports.
    * @extends {Blockly.Field}
    * @constructor
    * @throws {TypeError} If `menuGenerator` options are incorrectly structured.
    */
   constructor(menuGenerator, validator = undefined, config = undefined) {
     super(menuGenerator, validator, config);
 
     /**
      * The number of columns in the dropdown grid. Must be an integer value
      * greater than 0. Defaults to 3.
      * @type {number}
      * @private
      */
     this.columns_ = 3;
     if (config && config['columns']) {
       this.setColumnsInternal_(config['columns']);
     }
   }
 
   /**
    * Constructs a FieldGridDropdown from a JSON arg object.
    * @param {!Object} options A JSON object with options.
    * @return {!FieldCombo} The new field instance.
    * @package
    * @nocollapse
    */
   static fromJson(options) {
     return new FieldCombo(options['options'], undefined, options);
   }
   
   /**
   * @override
   */
    initView() {
      if (this.getConstants().FULL_BLOCK_FIELDS) {
        // Step one: figure out if this is the only field on this block.
        // Rendering is quite different in that case.
        var nFields = 0;
        var nConnections = 0;
    
        // Count the number of fields, excluding text fields
        for (var i = 0, input; (input = this.sourceBlock_.inputList[i]); i++) {
          for (var j = 0; (input.fieldRow[j]); j++) {
            nFields ++;
          }
          if (input.connection) {
            nConnections++;
          }
        }
        // The special case is when this is the only non-label field on the block
        // and it has an output but no inputs.
        this.fullBlockClickTarget_ =
            nFields <= 1 && this.sourceBlock_.outputConnection && !nConnections;
      } else {
        this.fullBlockClickTarget_ = false;
      }
    
      if (this.fullBlockClickTarget_) {
        this.clickTarget_ = this.sourceBlock_.getSvgRoot();
      } else {
        this.createBorderRect_();
      }
      this.createTextElement_();
      if (this.shouldAddBorderRect_()) {
        this.createBorderRect_();
      } else {
        this.clickTarget_ = this.sourceBlock_.getSvgRoot();
      }
      this.createTextElement_();
    
      this.imageElement_ = Blockly.utils.dom.createSvgElement(
          Blockly.utils.Svg.IMAGE, {}, this.fieldGroup_);
    
      if (this.getConstants().FIELD_DROPDOWN_SVG_ARROW) {
        this.createSVGArrow_();
      } else {
        this.createTextArrow_();
      }
    
      if (this.borderRect_) {
        Blockly.utils.dom.addClass(this.borderRect_, 'blocklyDropdownRect');
      }
    };
 }
 
 Blockly.fieldRegistry.register('field_combo', FieldCombo);
