

<template>
  <div class="container">
    <div class="header">登录日志</div>
    <div class="search">
      <el-input v-model="form.username"/>
      <el-button
          type="primary"
          @click="currentChange(1)"
      >查询
      </el-button>
    </div>
    <el-table border :data="tableData">
      <el-table-column
          prop="id"
          label="ID"
      />
      <el-table-column
          prop="username"
          label="用户名"
      />
      <el-table-column
          prop="lastLoginIpAt"
          label="最后一次登录IP"
      />

      <el-table-column
          prop="lastLoginAt"
          label="最后一次登录时间"
      />
      <el-table-column
          prop="loginCount"
          label="剩余登录次数"
      />
      <el-table-column
          prop="remake"
          label="登录信息"
      />
    </el-table>
    <el-pagination
        background
        layout="total,prev, pager, next"
        :page-size="form.limit"
        :current-page="form.page"
        :total="total"
        @current-change="currentChange"
    />
</div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
import { getLoginLogList } from "@/api/loginLog.ts";

const form = reactive({
  page:1,
  limit:10,
  username:''
})
const total = ref(0)
const tableData = ref([])
onMounted(async()=>{
  await currentChange(1)
})

const currentChange = async (page: number) => {
  form.page = page
  const res = await getLoginLogList(form)
  tableData.value = res.data.records
  total.value = res.data.total
}
</script>
<style scoped>

</style>
