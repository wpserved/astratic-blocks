<?php

namespace AstraticBlocks\Blocks;

interface Block
{
  public function getSlug(): string;

  public function getTitle(): string;

  public function getCategory(): string;

  public function getDescription(): string;

  public function getKeywords(): array;

  public function getAsset(string $type): string;

  public function hasAsset(string $type): bool;
}
