Case Converter is a small library for converting strings from one case to
another. It handles, as both input and output:

- camelCase
- PascalCase
- snake_case
- kebab-case
- Title Case

Installation:

With Composer:

```
$ composer require joachim-n/case-converter
```

Usage:

```
$output = \CaseConverter\CaseString::INPUTFORMAT('MyString')->OUTPUTFORMAT();
```

For example:

```
$output = \CaseConverter\CaseString::camel('MyString')->pascal();
$output = \CaseConverter\CaseString::camel('MyString')->snake();
$output = \CaseConverter\CaseString::camel('MyString')->kebab();
$output = \CaseConverter\CaseString::snake('my_string')->camel();
$output = \CaseConverter\CaseString::snake('my_string')->pascal();
$output = \CaseConverter\CaseString::snake('my_string')->kebab();
```

If your input string is in a format that requires custom splitting, you can
pass the pieces to StringAssembler for output. For example:

```
$output = (new \CaseConverter\StringAssembler(['my', 'string']))->camel();
```
