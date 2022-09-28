<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Spacer;
use AstraticBlocks\Blocks\Copyright;
use AstraticBlocks\Blocks\Accordeons;

class Blocks
{
  private array $blocks = [];

  public function __construct()
  {
    $this->blocks['spacer'] = new Spacer();
    $this->blocks['copyright'] = new Copyright();
    $this->blocks['accordeons'] = new Accordeons();
  }
}
