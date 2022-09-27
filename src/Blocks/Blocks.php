<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Spacer;
use AstraticBlocks\Blocks\Copyright;

class Blocks
{
  private array $blocks = [];

  public function __construct()
  {
    $this->blocks['spacer'] = new Spacer();
    $this->blocks['copyright'] = new Copyright();
  }
}
