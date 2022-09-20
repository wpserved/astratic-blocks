<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class UpdateDate extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('updatedate');
    $this->setTitle('Update Date');
    parent::__construct();
  }
}
