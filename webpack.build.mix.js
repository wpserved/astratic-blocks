/**
 * Build: Laravel Mix
 *
 * @see https://laravel.com/docs/5.8/mix
 * @author MC
 */

 const mix = require('laravel-mix');
 const path = require('path');
 
 Mix.manifest.refresh = (_) => void 0;
 const rootPath = path.join(__dirname);
 const pluginResources = path.join(__dirname, 'resources');
 
 mix.copy(`${rootPath}/astratic-blocks.php`, `build/astratic-blocks/`);
 mix.copy(`${rootPath}/readme.txt`, `build/astratic-blocks/`);
 mix.copy(`${rootPath}/readme.md`, `build/astratic-blocks/`);
 mix.copyDirectory(`${rootPath}/inc`, `build/astratic-blocks/inc`);
 mix.copyDirectory(`${rootPath}/src`, `build/astratic-blocks/src`);
 mix.copyDirectory(`${rootPath}/vendor`, `build/astratic-blocks/vendor`);
 mix.copyDirectory(`${rootPath}/dist`, `build/astratic-blocks/dist`);
 mix.copyDirectory(`${pluginResources}/views`, `build/astratic-blocks/resources/views`);
 mix.copyDirectory(`${pluginResources}/lang`, `build/astratic-blocks/resources/lang`);