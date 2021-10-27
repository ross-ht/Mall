<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <!-- 给插槽套一层div来放判定属性,以免组件内容替换插槽时，属性丢失 -->
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {   //父组件MainTabBar.vue中传入path属性
    path: String,
    activeColor: {
      type: String,
      default:'deeppink'
    }
  },
  // data() {
  //   return {
  //     isActive:true
  //   }
  // },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1//判定当前处于活跃的组件是不是当前页面的组件 /home -> item1(/home)=true  /home -> item1(/cart)=false
      
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }

  .tab-bar-item img{
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>