const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import icon from './scripts/icon';

registerBlockType('astratic/base', {
  title: __('Astratic: Base', 'astratic-blocks'),
  description: __('Base block.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
  },
  icon,
});

