<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  /* @import url(./assets/css/base.css);子组件里的style不能用@import，会报错 */

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100,0.1);
    font-size: 14px;
  }
</style>