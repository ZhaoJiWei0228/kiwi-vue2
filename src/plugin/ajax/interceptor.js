import Ajv from 'ajv'
import {error, status} from './enum'
import responseSchema from './schema'

const ajv = new Ajv() // Schema Validator

/**
 * Schema Validator
 *
 * @param  {[type]}   response [description]
 * @param  {Function} next     [description]
 * @return {[type]}            [description]
 */
function formatIntercepter(response, next) {
  const valid = ajv.validate(responseSchema, response)

  if (!valid) {

    return error.FORMAT
  }
  return next()
}

/**
 * Code verify
 *
 * @param  {[type]}   response [description]
 * @param  {Function} next     [description]
 * @return {[type]}            [description]
 */
function codeIntercepter(response, next) {
  const { code } = response.data

  if (code !== status.SUCCESS) {

    return error.SERVER
  }

  return next()
}

function loginIntercepter(response, next) {
  const datas = response.data,
        errno = datas.code
  if (errno == 1003 && datas.data && datas.data.url) {

    //  跳转到登陆页面
      const url = datas.data.url
      location.href = url
  } else {
    return next()
  }
}

export {
  loginIntercepter,
  formatIntercepter,
  codeIntercepter
}
