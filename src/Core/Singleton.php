<?php

namespace AstraticBlocks\Core;

abstract class Singleton
{
  protected static array $instances = [];

  public function __wakeup()
  {
    throw new \Exception('Cannot unserialize singleton');
  }

  public static function get()
  {
    $class = get_called_class();
    if (! isset(self::$instances[$class])) {
      self::$instances[$class] = new static();
    }
    return self::$instances[$class];
  }
}
