<?php

namespace AstraticBlocks;

use AstraticBlocks\Core\Singleton;

class Init extends Singleton
{
  public array $public = [];

  public array $private = [];

  public function __construct()
  {
    $this->addPrivate('Core\Config');
    $this->addPrivate('Blocks\Blocks');
    $this->addPrivate('Patterns\Patterns');
  }

  private function addPublic(string $name, string $label = ''): void
  {
    $class = 'AstraticBlocks\\' . $name;
    $index = ! empty($label) ? $label : $name;
    $this->public[$index] = new $class();
  }

  private function addPrivate(string $name, string $label = ''): void
  {
    $class = 'AstraticBlocks\\' . $name;
    $index = ! empty($label) ? $label : $name;
    $this->private[$index] = new $class();
  }
}
