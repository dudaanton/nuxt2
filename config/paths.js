const { resolve } = require('path')

const root = resolve(process.cwd())

module.exports = {
  root,
  app: resolve(root, 'app'),
  static: resolve(root, 'static'),
  icons: {
    src: resolve(root, 'icons/src'),
    dist: resolve(root, 'icons/dist')
  },
  public: resolve(root, 'public'),
  config: resolve(root, 'config')
}
