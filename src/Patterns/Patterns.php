<?php

namespace AstraticBlocks\Patterns;

use AstraticBlocks\Patterns\Parser;
use WP_Block_Patterns_Registry;
use WP_Block_Pattern_Categories_Registry;

class Patterns
{
  private string $dir;
  private array $patterns;
  private array $allowedFiles;
  private Parser $parser;
  private const PATTERN_MAIN_CATEGORY = 'Astratic Patterns';

  public function __construct()
  {
    $this->dir = ASBL_PATTERNS_PATH;
    $this->patterns = array_filter(scandir($this->dir), function ($item) {
      return ! is_dir($this->dir . '/' . $item) && array_reverse(explode('.', $item))[0] == 'html';
    });
    
    $this->parser = new Parser();

    add_action('init', [$this, 'reqisterPatterns'], 1);
  }

  public function registerCategory(string $category): void
  {
    $categorySlug = sanitize_title_with_dashes($category);

    if (! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered($categorySlug)) {
      register_block_pattern_category($categorySlug, ['label' => sprintf(__('%1$s', 'astratic-blocks'), $category)]);
    }
  }

  public function reqisterPatterns(): void
  {
    if ($this->patterns) {
      foreach ($this->patterns as $pattern) {
        $content = $this->getPatternData($pattern);
        $content['categories'][] = self::PATTERN_MAIN_CATEGORY;

        if (! empty($content['categories'])) {
          foreach ($content['categories'] as &$category) {
            $this->registerCategory($category);
          
            $category = sanitize_title_with_dashes($category);
          }
        }


        if ($this->shouldRegister($content)) {
          register_block_pattern(
              'astratic-blocks/' . sanitize_title_with_dashes(explode('.', $pattern)[0]),
              [
              'title' => __($content['title'], 'astratic-blocks'),
              'description' => __($content['description'], 'astratic-blocks'),
              'content' => $content['markup'],
              'categories' => $content['categories']
              ]
          );
        }
      }
    }
  }

  private function getPatternData(string $pattern): array
  {
    $patternFileContent = file_get_contents($this->dir . '/' . $pattern);
    $patternMetaContent = $this->parser->parsePatternData($patternFileContent);

    $content = [
      'title' => $this->parser->parsePatternData($patternMetaContent, 'title'),
      'description' => $this->parser->parsePatternData($patternMetaContent, 'description'),
      'categories' => array_map('trim', explode(',', $this->parser->parsePatternData($patternMetaContent, 'categories'))),
      'markup' => $this->parser->getPatternMarkup($patternFileContent)
    ];

    return $content;
  }

  private function shouldRegister(array $content): bool
  {
    if (empty($content['title']) || empty($content['description'])) {
      return false;
    }

    return true;
  }
}
