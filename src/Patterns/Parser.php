<?php

namespace AstraticBlocks\Patterns;

class Parser
{
  public function parsePatternData(string $content, string $metaType = '', bool $withTags = false): string
  {
    switch ($metaType) {
      case 'title':
        $pattern = "\<title\>(.+)\<\/title\>";
          break;
      case 'description':
        $pattern = "\<desc\>(.+)\<\/desc\>";
          break;
      case 'categories':
        $pattern = "\<categories (.+?)\>(.+)\<\/categories\>";
          break;
      default:
        $pattern = "\<astratic\-pattern\>(.+)\<\/astratic\-pattern\>";
          break;
    };

    preg_match("/{$pattern}/misU", $content, $matches);

    if (! $withTags) {
      $matches = array_reverse($matches);
    }

    return ! empty($matches) ? $matches[0] : '';
  }

  public function getPatternMarkup(string $content): string
  {
    $patternMetaData = $this->parsePatternData($content, '', true);
    $markup = trim(str_replace($patternMetaData, '', $content));

    return $markup;
  }
}
