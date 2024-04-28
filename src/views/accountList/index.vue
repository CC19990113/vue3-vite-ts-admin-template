

<template>
  <div class="container">
    <div class="header">用户账号管理</div>
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
          prop="status"
          label="状态"
      >
        <template #default="{row}">
          <el-button :type="row.status === 1 ? 'success':'warning'" @click="handleUpdateStatus(row)">
            点击{{ row.status === 1 ? '禁用' : '启用' }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
          prop="createIpAt"
          label="创建IP"
      />
      <el-table-column
          prop="createBy"
          label="创建者"
      />
      <el-table-column
          prop="createTime"
          label="创建时间"
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
import { getUserList, updateUserStatus } from "@/api/accountList.ts";

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
  const res = await getUserList(form)
  tableData.value = res.data.records
  total.value = res.data.total
}

const handleUpdateStatus = (row:{id:number,status:number}) => {
  ElMessageBox.confirm(`确认要${row.status === 1 ? '禁用' : '启用'}该用户吗？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
    const data = {
      id:row.id,
      status:row.status === 1 ? 0 : 1
    }
    await updateUserStatus(data)
    ElMessage.success(`${row.status === 1 ? '禁用' : '启用'}成功`)
    await currentChange(1)
  })
}
</script>
<style scoped>

</style>
