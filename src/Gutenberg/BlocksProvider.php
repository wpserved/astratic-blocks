<?php

namespace AstraticBlocks\Gutenberg;

class BlocksProvider
{
  private $classFilesCollection = [];

  public function __construct()
  {
    $this->setClassFiles();
    $this->requireClassFiles();
    $this->instantiateClasses();
  }

  private function instantiateClasses()
  {
    $classNames = $this->getClassNames();

    foreach ($classNames as $className) {
      if (class_exists(__NAMESPACE__ . '\Blocks\\' . $className) && $className !== 'BlockAbstract') {
        $class = __NAMESPACE__ . '\Blocks\\' . $className;
        new $class();
      }
    }
  }

  private function getClassNames(): array
  {
    $classNamesCollection = [];

    foreach ($this->classFilesCollection as $classFile) {
      $classNamesCollection[] = basename($classFile, '.php');
    }

    return $classNamesCollection;
  }

  private function requireClassFiles(): void
  {
    foreach ($this->classFilesCollection as $classFile) {
      require_once $classFile;
    }
  }

  private function setClassFiles(): void
  {
    $classFilesCollection = [];

    foreach (glob(__DIR__ . '/Blocks/*') as $file) {
      $this->classFilesCollection[] = $file;
    }
  }
}
