<?php

namespace AstraticCustomBlocks;

use AstraticCustomBlocks\Init;
use AstraticCustomBlocks\Core\DocHooks;

if (! function_exists('AstraticCustomBlocks\\pluginDoc')) {
  function pluginDoc()
  {
    return DocHooks::get();
  }
}

if (! function_exists('AstraticCustomBlocks\\pluginMagicFunction')) {
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

if (! function_exists('AstraticCustomBlocks\\createClass')) {
  /**
   * Create instance of Class
   *
   * @see https://gist.github.com/nikic/6390366
   *
   * @param string $class
   * @param array $params
   * @return object
   */
  function createClass(string $class, array $params = []): object
  {
    $object = new $class(...$params);
    pluginDoc()->addDocHooks($object);
    return $object;
  }
}
