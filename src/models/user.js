/**
 *
 * 用户信息
 */

import { getUserInfo, firstTimeLoginMonthly, questionnaireResult } from '@/services/user'

export default {

  namespace: 'user',

  state: {
    user: {
      username: '',
      realname: '',
      deptName: '',
      email: '',
      roles: [],
      menuAuth: []
    }
  },

  getters: {

    /**
     * 获取无层级菜单集合
     */
    menus: ({ user }) => {
      const ret = []
      const next = user.menuAuth.slice()

      while (next.length) {
        const menu = next.shift()
        const subMenu = menu.menus ? menu.menus.slice() : null

        ret.push(menu)
        if (Array.isArray(subMenu)) {
          while (subMenu.length) {
            next.push(subMenu.shift())
          }
        }
      }
      return ret
    },

    /**
     * 获取菜单hash对象
     */
    menuMap: ({ user }) => {
      const ret = {}
      const next = user.menuAuth.slice()

      while (next.length) {
        const menu = next.shift()
        const subMenu = menu.menus ? menu.menus.slice() : null

        ret[menu.url] = menu
        if (Array.isArray(subMenu)) {
          while (subMenu.length) {
            next.push(subMenu.shift())
          }
        }
      }
      return ret
    },

    /**
     * 用户可访问app
     */
    apps: ({
      user
    }) => {
      return user.menuAuth.map(app => {
        return {
          name: app.name,
          url: app.url
        }
      })
    },

    /**
     * 根据app获取子菜单
     */
    getMenusByApp: ({ user }) => (app) => {
      if (app === undefined) return user.menuAuth;
      if (app === null) return user.menus
      const appMenu = _.find(user.menuAuth, { url: app })

      return appMenu ? appMenu.menus : []
    }
  },

  // 定义状态如何变化
  mutations: {
    fillData(state, user) {
      state.user = user
    }
  },

  // 暴露方法
  actions: {
    async getUserInfo({ commit, state }) {
      const { data } = await getUserInfo()

      commit('fillData', data)
    },
    async firstTimeLoginMonthly(action, param) {
      return await firstTimeLoginMonthly(param)
    },
    async questionnaireResult(action, param) {
      return await questionnaireResult(param)
    }
  }
}
