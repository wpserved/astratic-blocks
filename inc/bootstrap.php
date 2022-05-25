<?php

require ASBL_ROOT_PATH . '/vendor/autoload.php';

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

pluginMagicFunction();
