const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';

registerBlockType('astratic/spacer', {
  title: __('Astratic: Responsive Spacer', 'astratic-blocks'),
  description: __('Add white space between blocks and customize its height.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
    height: {
      type: 'number',
      default: 100
    },
    heightMobile: {
      type: 'number',
      default: 25
    },
    heightTablet: {
      type: 'number',
      default: 50
    },
    heightHorizontalTablet: {
      type: 'number',
      default: 33
    }
  },
  icon,
  edit,
  save,
})

