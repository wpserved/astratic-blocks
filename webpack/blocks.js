const fs = require('fs')
const path = require('path')

module.exports = dirname => {
  const blocksAssets = new Array()
  const blocksPath = path.join(dirname, 'resources', 'assets', 'blocks')
  const blocks = fs.readdirSync(blocksPath).filter(el => '.' !== el.charAt(0))

  blocks.forEach(block => {
    blocksAssets[block] = new Array()
    const basePath = path.join(dirname, 'resources', 'assets', 'blocks', block)
    const files = [
      './script.jsx',
      './script.editor.jsx',
      './script.view.jsx',
      './style.scss',
      './style.editor.scss',
      './style.view.scss',
    ].filter(file => {
      return fs.existsSync(path.join(basePath, file))
    }).forEach(el => {
      blocksAssets.push(path.join('resources', 'assets', 'blocks', block, el))
    })
  })
  return blocksAssets
};
