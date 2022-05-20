<?php

namespace AstraticCustomBlocks;

use AstraticCustomBlocks\Core\Singleton;

class Init extends Singleton
{
  public array $public = [];

  public array $private = [];

  public function __construct()
  {
    $this->addPrivate('Core\Config');
    $this->addPrivate('Gutenberg\BlocksProvider');
  }

  private function addPublic(string $name, string $label = ''): void
  {
    $class = 'AstraticCustomBlocks\\' . $name;
    $index = ! empty($label) ? $label : $name;
    $this->public[$index] = new $class();
    pluginDoc()->addDocHooks($this->public[$index]);
  }

  private function addPrivate(string $name, string $label = ''): void
  {
    $class = 'AstraticCustomBlocks\\' . $name;
    $index = ! empty($label) ? $label : $name;
    $this->private[$index] = new $class();
    pluginDoc()->addDocHooks($this->private[$index]);
  }
}
