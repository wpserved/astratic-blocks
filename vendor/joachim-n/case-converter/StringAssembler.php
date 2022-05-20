<?php

namespace CaseConverter;

/**
 * Assembles a string from pieces.
 */
class StringAssembler {

  /**
   * Whether the $pieces are each in title case.
   *
   * @var bool
   */
  protected $areTitleCase = FALSE;

  /**
   * Creates a new StringAssembler.
   *
   * @param array $pieces
   *   The string pieces.
   */
  public function __construct($pieces) {
    $this->pieces = $pieces;
  }

  /**
   * Sets that the pieces are already in title case.
   *
   * @return
   *   $this.
   */
  public function areTitleCase() {
    $this->areTitleCase = TRUE;
    return $this;
  }

  /**
   * Outputs the pieces as a camel case string.
   *
   * @return string
   *   The resulting string.
   */
  public function camel() {
    if ($this->areTitleCase) {
      // If the pieces are already in title case, lower the case of the first
      // piece only, unless it's in uppercase.
      if (!preg_match('@^[[:upper:]]+$@', $this->pieces[0])) {
        $this->pieces[0] = lcfirst($this->pieces[0]);
      }
    }
    else {
      $first_piece = array_shift($this->pieces);

      $this->pieces = array_map('ucfirst', $this->pieces);

      array_unshift($this->pieces, $first_piece);
    }

    return implode('', $this->pieces);
  }

  /**
   * Outputs the pieces as a pascal case string.
   *
   * @return string
   *   The resulting string.
   */
  public function pascal() {
    if (!$this->areTitleCase) {
      $this->pieces = array_map('ucfirst', $this->pieces);
    }
    return implode('', $this->pieces);
  }

  /**
   * Outputs the pieces as a snak case string.
   *
   * @return string
   *   The resulting string.
   */
  public function snake() {
    if ($this->areTitleCase) {
      foreach ($this->pieces as &$piece) {
        if (preg_match('@^[[:upper:]]+$@', $piece)) {
          // Leave an entirely uppercase piece alone.
          continue;
        }

        $piece = lcfirst($piece);
      }
    }

    return implode('_', $this->pieces);
  }

  /**
   * Outputs the pieces as a kebab case string.
   *
   * @return string
   *   The resulting string.
   */
  public function kebab() {
    if ($this->areTitleCase) {
      foreach ($this->pieces as &$piece) {
        if (preg_match('@^[[:upper:]]+$@', $piece)) {
          // Leave an entirely uppercase piece alone.
          continue;
        }

        $piece = lcfirst($piece);
      }
    }

    return implode('-', $this->pieces);
  }

  /**
   * Outputs the pieces as a title case string.
   *
   * @return string
   *   The resulting string.
   */
  public function title() {
    if (!$this->areTitleCase) {
      $this->pieces = array_map('ucfirst', $this->pieces);
    }

    return implode(' ', $this->pieces);
  }

  /**
   * Outputs the pieces as a title case string.
   *
   * @return string
   *   The resulting string.
   */
  public function sentence() {
    $pieces = $this->pieces;

    // Take off the first piece.
    $first_piece = array_shift($pieces);

    if ($this->areTitleCase) {
      foreach ($pieces as &$piece) {
        if (preg_match('@^[[:upper:]]+$@', $piece)) {
          // Leave an entirely uppercase piece alone.
          continue;
        }

        $piece = lcfirst($piece);
      }
    }

    // Make the first piece into title case.
    $first_piece = ucfirst($first_piece);
    array_unshift($pieces, $first_piece);

    return implode(' ', $pieces);
  }

}
