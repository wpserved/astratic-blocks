const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';
import frontend from './scripts/frontend';

registerBlockType('astratic/accordeons', {
  title: __('Astratic: Accordeons', 'astratic-blocks'),
  description: __('Accordeons block', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  attributes: {
    numberOfButtons: {
      type: "number",
      default: 4,
    },
    text: {
      type: "array",
    },
  },
  icon,
  edit,
  save
});

frontend();
