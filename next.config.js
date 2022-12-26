const { i18n } = require('./next-i18next.config')
const path = require('path')

module.exports = {
  i18n,
  distDir: 'build',
  env:{
    REACT_APP_FILESTACK_APIKEY: process.env.REACT_APP_FILESTACK_APIKEY,
  }
}