<template>
  <div class="app-crumbs">
    <el-breadcrumb separator="/">
      <template v-for="crumb in crumbs">
        <el-breadcrumb-item
          v-if="crumb.name"
          :to="isExistMenu(crumb.menu) ? { path: crumb.path} : null"
          :key="crumb.path"
        >{{crumb.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script>
import { connect } from '@/lib'
import { MENU } from '../menu/menu'
import { splitPath, slicePath } from '@/utils'

export default connect(() => {
  return {
    menus: 'user/menus',
    crumbs: 'crumbs/crumbs'
  }
},
  {
    update: 'crumbs/update'
  }
)({
  name: 'app-crumbs',
  data() {
    return {
      MENU
    }
  },
  watch: {
    '$route'(to, from) {
      console.log(to);
    }
  },
  methods: {
    parseURL(url) {
      const urls = splitPath(url)
      const crumbs = []

      for (let i = 1; i < urls.length; i++) {
        const path = slicePath(urls, i + 1)
        const menu = _.find(this.MENU, { url: path })
        menu && crumbs.push({
          path,
          name: menu.name,
          menu: menu
        })
      }
      console.log(crumbs, '哈哈哈');
      this.update(crumbs);
    },

    /**
     * 判断当前菜单是否可点击
     * 如果当前菜单下有子菜单，则该面包屑不能点击
     * 默认返回true，可以进行点击
     */
    isExistMenu(menus) {
      let isExistMenu = true
      if (menus && menus.pid != 0 && _.isArray(menus.menus)) {
        menus.menus.forEach(menu => {
          if (menu.isMenu && menu.pid != 0) {
            isExistMenu = false
          }
        })
      }
      return isExistMenu
    }
  },
  created() {
    this.parseURL(this.$route.path)
  }
})
</script>
<style lang="less">
.app-crumbs {
  display: inline-block;
}
</style>

