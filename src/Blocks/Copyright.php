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
    parent::__construct();
    $this->registerSiteTitle();
  }

  public function registerSiteTitle(): void
  {
    $title = get_bloginfo('name');

    wp_enqueue_script('edit.js', '../../resources/assets/blocks/copyright/scripts/edit.js');

    wp_localize_script('edit.js', 'script_vars', array('site_title' => $title));
  }
}
