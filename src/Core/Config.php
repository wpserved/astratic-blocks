<?php

namespace AstraticBlocks\Core;

class Config
{
  public function __construct()
  {
    add_action('plugins_loaded', [$this, 'setConfig']);
    add_action('wp_enqueue_scripts', [$this, 'addDependencies']);
    add_action('admin_enqueue_scripts', [$this, 'addAdminDependencies']);
  }

  public function setConfig(): void
  {
    load_textdomain('astratic-blocks', ASBL_RESOURCES_PATH . '/lang/' . get_locale() . '.mo');
  }

  public function addDependencies(): void
  {
    $version = 'production' === wp_get_environment_type() ? null : time();

    wp_enqueue_style('astratic-blocks/front.css', ASBL_ASSETS_URI . '/styles/front.css', false, $version);
    wp_enqueue_script('astratic-blocks/manifest.js', ASBL_ASSETS_URI . '/scripts/manifest.js', ['jquery'], $version, true);
    wp_enqueue_script('astratic-blocks/front.js', ASBL_ASSETS_URI . '/scripts/front.js', ['astratic-blocks/manifest.js'], $version, true);

    if (file_exists(ASBL_ASSETS_PATH . '/scripts/vendor.js')) {
      wp_enqueue_script('astratic-blocks/vendor.js', ASBL_ASSETS_URI . '/scripts/vendor.js', ['astratic-blocks/manifest.js'], $version, true);
    }

    wp_localize_script('astratic-blocks/front.js', 'asbl', [
      'ajax' => admin_url('admin-ajax.php')
    ]);
  }

  public function addAdminDependencies(): void
  {
    $version = 'production' === wp_get_environment_type() ? null : time();

    wp_enqueue_style('astratic-blocks/admin.css', ASBL_ASSETS_URI . '/styles/admin.css', false, $version);
    wp_enqueue_script('astratic-blocks/manifest.js', ASBL_ASSETS_URI . '/scripts/manifest.js', ['jquery'], $version, true);
    wp_enqueue_script('astratic-blocks/admin.js', ASBL_ASSETS_URI . '/scripts/admin.js', ['astratic-blocks/manifest.js'], $version, true);



    if (file_exists(ASBL_ASSETS_PATH . '/scripts/vendor.js')) {
      wp_enqueue_script('astratic-blocks/vendor.js', ASBL_ASSETS_URI . '/scripts/vendor.js', ['astratic-blocks/manifest.js'], $version, true);
    }

    wp_localize_script('astratic-blocks/admin.js', 'asbl', [
      'ajax' => admin_url('admin-ajax.php')
    ]);
  }
}
