<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Accordeons extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('accordeons');
    $this->setTitle('Accordeons');
    parent::__construct();
  }
}
