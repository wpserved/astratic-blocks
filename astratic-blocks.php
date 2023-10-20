<?php

/**
 * Plugin Name: Astratic Blocks
 * Description: Plugin for implement custom Gutenberg blocks
 * Version: 1.6.2
 * Author: wpserved
 * Author URI: https://wpserved.com/
 * Text Domain: astratic-blocks
 * Domain Path: /resources/lang
 * Requires at least: 6.1
 * Requires PHP: 7.4
 */

define('ASBL_VERSION', '1.6.2');
define('ASBL_ROOT_PATH', dirname(__FILE__));
define('ASBL_ASSETS_PATH', dirname(__FILE__) . '/dist');
define('ASBL_RESOURCES_PATH', dirname(__FILE__) . '/resources');
define('ASBL_PATTERNS_PATH', dirname(__FILE__) . '/resources/patterns');
define('ASBL_ASSETS_URI', plugin_dir_url(__FILE__) . 'dist');
define('ASBL_RESOURCES_URI', plugin_dir_url(__FILE__) . 'resources');
define('ASBL_PATTERNS_URI', plugin_dir_url(__FILE__) . 'resources/patterns');

require ASBL_ROOT_PATH . '/inc/bootstrap.php';
