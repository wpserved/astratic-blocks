<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Base extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('base');
    $this->setTitle('Base');
    parent::__construct();
  }
}
