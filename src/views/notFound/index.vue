<template>
  <div class="boxx">
    <div>抱歉，您访问的页面不存在。</div>
    <el-button type="primary" @click="router.push('/')">返回首页</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped>
img {
  width: 350px;
}

div {
  margin: 50px 0;
  font-size: 26px;
  color: #909399;
}

.boxx {
  padding-top: 200px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.el-button {
  width: 100px;
  height: 50px;
}
</style>
