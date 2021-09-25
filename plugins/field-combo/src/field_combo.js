/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview a field that allows users to enter text or select from a dropdown
 * @author alexistkfraga@gmail.com (Alexis Fraga)
 */

import Blockly from 'blockly/core';

// TODO: Rename field and update description.
/**
 * Field description.
 */
export class FieldTemplate extends Blockly.Field {
  /**
   * Constructs a FieldTemplate from a JSON arg object.
   * @param {!Object} options A JSON object with options.
   * @return {!FieldTemplate} The new field instance.
   * @package
   * @nocollapse
   */
  static fromJson(options) {
    return new FieldTemplate(options['value']);
  }
}

// TODO: Edit field registration key.
Blockly.fieldRegistry.register('field_template', FieldTemplate);
