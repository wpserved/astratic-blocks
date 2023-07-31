const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit  from './scripts/edit';
import save from './scripts/save';
import icon from './scripts/icon';

registerBlockType('astratic/icon', {
  title: __('Astratic: Icon', 'astratic-blocks'),
  description: __('Base icon.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    align: true,
    alignWide: true,
    color: {
      background: true,
      text: true
    },
    spacing: {
      margin: true,
      padding: true
    },
    __experimentalBorder: {
      color: true,
      radius: true,
      width: true,
    },
    __experimentalLayout: {
      default: "flex",
      allowInheriting: false,
      allowSwitching: false,
      allowOrientation: false,
      allowVerticalAlignment: false
    },
    skipBlockSupportAttributes: true,
  },
  attributes: {
    id: {
      type: 'string',
      default: ''
    },
    width: {
      type: 'number',
      default: 200
    },
    mediaId: {
      type: 'number',
      default: 0,
    },
    mediaUrl: {
      type: 'string',
      default: ''
    }
  },
  icon,
  edit,
  save
});

