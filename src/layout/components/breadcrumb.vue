<template>
  <el-breadcrumb separator="/">
    <TransitionGroup name="breadcrumb">
      <el-breadcrumb-item key="1" :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in routers" :key="new Date()" :to="{ path: item?.path }">{{ item?.meta.title
      }}</el-breadcrumb-item>
    </TransitionGroup>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

// 面包屑
const routers = computed(() => {
  // 过滤掉没有meta的
  return router.currentRoute.value.matched.filter((item) => item.meta.breadcrumb)
})

</script>

<style lang="scss" scoped></style>

<style>
.breadcrumb-move,
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.8s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
