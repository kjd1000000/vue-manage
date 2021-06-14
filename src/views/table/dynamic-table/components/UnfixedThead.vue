<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="formThead">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        {
          name: 'frue12eit-1',
          apple: '123we',
          banana: '12ew-10',
          orange: 'ore21eange-10'
        },
        
      ],
      formThead: ['apple', 'banana']
    }
  }
}
</script>
