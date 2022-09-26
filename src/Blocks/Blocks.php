<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Spacer;
use AstraticBlocks\Blocks\Copyright;
use AstraticBlocks\Blocks\Notice;

class Blocks
{
  private array $blocks = [];

  public function __construct()
  {
    $this->blocks['spacer'] = new Spacer();
    $this->blocks['notice'] = new Notice();
    $this->blocks['copyright'] = new Copyright();
  }
}
