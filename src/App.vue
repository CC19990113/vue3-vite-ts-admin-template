<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.el-table th {
  text-align: center !important;
  background: rgb(235, 239, 244) !important;
}

.container{
  box-sizing: border-box;
  padding: 20px;
}
.header {
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
}
.el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.search {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.search .el-input {
  width: 250px;
  height: 40px;
  margin-right: 5px;
}
.search .el-select {
  width: 250px;
  margin-right: 5px;
}
.search .el-select .el-select__wrapper{
  height: 40px;
}
.search .el-button {
  height: 40px;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.search .el-date-editor.el-input{
  height:40px;
}

footer {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}
</style>
<script setup lang="ts">
</script>
