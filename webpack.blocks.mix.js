/**
 * Development: Blocks
 *
 * @see https://laravel-mix.com/docs/4.0/
 * @author MC
 */

const mix = require('laravel-mix');

require('laravel-mix-merge-manifest');

mix.inWatch = () => process.argv.includes('--watch');
mix.inBuild = () => !process.argv.includes('--watch') && !mix.inProduction();

const path = require('path');
const parentDir = path.normalize(`${__dirname}/..`);
const merge = require('webpack-merge');
const desire = require('./webpack/desire');
const blocks = require('./webpack/blocks');
const config = merge(desire(`${__dirname}/resources/config`), desire(`${__dirname}/resources/config-local`));

/**
 * Disable OS notifications
 */
mix.disableNotifications();

/**
 * Merge manfiest file
 */
mix.mergeManifest();

/**
 * Setup default path for builded files
 */
mix.setPublicPath('dist');

/**
 * Source map options
 */
if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'inline-source-map'
  });
  mix.sourceMaps(false, 'inline-source-map');
}

/**
 * Include all files contained in "blocks" folder (might need restart if added new block)
 */
blocks(__dirname).forEach(block => {
  const ext = path.parse(block).ext;
  const filename = path.parse(block).name;
  const dir = path.parse(block).dir;
  const blockName = dir.split(path.sep).pop();
  if ('.jsx' === ext) {
    if (mix.inProduction()) {
      mix.react(path.join(__dirname, block), path.join('blocks', blockName, `${filename}.js`)).babel(path.join('dist', 'blocks', blockName, `${filename}.js`), path.join('dist', 'blocks', blockName, `${filename}.js`));
    } else {
      mix.react(path.join(__dirname, block), path.join('blocks', blockName, `${filename}.js`));
    }
  }
  if ('.scss' === ext) {
    mix.sass(path.join(__dirname, block), path.join('blocks', blockName, `${filename}.css`));
  }
})

/**
 * Enable file versioning on production task
 */
if (mix.inProduction()) {
  mix.version()
}

mix.browserSync({
  proxy: config.devUrl,
  files: config.watch,
  open: config.open
})
