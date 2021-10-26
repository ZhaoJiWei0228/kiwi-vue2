<template>
  <div class="app-menu">
    <el-menu
      :collapseTransition="false"
      :collapse="!fullScreen"
      :default-active="activeIndex"
      :background-color="menuTheme.bg"
      :text-color="menuTheme.color"
      class="el-menu-vertical-demo">
      <template v-for="(menu, index) in MENU" >
        <!-- 判断menu是否包含子菜单 -->
        <el-submenu :index="menu.name + ''" v-if="menu.menus && menu.menus.length > 0 && isExistMenu(menu.menus)" :key="index">
          <template slot="title">
            <i v-if="menu.icon" class="app-menu__icon iconfont" :class="'icon-' + menu.icon"></i>
            <span class="app-menu__title" slot="title">{{ menu.name }}</span>
          </template>
          <el-menu-item v-for="(submenu, i) in menu.menus"  :key="i" :index="submenu.name + ''" @click="redirectUrl(submenu)">
            <i v-if="submenu.icon" class="app-menu__icon iconfont" :class="'icon-' + submenu.icon"></i>
            <span class="app-menu__title" slot="title">{{ submenu.name }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.name + ''"  @click="redirectUrl(menu)" :key="index" v-else>
          <i v-if="menu.icon" class="app-menu__icon iconfont" :class="'icon-' + menu.icon"></i>
          <span class="app-menu__title" slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { connect } from '@/lib'
import { MENU } from './menu'

// import { slicePath } from 'utils'

export default connect(() => {
  return {
    fullScreen: 'fullScreen',
    theme: 'theme',
    menu: 'user/getMenusByApp'
  }
})({
	data() {
		return {
      MENU,
			isCollapse: false, // 菜单的展开或收起
      activeIndex: '' // 当前激活的菜单
		}
  },

  watch: {
    fullScreen() {
      this.setActiveMenu()
    },
    $route(val) {
      this.setActiveMenu(val.path)
    }
  },

  computed: {
    menuTheme() {
      if (this.theme === 'orange') {
        return {
          bg: '#3c3d45',
          color: '#777777'
        }
      }
      return {
        bg: null,
        color: null
      }
    }
  },

  methods: {

    /**
     * 判断子菜单中是否包含有菜单
     */
    isExistMenu(menus) {
      let isExistMenu = false
      if (menus && _.isArray(menus)) {
        menus.forEach(menu => {
          if (menu.isMenu) {
            isExistMenu = true
          }
        })
      }
      return isExistMenu
    },

    /**
     * 菜单跳转
     */
    redirectUrl(menu) {
      if (menu && menu.url && menu.url !== '#') {
        this.$router.push(menu.url)
      }
    },

    /**
     * 设置当前激活菜单
     */
    setActiveMenu(path) {
      this.activeIndex = ''
      let menuPath = path || this.$route.path
      this.cycleMenu(this.MENU, menuPath)
    },

    cycleMenu(menus, menuPath) {
      menus.forEach(item => {
        if (_.isArray(item.menus) && item.menus.length > 0 && this.isExistMenu(item.menus)) {
          this.cycleMenu(item.menus, menuPath)
        } else {
          if (menuPath.includes(item.url) && item.isMenu) {
            this.activeIndex = item.name + ''
          }
        }
      })
    }
  },

  mounted() {
    console.log(this.fullScreen, this.theme);

    this.setActiveMenu()
  }
})
</script>

<style lang="less">
  .app-menu {
    .el-menu-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__icon {
      font-size: 20px;
      margin-right: 10px;
    }
  }
</style>

