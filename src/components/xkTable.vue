<template>
    <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="imager" label="imager">
          </el-table-column>
          <el-table-column prop="name" label="name">
          </el-table-column>
          <el-table-column prop="count" label="count">
          </el-table-column>
          <el-table-column prop="module" label="module">
          </el-table-column>
          <el-table-column prop="size" label="size">
          </el-table-column>
    </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        imager: 'imager1',
        name: 'IMG1',
        count: '3',
        module: '_main_',
        size: '130KB'
      }, {
          imager: 'imager2',
          name: 'IMG2',
          count: '30',
          module: '_main_',
          size: '300KB'
      }, {
          imager: 'imager3',
          name: 'IMG3',
          count: '13',
          module: '_main_',
          size: '1000KB'
      }, {
          imager: 'imager4',
          name: 'IMG4',
          count: '36',
          module: '_main_',
          size: '100KB'
      }
    ]
    }
  }
}
</script>

<style lang="css">
</style>
