'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8110"',
  OSS_PATH: '"https://guli-file-dxd.oss-cn-qingdao.aliyuncs.com"'
})
