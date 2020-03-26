<template>
  <div class="card bg-write p-3 mt-3">
    <div class="card-header d-flex pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-sandian"></i>
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
    icon: {type: String, require: true}
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
.card {
  border-bottom: 1px solid $border-color;
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>