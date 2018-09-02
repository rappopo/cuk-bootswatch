'use strict'

module.exports = function (cuk) {
  const { _, globby, helper, path, fs, config } = cuk.pkg.core.lib

  return new Promise((resolve, reject) => {
    let dir = path.join(cuk.pkg.bootswatch.dir, 'node_modules', 'bootswatch', 'dist')
    if (!fs.existsSync(dir))
      dir = path.join(cuk.dir.app, 'node_modules', 'bootswatch', 'dist')
    let dirs = _.map(globby.sync(dir + '/*', {
      onlyDirectories: true
    }), d => {
      return {
        id: 'bootswatch:' + path.basename(d),
        name: 'Bootswatch - ' + _.upperFirst(path.basename(d))
      }
    })



    resolve({
      cuks: {
        bootstrap: {
          themes: dirs
        }
      }
    })

  })
}
