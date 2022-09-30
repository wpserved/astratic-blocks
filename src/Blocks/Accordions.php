<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Accordions extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('accordions');
    $this->setTitle('Accordions');
    parent::__construct();
  }
}
