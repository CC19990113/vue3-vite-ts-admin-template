

<template>
  <div class="container">
    <div class="header">登录日志</div>
    <div class="search">
      <el-input v-model="form.name"/>
      <el-button
          type="primary"
          @click="currentChange(1)"
      >查询
      </el-button>
    </div>
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

const form = reactive({
  page:1,
  limit:10,
  name:''
})
const total = ref(0)
const tableData = ref([])
onMounted(async()=>{
  await currentChange(1)
})

const currentChange = async (page: number) => {
  form.page = page
  const res = await xxxxxxxxxxx(form)
  tableData.value = res.data.list
  total.value = Number(res.data.pageInfo.count)
}
</script>
<style scoped>

</style>
