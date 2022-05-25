<?php

namespace AstraticBlocks\Gutenberg\Blocks;

abstract class BlockAbstract
{
  public function __construct()
  {
    add_action('init', [$this, 'register']);
  }

  abstract public function register(): void;
}
