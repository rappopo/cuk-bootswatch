'use strict'

module.exports = function(cuk) {
  const { _, globby, helper, path, fs } = cuk.lib

  let common = {
    skinName: 'Bootswatch',
    fluidContainer: false,
    useCdn: true,
    navbar: "fixed-top navbar-dark bg-primary"
  }

  return new Promise((resolve, reject) => {
    let dir = path.join(cuk.pkg.bootswatch.dir, 'node_modules', 'bootswatch', 'dist')
    if (!fs.existsSync(dir))
      dir = path.join(cuk.dir.app, 'node_modules', 'bootswatch', 'dist')
    let dirs = _.map(globby.sync(dir + '/*', {
      onlyDirectories: true
    }), d => {
      return path.basename(d)
    })

    common.defaultTheme = 'minty'
    common.themes = dirs
    resolve({
      common: common
    })

  })
}
