const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';

registerBlockType('astratic/base', {
  title: __('Astratic: Copyright', 'astratic-blocks'),
  description: __('Copyright block.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
    color: {
      background: true,
      text: true,
    },
    spacing: {
      margin: true,
      padding: true
    }
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
    textafter: {
      type: "string",
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
    },
    showtitle: {
      type: "boolean",
      default: true
    }
  },
  icon,
  edit,
  save
});
