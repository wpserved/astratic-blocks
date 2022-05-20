<?php

namespace CaseConverter\Test;

use PHPUnit\Framework\TestCase;

/**
 * Tests the case converter.
 */
class CaseConverterTest extends TestCase {

  /**
   * Test the qualified class name extraction.
   *
   * @dataProvider providerCaseConversionStrings
   *
   */
  public function testCaseConvertion($input, $type_in, $type_out, $expected_output) {
    $output = \CaseConverter\CaseString::{$type_in}($input)->{$type_out}();

    $this->assertEquals($expected_output, $output);
  }

  /**
   * Data provider.
   *
   * @see testCaseConvertion()
   */
  public function providerCaseConversionStrings() {
    // Define sets of strings, where we specify the string in each possible
    // format.
    $strings = [
      'simple string' => [
        // Type => string, where Type is a method on CaseString.
        // shit, wrong way rounf?
        'camel' => 'simpleString',
        'pascal' => 'SimpleString',
        'snake' => 'simple_string',
        'kebab' => 'simple-string',
        'title' => 'Simple String',
        'sentence' => 'Simple string',
      ],
      'uppercase words' => [
        'camel' => 'somePHPCode',
        'pascal' => 'SomePHPCode',
        'snake' => 'some_PHP_code',
        'kebab' => 'some-PHP-code',
        'title' => 'Some PHP Code',
        'sentence' => 'Some PHP code',
      ],
      'lots of uppercase' => [
        'camel' => 'PHPProgrammersCodeInPHPBecauseTheyLikePHP',
        'pascal' => 'PHPProgrammersCodeInPHPBecauseTheyLikePHP',
        'snake' => 'PHP_programmers_code_in_PHP_because_they_like_PHP',
        'kebab' => 'PHP-programmers-code-in-PHP-because-they-like-PHP',
        'title' => 'PHP Programmers Code In PHP Because They Like PHP',
        'sentence' => 'PHP programmers code in PHP because they like PHP',
      ],
    ];

    $test_data = [];

    // Create data sets from all of the string sets, where we test conversion
    // of the strings in each set between all formats.
    foreach ($strings as $set_label => $set) {
      // Create the cross product of the string set.
      foreach ($set as $type_in => $string_in) {
        foreach ($set as $type_out => $string_out) {
          $test_data_set_label = "{$set_label}: {$type_in} -> {$type_out}";
          $test_data[$test_data_set_label] = [
            $string_in,
            $type_in,
            $type_out,
            $string_out
          ];
        }
      }
    }

    return $test_data;
  }

}
