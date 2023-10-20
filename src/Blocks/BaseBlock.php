<?php

namespace AstraticBlocks\Blocks;

use AstraticBlocks\Blocks\Block;

abstract class BaseBlock implements Block
{
  private string $slug = '';

  private string $title = '';

  private string $category = '';

  private string $description = '';

  private array $keywords = [];

  private array $attributes = [];

  private array $variables = [];

  public function __construct()
  {
    add_action('init', [$this, 'register']);
  }

  public function register(): void
  {
    if ($this->hasSlug()) {
      $version = 'production' !== wp_get_environment_type() ? time() : ASBL_VERSION;

      $data = [
        'title' => $this->getTitle(),
        'category' => $this->getCategory(),
        'description' => $this->getDescription(),
        'keywords' => $this->getKeywords(),
        'attributes' => $this->getAttributes()
      ];

      $items = [
        'scripts' => [
          'script' => 'script.js',
          'editor_script' => 'script.editor.js',
          'view_script' => 'script.view.js',
        ],
        'styles' => [
          'style' => 'style.css',
          'editor_style' => 'style.editor.css',
          'view_style' => 'style.view.css',
        ],
      ];

      foreach ($items as $group => $assets) {
        foreach ($assets as $key => $value) {
          if ($this->hasAsset($value)) {
            $data[$key] = $this->getAsset($value);

            switch ($group) {
              case 'styles':
                wp_enqueue_style("astratic/{$this->getSlug()}/$key", $data[$key], [], $version);
                  break;

              case 'scripts':
                if ('script' === $key || 'editor_script' === $key && is_admin()) {
                  $dependencies = ['wp-blocks', 'wp-element', 'wp-compose', 'wp-components', 'wp-i18n'];

                  if (is_admin()) {
                    $dependencies[] = 'wp-block-editor';
                  }

                  wp_enqueue_script("astratic/{$this->getSlug()}/$key", $data[$key], $dependencies, $version);
  
                  if ($key === 'script') {
                    wp_localize_script("astratic/{$this->getSlug()}/$key", "astratic_{$this->getSlug()}_vars", $this->getVariables());
                  }
                }

                  break;
            }
          }
        }
      }

      register_block_type("astratic/{$this->getSlug()}", $data);
    }
  }

  public function getSlug(): string
  {
    return $this->slug;
  }

  public function setSlug(string $slug): void
  {
    $this->slug = $slug;
  }

  public function hasSlug(): bool
  {
    return ! empty($this->getSlug());
  }

  public function getTitle(): string
  {
    return $this->title;
  }

  public function setTitle(string $title): void
  {
    $this->title = $title;
  }

  public function hasTitle(): bool
  {
    return ! empty($this->getTitle());
  }

  public function getCategory(): string
  {
    return $this->category;
  }

  public function setCategory(string $category): void
  {
    $this->category = $category;
  }

  public function hasCategory(): bool
  {
    return ! empty($this->getCategory());
  }

  public function getDescription(): string
  {
    return $this->description;
  }

  public function setDescription(string $description): void
  {
    $this->description = $description;
  }

  public function hasDescription(): bool
  {
    return ! empty($this->getDescription());
  }

  public function getKeywords(): array
  {
    return $this->keywords;
  }

  public function setKeywords(array $keywords): void
  {
    $this->keywords = $keywords;
  }

  public function hasKeywords(): bool
  {
    return ! empty($this->getKeywords());
  }

  public function getAsset(string $type): string
  {
    return ASBL_ASSETS_URI . "/blocks/{$this->getSlug()}/{$type}";
  }

  public function hasAsset(string $type): bool
  {
    return file_exists(ASBL_ASSETS_PATH . "/blocks/{$this->getSlug()}/{$type}");
  }

  public function getAttributes(): array
  {
    return $this->attributes;
  }

  public function setAttributes(array $attributes): void
  {
    $this->attributes = $attributes;
  }

  public function hasAttributes(array $attributes): void
  {
    $this->attributes = $attributes;
  }

  public function setVariables(array $variables): void
  {
    $this->variables = $variables;
  }

  public function addVariable(string $key, $value): void
  {
    $this->variables[$key] = $value;
  }

  public function getVariables(): array
  {
    return $this->variables;
  }
}
