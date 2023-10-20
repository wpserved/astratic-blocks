const mix = require('laravel-mix');
const path = require('path');

Mix.manifest.refresh = (_) => void 0;
const rootPath = path.join(__dirname);
const pluginResources = path.join(__dirname, 'resources');

mix.copy(`${rootPath}/astratic-blocks.php`, `build/`);
mix.copy(`${rootPath}/readme.txt`, `build/`);
mix.copy(`${rootPath}/readme.md`, `build/`);
mix.copyDirectory(`${rootPath}/inc`, `build/inc`);
mix.copyDirectory(`${rootPath}/src`, `build/src`);
mix.copyDirectory(`${rootPath}/vendor`, `build/vendor`);
mix.copyDirectory(`${rootPath}/dist`, `build/dist`);
mix.copyDirectory(`${pluginResources}/views`, `build/resources/views`);
mix.copyDirectory(`${pluginResources}/lang`, `build/resources/lang`);
mix.copyDirectory(`${pluginResources}/patterns`, `build/resources/patterns`);