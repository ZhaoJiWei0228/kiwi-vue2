const spawn = require('child_process').spawn
const fs = require('fs')
const crypto = require('crypto')

function getHash(filename) {
  return new Promise(resolve => {
    const md5sum = crypto.createHash('md5')
    const stream = fs.ReadStream(filename)
    stream.on('data', function(d) {
      md5sum.update(d)
    })

    stream.on('end', function() {
      const d = md5sum.digest('hex')
      resolve(d)
    })
  })
}

function buildPrerelease() {
  return new Promise(resolve => {
    const build = spawn('yarn', ['run', 'build:prerelease'], {
      stdio: 'inherit'
    })

    // 注册子进程关闭事件
    build.on('exit', function(code, signal) {
      spawn('zip', ['-r', `dist.test.zip`, 'dist'], {
        stdio: 'inherit'
      }).on('exit', () => {
        resolve()
      })
    })
  })
}

function buildProduction() {
  return new Promise(resolve => {
    const build = spawn('yarn', ['run', 'build'], {
      stdio: 'inherit'
    })

    // 注册子进程关闭事件
    build.on('exit', function(code, signal) {
      spawn('zip', ['-r', `dist.prod.zip`, 'dist'], {
        stdio: 'inherit'
      }).on('exit', () => {
        resolve()
      })
    })
  })
}

buildPrerelease()
  .then(() => getHash('dist.test.zip'))
  .then(hashStr => {
    fs.rename('dist.test.zip', `dist.test.${hashStr}.zip`, err => {
      err & console.log(err)
    })
    console.log('dist.test.zip: ', hashStr)
    return buildProduction()
  })
  .then(() => getHash('dist.prod.zip'))
  .then(hashStr => {
    fs.rename('dist.prod.zip', `dist.prod.${hashStr}.zip`, err => {
      err & console.log(err)
    })
    console.log('dist.prod.zip: ', hashStr)
  })
