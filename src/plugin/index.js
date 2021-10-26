import { subscribe, publish, dispatch, cancel, broadcast, listen, trigger } from './event'
import { remove } from './array'
import ajax from './ajax'
import {
  date,
  format2Date,
  format2Time
} from './date'
import {
	capitalize,
	uppercase,
	lowercase,
	currency,
	json
} from './filters'
import { errSrc, focus } from './directives/dom'
import clickOutside from './directives/clickOutside'


const plugin = {

	install: (Vue, option) => {

		// register services
		Vue.prototype.$subscribe = subscribe
		Vue.prototype.$publish = publish
    Vue.prototype.$cancel = cancel
		Vue.prototype.$dispatch = dispatch
		Vue.prototype.$broadcast = broadcast
		Vue.prototype.$listen = listen
		Vue.prototype.$trigger = trigger
		Vue.prototype.$remove = remove
    Vue.prototype.$ajax = ajax
    Vue.prototype.$date = date

		Vue.filter('capitalize', capitalize)
		Vue.filter('uppercase', uppercase)
		Vue.filter('lowercase', lowercase)
		Vue.filter('currency', currency)
		Vue.filter('json', json)
    Vue.filter('toDate', format2Date)
    Vue.filter('toTime', format2Time)

    // Vue.component('app-permission', permission)

    Vue.directive('focus', focus)
    Vue.directive('errSrc', errSrc)
    Vue.directive('clickOutside', clickOutside)

	}
}

export default plugin
