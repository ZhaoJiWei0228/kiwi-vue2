import ajax from '@/plugin/ajax'

export function getUserInfo() {
  return ajax.get('user/menus')
}

export function firstTimeLoginMonthly() {
  return ajax.get('satisfaction/firstTimeLoginMonthly')
}

export function questionnaireResult(params) {
  return ajax.post('satisfaction/questionnaireResult', params)
}
