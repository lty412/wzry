<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="(item, index) in categories" :key="index" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  props: {
    id: {}
  },

  components: {
    VueEditor
  },

  data() {
    return {
      model: {},
      categories: []
    }
  },

  methods: {
    // 在文本编辑器里面处理上传的图片
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    // 新建/编辑保存操作
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/articles', this.model)
      }
      console.log('res:', res)
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      this.$router.push('/articles/list')
    },

    // 获取详情
    async fetch () {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },

    // 获取分类列表
    async fetchCategories () {
      const res = await this.$http.get('rest/categories')
      this.categories = res.data
    },
  },

  created() {
    this.id && this.fetch()
    this.fetchCategories()
  }
}
</script>