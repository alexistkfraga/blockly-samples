/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Field test.
 */

 import * as Blockly from 'blockly';
 import {generateFieldTestBlocks, createPlayground} from '@blockly/dev-tools';
 import '../src/field_combo';
 
 const toolbox = generateFieldTestBlocks('field_combo', [
   {
     'label': 'Different text length',
     'args': {
       'options': [
         ['A', 'A'],
         ['B', 'B'],
         ['C', 'C'],
         ['D', 'D'],
         ['E', 'E'],
       ],
     },
   },
 ]);
 
 /**
  * Create a workspace.
  * @param {HTMLElement} blocklyDiv The blockly container div.
  * @param {!Blockly.BlocklyOptions} options The Blockly options.
  * @return {!Blockly.WorkspaceSvg} The created workspace.
  */
 function createWorkspace(blocklyDiv, options) {
   const workspace = Blockly.inject(blocklyDiv, options);
   return workspace;
 }
 
 document.addEventListener('DOMContentLoaded', function() {
   const defaultOptions = {
     toolbox,
   };
   createPlayground(document.getElementById('root'), createWorkspace,
       defaultOptions);
 });
 