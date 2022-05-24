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

define('ACB_ROOT_PATH', dirname(__FILE__));
define('ACB_ASSETS_PATH', dirname(__FILE__) . '/dist');
define('ACB_RESOURCES_PATH', dirname(__FILE__) . '/resources');
define('ACB_ASSETS_URI', plugin_dir_url(__FILE__) . 'dist');
define('ACB_RESOURCES_URI', plugin_dir_url(__FILE__) . 'resources');
define('ACB_PREFIX', 'ACB_');

require ACB_ROOT_PATH . '/inc/bootstrap.php';
