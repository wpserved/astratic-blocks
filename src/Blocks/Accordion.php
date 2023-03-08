<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Accordion extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('accordion');
    $this->setTitle('Accordion');
    parent::__construct();
  }
}
