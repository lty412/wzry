<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom ai-center">
      <div class="iconfont icon-fanhui2 text-blue back"></div>
      <strong class="flex-1 text-ellipsis fs-lg text-blue mx-1">
        {{model.title}}
      </strong>
      <div class="fs-xs text-grey">
        2019-03-28
      </div>
    </div>
    <div v-html="model.body" class="px-3 body"></div>

    <!-- 关联文章 -->
    <div class="my-5 px-3">
      <div class="mb-3">
        <i class="iconfont icon-caidan"></i>
        <strong class="ml-2 text-blue fs-lg">相关资讯</strong>
      </div>
      <div class="d-flex ai-center" v-for="(item, i) in model.related" :key="i">
        <router-link class="py-1 text-ellipsis flex-1" tag="div" :to="`/articles/${item._id}`">{{item.title}}</router-link>
        <span class="fs-sm text-grey">{{item.createdAt | date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('YYYY-MM-DD')
    }
  },

  props: {
    id:{ required: true }
  },

  data() {
    return {
      model: null
    }
  },

  watch: {
    id: 'fetch'
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },

  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.back {
  font-size: 1.6923em;
}
.body {
  img {
    max-width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height:auto;
  }
}
</style>
