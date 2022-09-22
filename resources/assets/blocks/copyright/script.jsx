const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';
import frontend from './scripts/frontend';

registerBlockType('astratic/base', {
  title: __('Astratic: Copyright', 'astratic-blocks'),
  description: __('Copyright block.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
    text: {
      type: "string",
      default: "Copyrights "
    },
    year: {
      type: "string",
    },
    sitename: {
      type: "string",
    },
    alignment: {
      type: "string",
      default: "left",
    }
  },
  icon,
  edit,
  save
});

