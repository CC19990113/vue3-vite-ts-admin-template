<template>
  <div class="box">
    <el-form :model="loginForm" class="login-form">
      <el-form-item>
        <h3 class="title">后台</h3>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon size="20" class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            v-model.trim="loginForm.password"
            type="password"
            show-password
            placeholder="请输入密码"
        >
          <template #prefix>
            <el-icon size="20" class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" @keyup.enter="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Lock, User} from "@element-plus/icons-vue";
import useStore from "../../store";
import {loginType} from "@/store/modules/login.ts";
import {ElMessage} from "element-plus";
import {useRouter}  from "vue-router";
const router = useRouter()
const {login} = useStore()
const loginForm = ref<loginType>({
  username: '',
  password: ''
})
const submit = async () => {
  const res = await login.loginAction(loginForm.value)
  if (res.code === 200) {
    ElMessage.success('登录成功')
    await router.push('/')
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #999;
  background-size: cover;
  overflow: hidden;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;

    .el-form-item {
      &:first-child {
        border: 0;
      }

      border: 1px solid rgba(200, 200, 200, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      background: unset !important;
      border-radius: 5px;
      color: #454545;

      .title {
        font-size: 26px;
        color: #fff;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }

      .el-button {
        height: 40px;
        width: 100%;
        background: #386cfd;
        border-radius: 2px;
      }

      .el-input {
        height: 40px;
        background: transparent;
        .el-input__icon {
          color: #f9f9f9;
        }
        ::v-deep(.el-input__wrapper) {
          background: transparent;
        }



        ::v-deep(.el-input__inner) {
          color: #fff;
          &::placeholder {
            color:#f9f9f9;
          }
        }
      }
    }
  }
}
</style>
