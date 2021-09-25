/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Field that allows entering text or select from a dropdown.
 * @author alexistkfraga@gmail.com (Alexis Fraga)
 */

import Blockly from 'blockly/core';

// TODO: Rename field and update description.
/**
 * Field description.
 */
export class FieldCombo extends Blockly.Field {
  /**
   * Constructs a FieldTemplate from a JSON arg object.
   * @param {!Object} options A JSON object with options.
   * @return {!FieldCombo} The new field instance.
   * @package
   * @nocollapse
   */
  static fromJson(options) {
    return new FieldCombo(options['value']);
  }
}

Blockly.fieldRegistry.register('field_combo', FieldCombo);
