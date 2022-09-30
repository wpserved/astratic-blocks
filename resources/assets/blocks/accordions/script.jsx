const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';
import frontend from './scripts/frontend';

registerBlockType('astratic/accordions', {
  title: __('Astratic: Accordions', 'astratic-blocks'),
  description: __('Accordions block', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  attributes: {
    numberOfButtons: {
      type: "number",
      default: 4,
    },
    buttons: {
      type: "array",
      default: ['Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text', 'Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text','Button Text']
    },
    text: {
      type: "array",
      default: ['Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content','Text Content']
    },
  },
  icon,
  edit,
  save
});

frontend();
