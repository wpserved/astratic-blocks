<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Base;
use AstraticBlocks\Blocks\Spacer;

class Blocks
{
  private array $blocks = [];

  public function __construct()
  {
    $this->blocks['spacer'] = new Spacer();
  }
}
