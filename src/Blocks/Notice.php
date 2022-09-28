<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Notice extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('notice');
    $this->setTitle('Notice');
    parent::__construct();
  }
}
