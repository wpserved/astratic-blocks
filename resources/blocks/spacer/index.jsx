/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import save from './save';

registerBlockType('astratic/spacer', {
  title: __('Astratic: Responsive Spacer', 'astratic'),
  description: __('Add white space between blocks and customize its height.', 'astratic'),
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

