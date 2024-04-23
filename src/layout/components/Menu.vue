<template>
  <el-menu
      router
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :default-active="router.currentRoute.value.fullPath == '/home' ? '/' : router.currentRoute.value.fullPath"
      :collapse="props.collapse">
    <template v-for="item in router.options.routes" :key="item.name">
      <template v-if="!item.meta?.hidden">
        <el-menu-item v-if="item.path=='/'" :index="item.path">
          <el-icon>
            <component :is="item.meta!.icon"/>
          </el-icon>
          <span>{{ item.meta!.title }}</span>
        </el-menu-item>


        <template v-else-if="item.children!.length != 0 && item.children!.filter(it => !it.meta?.hidden).length > 0">
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon>
                <component :is="item.meta?.icon"/>
              </el-icon>
              <span>{{ item.meta!.title }}</span>
            </template>
            <template v-for="items in item.children" :key="items.name">
                <a :href="'#' + items.path">
                  <el-menu-item v-if="!items.meta?.hidden" :index="items.path">
                    <el-icon>
                      <component :is="items.meta?.icon"/>
                    </el-icon>
                    {{ items.meta!.title }}
                  </el-menu-item>
                </a>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import router from '@/router/index'

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
})

</script>

<style lang="scss" scoped>
.el-menu-item {
  overflow: hidden;
  transition: border-color .3s, background-color .3s, color .3s;
}

.el-menu {
  margin-top: 50px;
  .el-menu-item.is-active {
    background: linear-gradient(to right, rgba(56, 108, 253, 0.1), rgba(56, 108, 253, 0)) !important;

    &::before {
      content: "";
      position: absolute;
      height: 56px;
      width: 4px;
      left: 0;
      background: #ffd04b;
    }

  }

  border-right: 0;
}

a {
  text-decoration: none;
}
</style>
