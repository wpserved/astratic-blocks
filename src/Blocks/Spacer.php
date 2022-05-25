<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Spacer extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('spacer');
    $this->setTitle('Spacer');
    parent::__construct();
  }
}
