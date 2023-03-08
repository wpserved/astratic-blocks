const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import edit from './scripts/edit';
import save from './scripts/save';
import icon from './scripts/icon';
import frontend from './scripts/frontend';

registerBlockType('astratic/accordion', {
  title: __('Astratic: Accordion', 'astratic-blocks'),
  description: __('Accordion.', 'astratic-blocks'),
  category: 'layout',
  icon,
  edit,
  save,
  attributes: {
    "tagName": {
      "type": "string",
      "default": "div"
    },
    "templateLock": {
      "type": ["string", "boolean"],
      "enum": ["all", "insert", false]
    },
    "text": {
      "type": "string",
      "default": "Accordion Toggle"
    },
  },
  supports: {
    "__experimentalSettings": true,
    "align": ["wide", "full"],
    "anchor": true,
    "ariaLabel": true,
    "html": false,
    "color": {
      "gradients": true,
      "link": true,
      "__experimentalDefaultControls": {
        "background": true,
        "text": true
      }
    },
    "spacing": {
      "margin": ["top", "bottom"],
      "padding": true,
      "blockGap": true,
      "__experimentalDefaultControls": {
        "padding": true,
        "blockGap": true
      }
    },
    "__experimentalBorder": {
      "color": true,
      "radius": true,
      "style": true,
      "width": true,
      "__experimentalDefaultControls": {
        "color": true,
        "radius": true,
        "style": true,
        "width": true
      }
    },
    "typography": {
      "fontSize": true,
      "lineHeight": true,
      "__experimentalFontStyle": true,
      "__experimentalFontWeight": true,
      "__experimentalLetterSpacing": true,
      "__experimentalTextTransform": true,
      "__experimentalDefaultControls": {
        "fontSize": true
      }
    },
    "__experimentalLayout": true
  }
})

frontend();