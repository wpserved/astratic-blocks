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
    $this->addVariable('site_title', get_bloginfo('name') ?? '');
    $this->addVariable('site_update', get_the_modified_time('U') ?? '');
    $this->addVariable('site_test', get_the_ID() ?? '');
    parent::__construct();
  }
}
