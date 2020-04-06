<template>
  <div class="card bg-write p-3 mt-3">
    <div class="card-header d-flex" :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2" :class="{'text-bold': plain}">{{title}}</div>
      <i class="iconfont icon-sandian-copy" v-if="!plain"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, require: true},
    icon: {type: String, require: true},
    plain: {type: Boolean}
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.card {
  border-bottom: 1px solid $border-color;
}
</style>