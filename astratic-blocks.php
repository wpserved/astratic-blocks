<?php

/**
 * Plugin Name: Astratic Blocks
 * Description: Plugin for implement custom Gutenberg blocks
 * Version: 1.0.0
 * Author: wpserved
 * Author URI: https://wpserved.com/
 * Text Domain: astratic-blocks
 * Domain Path: /resources/lang
 * Requires at least: 5.9
 * Requires PHP: 8.0
 */

define('ASBL_ROOT_PATH', dirname(__FILE__));
define('ASBL_ASSETS_PATH', dirname(__FILE__) . '/dist');
define('ASBL_RESOURCES_PATH', dirname(__FILE__) . '/resources');
define('ASBL_ASSETS_URI', plugin_dir_url(__FILE__) . 'dist');
define('ASBL_RESOURCES_URI', plugin_dir_url(__FILE__) . 'resources');
define('ASBL_PREFIX', 'ASBL_');

require ASBL_ROOT_PATH . '/inc/bootstrap.php';
