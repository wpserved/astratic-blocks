<?php

namespace CaseConverter;

/**
 * Converts a string from one case to another.
 *
 * Static methods on this class take the input string, and return a
 * StringAssembler object, on which the output method should be called. E.g.:
 *
 * @code
 *   $output = \CaseConverter\CaseString::camel('MyString')->snake();
 * @endcode
 */
class CaseString {

  /**
   * Takes a camel case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function camel($string) {
    // Convert to pascal and then use that.
    $string = ucfirst($string);

    return static::pascal($string);
  }

  /**
   * Takes a pascal case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function pascal($string) {
    // Split on both:
    // - '.|Ul': lUl   1 §
    //  and 'l|U'.
    $pieces = preg_split('@((?<=.)(?=[[:upper:]][[:lower:]])|(?<=[[:lower:]])(?=[[:upper:]]))@', $string);

    return (new StringAssembler($pieces))->areTitleCase();
  }

  /**
   * Takes a snake case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function snake($string) {
    $pieces = explode('_', $string);

    return new StringAssembler($pieces);
  }

  /**
   * Takes a kebab case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function kebab($string) {
    $pieces = explode('-', $string);

    return new StringAssembler($pieces);
  }

  /**
   * Takes a title case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function title($string) {
    $pieces = explode(' ', $string);

    return (new StringAssembler($pieces))->areTitleCase();
  }

  /**
   * Takes a sentence case string.
   *
   * @param $string
   *   The string.
   *
   * @return \CaseConverter\StringAssembler
   *   A string assembler object with the string pieces set on it.
   */
  public static function sentence($string) {
    $pieces = explode(' ', $string);

    // Put the first word into lowercase, unless it's all capitals.
    if (!preg_match('@^[[:upper:]]+$@', $pieces[0])) {
      $pieces[0] = lcfirst($pieces[0]);
    }

    return new StringAssembler($pieces);
  }

}
