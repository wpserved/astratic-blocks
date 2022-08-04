const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks

// import edit from './scripts/edit';
import icon from './scripts/icon';
// import save from './scripts/save';

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
  },
  icon,
  edit: function () {
    return <p> Hello world (from the editor)</p>;
  },
  save: function () {
      return <p> Hola mundo (from the frontend) </p>;
  }
});

