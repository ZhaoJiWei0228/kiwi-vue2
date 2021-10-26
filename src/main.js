// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BayMax from '@/lib'
import store from './store'
import models from './models'
import _ from 'lodash'
import element from 'element-ui'
import plugin from './plugin'
import App from './App'
import routes from './routes'

/* eslint-disable no-new */
const app = new BayMax()
const { state, ...other } = store
app.plugin(element).plugin(plugin)
app.store({
  state: {
    ...state
  },
  ...other
})
app.router({
  base: '/'
}, routes)

_.each(models, (m) => {
  app.model(m.default);
});

app.bootstrap('#app', App)
