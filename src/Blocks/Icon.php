<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Icon extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('icon');
    $this->setTitle('Icon');
    parent::__construct();
  }
}
