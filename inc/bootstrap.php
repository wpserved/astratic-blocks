<?php

require ACB_ROOT_PATH . '/vendor/autoload.php';

if (! function_exists('pluginDoc') && function_exists('AstraticBlocks\\pluginDoc')) {
  /**
   * Initialize pluginDoc() function.
   *
   * @return object
   */
  function pluginDoc(): object
  {
    return AstraticBlocks\pluginDoc();
  }
}

if (! function_exists('pluginMagicFunction') && function_exists('AstraticBlocks\\pluginMagicFunction')) {
  /**
   * Initialize pluginMagicFunction() function.
   *
   * @param string $moduleName
   * @return object
   */
  function pluginMagicFunction(string $moduleName = ''): object
  {
    return AstraticBlocks\pluginMagicFunction($moduleName);
  }
}

if (! function_exists('createClass') && function_exists('AstraticBlocks\\createClass')) {
  /**
   * Initialize createClass() function.
   *
   * @param string $class
   * @param array $params
   * @return object
   */
  function createClass(string $class, array $params = array()): object
  {
    $object = new $class(...$params);
    pluginDoc()->addDocHooks($object);
    return $object;
  }
}

if (! function_exists('errorLog')) {
  /**
   * Log error to debug file and print to screen when debug mode enabled.
   *
   * @param \Throwable $error
   * @return void
   */
  function errorLog(\Throwable $error): void
  {
    error_log($error);
    if (defined('WP_DEBUG') && true === WP_DEBUG && defined('WP_DEBUG_DISPLAY') && true === WP_DEBUG_DISPLAY) {
      dump($error);
    }
  }
}

pluginDoc();
pluginMagicFunction();
