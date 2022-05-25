<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Spacer;

class Blocks
{
  private array $blocks = [];

  public function __construct()
  {
    $this->blocks['base'] = new Base();
    $this->blocks['spacer'] = new Spacer();
  }
}
