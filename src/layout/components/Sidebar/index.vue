<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="true" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
      <div v-for="route in permission_routes" :key="route.path">
        <sidebar-item  :item="route" :base-path="route.path" v-if="!route.path.includes('permission')&&!route.path.includes('charts')&&!route.path.includes('icon')&&route.path!=='/tab'&&!route.path.includes('error')&&!route.path.includes('inline-edit-table')&&!route.path.includes('markdown')&&!route.path.includes('drag-select')&&!route.path.includes('example')&&!route.path.includes('excel')"/>
      </div>
        
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
