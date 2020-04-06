<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/5f8c4cc1b6cf04db1d83396f28dc2246.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/6b8a9046515ea4dd127070105069a134.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/61355fe276ff9b35a4943f8fe1b73f85.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icon bg-write mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="(n, index) in 10" :key="index">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icon -->

    <!-- 新闻资讯 -->
    <m-list-card icon="caidan" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-1">|</span>
          <span class="flex-1 text-dark-1 pr-2 text-ellipsis">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <!-- 英雄列表 -->
    <m-list-card icon="yingxiongbang" title="英雄列表" :categories="heroesCats">
      <template #items="{category}">
        <div class="hero-list d-flex flex-wrap">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="hero-item p-2 text-center" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <span>{{hero.name}}</span>
          </router-link>
        </div>
      </template>
    </m-list-card>
    
    <!-- 精彩视频 -->
    <m-list-card icon="yingxiongbang" title="精彩视频">
    </m-list-card>
    
    <!-- 图文攻略 -->
    <m-list-card icon="yingxiongbang" title="图文攻略">
    </m-list-card>
    
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroesCats: []
    }
  },

  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroesCats = res.data
    }
  },

  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
  .pagination-home {
    .swiper-pagination-bullet {
      background: map-get($colors, 'write');
      opacity: 1;
      border-radius: .153846rem;
      &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info');
      }
    }
  }
  .nav-icon {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
      width: 25%;
      border-right: 1px solid $border-color;
      &:nth-child(4n) {
        border-right: none;
      }
    }
  }
  .hero-list {
    margin: 0 -0.5rem;
    .hero-item {
      width:20%;
    }
  }
</style>