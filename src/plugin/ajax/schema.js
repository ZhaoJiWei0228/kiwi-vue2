export default {
  'properties': {
    'data': {
      'type': 'object',
      'required': ['code', 'msg'],
      'properties': {
        'code': {
          'type': 'number'
        },
        'msg': {
          'type': 'string'
        },
        'data': {
          'type': ['object', 'array', 'string', 'null', 'number']
        }
      }
    }
  }
}
