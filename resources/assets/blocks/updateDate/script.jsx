const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

import edit from './scripts/edit';
import icon from './scripts/icon';
import save from './scripts/save';

registerBlockType('astratic/updatedate', {
  title: __('Astratic: Last Post Update Date', 'astratic-blocks'),
  description: __('Add update date of the post.', 'astratic-blocks'),
  category: 'layout',
  supports: {
    anchor: true,
  },
  icon,
  edit,
  save,
})

