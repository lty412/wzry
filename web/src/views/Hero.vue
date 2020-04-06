<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black-1 py-2 px-3 d-flex ai-center">
      <img src="../assets/images/logo.png" height="30">
      <div class="px-2 flex-1 text-write">
        <span>王者荣耀</span>
        <span class="fs-xxs ml-3">攻略站</span>
      </div>
      <router-link tag="div" to="/" class="text-write">更多英雄 &gt;</router-link>
    </div>
    <div class="hero-banner" :style="{'background-image': `url(${model.banner})`}"> 
      <div class="info text-write p-3 h-100 d-flex flex-column jc-end">
        <div>{{model.title}}</div>
        <h2 class="my-2 fs-xxl">{{model.name}}</h2>
        <div>{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            
            <span>生存</span>
            <span class="badge bg-drak">{{model.scores.survive}}</span>
          </div>
          <router-link tag="span" to="/" class="fs-sm text-grey">皮肤：2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of banner -->

    <div>
      <div>
        <div class="nav bg-write px-3 d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
        <swiper>
          <swiper-slide>
            <div>
              <!-- 技能 -->
              <div class="bg-write p-3 border-bottom">
                <div class="d-flex">
                  <router-link tag="button" to="/" class="btn btn-lg flex-1 mr-2">
                    <i class="iconfont icon-caidan"></i>
                    英雄介绍视频
                  </router-link>
                  <router-link tag="button" to="/" class="btn btn-lg flex-1">
                    <i class="iconfont icon-caidan"></i>
                    英雄介绍视频
                  </router-link>
                </div>
                
                <!-- skills -->
                <div class="skills mt-4">
                  <div class="d-flex jc-around">
                    <img 
                      class="icon" 
                      :class="{active: currentSkillIndex === i}" 
                      @click="currentSkillIndex = i" 
                      :src="item.icon" 
                      v-for="(item, i) in model.skills" 
                      :key="i" 
                    />
                  </div>
                  <div v-if="currentSkill">
                    <div class="d-flex pt-4 pb-2">
                      <h3 class="m-0">{{currentSkill.name}}</h3>
                      <span class="text-grey-1 ml-4">
                        (冷却值：{{currentSkill.delay}}
                        消耗：{{currentSkill.cost}})
                      </span>
                    </div>
                    <p>{{currentSkill.description}}</p>
                    <div class="border-bottom"></div>
                    <p class="text-grey-1">小提示：{{currentSkill.tips}}</p>
                  </div>
                </div>
              </div>

              <!-- 出装推荐 -->
              <m-card plain icon="caidan" title="出装推荐" class="hero-items">
                <div class="fs-xl">顺风出装</div>
                <div class="d-flex jc-around text-center">
                  <div v-for="(item, i) in model.items1" :key="i">
                    <img :src="item.icon" alt="" class="icon mt-3 mb-1">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
                <div class="border-bottom my-3"></div>
                <div class="fs-xl">逆风出装</div>
                <div class="d-flex jc-around text-center">
                  <div v-for="(item, i) in model.items2" :key="i">
                    <img :src="item.icon" alt="" class="icon mt-3 mb-1">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
              </m-card>

              <!-- 使用技巧 -->
              <m-card plain icon="caidan" title="使用技巧">
                <p class="m-0">{{model.usageTips}}</p>
              </m-card>

              <!-- 对抗技巧 -->
              <m-card plain icon="caidan" title="对抗技巧">
                <p class="m-0">{{model.battleTips}}</p>
              </m-card>

              <!-- 团战思路 -->
              <m-card plain icon="caidan" title="团战思路">
                <p class="m-0">{{model.teamTips}}</p>
              </m-card>

              <!-- 英雄关系 -->
              <m-card plain icon="caidan" title="英雄关系">
                <div class="fs-xl">最佳搭档</div>
                <div class="d-flex pt-3" v-for="(item, i) in model.partners" :key="i">
                  <img :src="item.hero.avatar" alt="" height="50">
                  <p class="flex-1 m-0 ml-3">{{item.description}}</p>
                </div>
                <div class="border-bottom my-3"></div>

                <div class="fs-xl">被谁克制</div>
                <div class="d-flex pt-3" v-for="(item, i) in model.beRestrain" :key="i">
                  <img :src="item.hero.avatar" alt="" height="50">
                  <p class="flex-1 m-0 ml-3">{{item.description}}</p>
                </div>
                <div class="border-bottom my-3"></div>

                <div class="fs-xl">克制谁</div>
                <div class="d-flex pt-3" v-for="(item, i) in model.restrainWho" :key="i">
                  <img :src="item.hero.avatar" alt="" height="50">
                  <p class="flex-1 m-0 ml-3">{{item.description}}</p>
                </div>
              </m-card>

            </div>
          </swiper-slide>
          <swiper-slide></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },

  data() {
    return {
      model: null,
      currentSkillIndex: 0
    }
  },

  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex]
    }
  },

  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  },

  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.page-hero {
  .hero-banner {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    .scores {
      .badge {
        margin: 0 .25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: .6rem;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.2);
      }
    }
  }
  .skills {
    img.icon {
      width: 70px;
      height: 70px;
      border: 3px solid transparent;
      border-radius: 45%;
      &.active {
        border-color: map-get($colors, 'primary');
      }
    }
  }
  .hero-items {
    img.icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>