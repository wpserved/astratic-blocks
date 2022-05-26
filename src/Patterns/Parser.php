<?php

namespace AstraticBlocks\Patterns;

class Parser
{
  public function parsePatternData(string $content, string $metaType = '', bool $withTags = false): string
  {
    switch ($metaType) {
      case 'title':
        $openTag = "<title>";
        $closeTag = "</title>";
          break;
      case 'description':
        $openTag = "<desc>";
        $closeTag = "</desc>";
          break;
      case 'categories':
        $openTag = "<categories (.+?)>";
        $closeTag = "</categories>";
          break;
      default:
        $openTag = "<astratic-pattern>";
        $closeTag = "</astratic-pattern>";
          break;
    };

    preg_match("~$openTag(.+)$closeTag~misU", $content, $matches);

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
