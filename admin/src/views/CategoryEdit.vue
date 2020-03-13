<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="(item, index) in parents" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },

  data() {
    return {
      model: {},
      parents: []
    }
  },

  methods: {
    // 新建/编辑保存操作
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/categories/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/categories', this.model)
      }
      console.log('res:', res)
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      this.$router.push('/categories/list')
    },

    // 获取详情
    async fetch () {
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data
    },

    // 获取分类列表
    async fetchParents () {
      const res = await this.$http.get('rest/categories')
      this.parents = res.data
    },
  },

  created() {
    this.id && this.fetch()
    this.fetchParents()
  }
}
</script>