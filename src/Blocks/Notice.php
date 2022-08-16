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

    add_action('wp_enqueue_scripts', [$this, 'notice_block_scripts']);
  }

  public function notice_block_scripts () {   
    wp_enqueue_script('astratic-blocks', plugins_url('astratic-blocks/resources/assets/blocks/notice/scripts/frontend.js'));
  }
}