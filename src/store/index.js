import * as types from './types'
import storage from './plugins/storage'
import { APP_THEME_BLACK, APP_LANG_ZH } from 'commons/constant'

const state = {
  theme: APP_THEME_BLACK,
  lang: APP_LANG_ZH,
  fullScreen: true,
  continueApprove: false
}
const mutations = {
  [types.THEME_UPDATE](state, theme) {
    state.theme = theme
  },
  [types.LANG_UPDATE](state, lang) {
    state.lang = lang
  },
  [types.FULL_UPDATE](state, fullScreen) {
    state.fullScreen = fullScreen
  },
  [types.CONTINUE_UPDATE](state, continueApprove) {
    state.continueApprove = continueApprove
  }
}
const getters = {}
const actions = {
  updateTheme: ({commit}, theme) => {
    commit(types.THEME_UPDATE, theme)
  },
  updateLang: ({commit}, lang) => {
    commit(types.LANG_UPDATE, lang)
  },
  updateFullScreen: ({commit, state}) => {
    commit(types.FULL_UPDATE, !state.fullScreen)
  },
  updateContinueApprove: ({ commit, state }) => {
    commit(types.CONTINUE_UPDATE, !state.continueApprove)
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
  plugins: [storage({
    persistence: ['fullScreen', 'lang', 'continueApprove']
  })]
}
