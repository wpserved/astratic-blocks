<?php

namespace AstraticBlocks\Core;

class Config
{
  /**
   * @action plugins_loaded
   */
  public function initConfig(): void
  {
    load_textdomain('astratic-blocks', ACB_RESOURCES_PATH . '/lang/' . get_locale() . '.mo');
  }

  /**
   * @action wp_enqueue_scripts
   */
  public function dependencies(): void
  {
    $version = 'production' === wp_get_environment_type() ? null : time();

    wp_enqueue_style('astratic-blocks/front.css', ACB_ASSETS_URI . '/styles/front.css', false, $version);
    wp_enqueue_script('astratic-blocks/manifest.js', ACB_ASSETS_URI . '/scripts/manifest.js', ['jquery'], $version, true);
    wp_enqueue_script('astratic-blocks/vendor.js', ACB_ASSETS_URI . '/scripts/vendor.js', ['astratic-blocks/manifest.js'], $version, true);
    wp_enqueue_script('astratic-blocks/front.js', ACB_ASSETS_URI . '/scripts/front.js', ['astratic-blocks/manifest.js'], $version, true);

    wp_localize_script('astratic-blocks/front.js', 'astratic-blocks', [
      'ajax' => admin_url('admin-ajax.php')
    ]);
  }

  /**
   * @action admin_enqueue_scripts
   */
  public function adminDependencies(): void
  {
    $version = 'production' === wp_get_environment_type() ? null : time();

    wp_enqueue_style('astratic-blocks/admin.css', ACB_ASSETS_URI . '/styles/admin.css', false, $version);
    wp_enqueue_script('astratic-blocks/manifest.js', ACB_ASSETS_URI . '/scripts/manifest.js', ['jquery'], $version, true);
    wp_enqueue_script('astratic-blocks/vendor.js', ACB_ASSETS_URI . '/scripts/vendor.js', ['astratic-blocks/manifest.js'], $version, true);
    wp_enqueue_script('astratic-blocks/admin.js', ACB_ASSETS_URI . '/scripts/admin.js', ['astratic-blocks/manifest.js'], $version, true);

    wp_localize_script('astratic-blocks/admin.js', 'astratic-blocks', [
      'ajax' => admin_url('admin-ajax.php')
    ]);
  }
}
