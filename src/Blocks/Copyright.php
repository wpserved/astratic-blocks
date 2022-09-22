<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;
use AstraticBlocks\Blocks\BaseBlock;

class Copyright extends BaseBlock implements Block
{
  public function __construct()
  {
    $this->setSlug('copyright');
    $this->setTitle('Copyright');
    $this->addVariable('site_title', get_bloginfo('name') ?? '');
    parent::__construct();
  }
}
