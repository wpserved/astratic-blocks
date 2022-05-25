<?php

namespace AstraticBlocks;

use AstraticBlocks\Init;

if (! function_exists('AstraticBlocks\\pluginMagicFunction')) {
  function pluginMagicFunction(string $moduleName = '')
  {
    $modules = Init::get();
    if ('' === $moduleName) {
      return $modules;
    }
    if (! array_key_exists($moduleName, $modules->public)) {
      throw new \Exception(sprintf(__('Module %1$s doesn\'t exists!', 'astratic-blocks'), $moduleName));
    }
    return $modules->public[$moduleName];
  }
}
