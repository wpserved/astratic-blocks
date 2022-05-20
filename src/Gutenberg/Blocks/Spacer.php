<?php

namespace AstraticCustomBlocks\Gutenberg\Blocks;

class Spacer extends BlockAbstract
{
  public function register(): void
  {
    wp_register_script(
        'astratic/block-spacer',
        ACB_ASSETS_URI . '/blocks/spacer/index.js',
        ['wp-blocks', 'wp-element', 'wp-block-editor', 'wp-compose', 'wp-components', 'wp-i18n'],
        filemtime(ACB_ASSETS_PATH . '/blocks/spacer/index.js')
    );

    wp_register_style(
        'astratic/block-spacer-editor',
        ACB_ASSETS_URI . '/blocks/spacer/editor.css',
        ['wp-edit-blocks'],
        filemtime(ACB_ASSETS_PATH . '/blocks/spacer/editor.css')
    );

    wp_register_style(
        'astratic/block-spacer',
        ACB_ASSETS_URI . '/blocks/spacer/style.css',
        [],
        filemtime(ACB_ASSETS_PATH . '/blocks/spacer/style.css')
    );

    register_block_type('astratic/block-spacer', [
      'editor_script' => 'astratic/block-spacer',
      'editor_style'  => 'astratic/block-spacer-editor',
      'style' => 'astratic/block-spacer',
    ]);

    wp_set_script_translations('astratic/block-spacer', 'astratic', get_theme_file_path('/resources/lang'));
  }
}
