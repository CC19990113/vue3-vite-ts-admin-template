<template>
  <div class="common-layout">
    <el-container :class="{ hideAside: collapse, showAside: true }">
      <el-aside>
        <div class="aside-logo">
          <Transition name="fade-title">
            <router-link v-if="collapse" to="/">后台</router-link>
          </Transition>
          <Transition name="fade-title">
            <router-link v-if="!collapse" to="/">管理后台</router-link>
          </Transition>
        </div>
        <Menu :collapse="collapse" />
      </el-aside>
      <el-container>
        <el-header>
          <div class="head">
            <div class="toggle" @click="collapse = !collapse">
              <el-icon v-if="collapse">
                <Expand />
              </el-icon>
              <el-icon v-else>
                <Fold />
              </el-icon>
            </div>
            <breadcrumb />
          </div>
          <div class="user" @click="dropdown.handleOpen()">
            <span>欢迎{{ login.name }} ！</span>
            <el-icon>
              <CaretBottom />
            </el-icon>
            <el-dropdown trigger="click" ref="dropdown">
              <span></span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <div class="heade">
          </div>
          <Suspense>
            <router-view v-slot="{ Component }">
              <Transition name="fade-view">
                  <component class="view" :is="Component" />
              </Transition>
            </router-view>
          </Suspense>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue'
import breadcrumb from './components/breadcrumb.vue';
import { ref } from 'vue';
import { removeName, removeSuper, removeToken } from '@/utils/tools';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus'
import useStore from '@/store';
import { CaretBottom, Expand, Fold } from "@element-plus/icons-vue";

const {login} = useStore()
const collapse = ref(false)
const router = useRouter()
const dropdown = ref()
if (document.body.offsetWidth <= 1366) {
  collapse.value = true
}
window.addEventListener('resize', () => {
  collapse.value = document.body.offsetWidth <= 1366;
})
const loginOut = () => {
  ElMessageBox.confirm(
      '确定要退出登录吗?',
      'Warning',
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }
  )
      .then(async() => {
          removeToken()
          removeName()
        removeSuper()
          await router.push('/login')
          ElMessage({
            type: 'success',
            message: '退出成功',
          })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消',
        })
      })
}
</script>

<style lang="scss" scoped>
.aside-logo {
  position: fixed;
  left: 0;
  background-color: #545c64;
  height: 50px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  z-index: 100;
  transition: width .5s;
  a {
    position: absolute;
    text-decoration: none;
    color: #bfcbd9;
    font-size: 14px;
    font-weight: 600;
  }
}

.el-aside {
  transition: all .4s;
  position: fixed;
  left: 0;
  width: 240px;
  height: 100vh;
  background-color: #545c64;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.hideAside {
  .el-aside {
    width: 64px;
    .aside-logo{
      width: 64px;

    }
  }


  .el-header {
    margin-left: 64px;
    width: calc(100% - 64px);
  }

  .el-main {
    margin-left: 64px;
  }
}

.el-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 240px);
  transition: all .4s;
  margin-left: 240px;
  padding: 0;
  height: 50px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 21, 41, .08);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .head {
    display: flex;
    align-items: center;


    .toggle {
      height: 50px;
      width: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 21, 41, .08);
      }
    }

  }

  .user {
    height: 50px;
    min-width: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: end;
    transition: all .3s;
    line-height: 50px;
    padding: 0 20px;
    &:hover {
      background-color: rgba(0, 21, 41, .08);
    }

    span {
      display: inline-block;
      height: 50px;
    }
  }
}

.el-main {
  transition: all .4s;
  margin-left: 240px;
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #f8f8f8;
  padding: 0;
  position: relative;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.view {
  width: 100%;
  position: absolute;
}
</style>

<style>
.fade-title-enter-active,
.fade-title-leave-active {
  transition: opacity 0.3s ease;
}

.fade-title-enter-from,
.fade-title-leave-to {
  opacity: 0;
}

.fade-title-enter {
  transition: opacity 0.5s ease;
}
</style>

<style>
.fade-view-enter-active,
.fade-view-leave-active {
  transition: all 0.8s ease;
}

.fade-view-enter-from,
.fade-view-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-view-enter {
  transition: all 0.8s ease;
}
</style>
