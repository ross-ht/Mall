<template>
   <tab-bar>
      <tab-bar-item path='/home' activeColor='deeppink'> <!-- 把字体颜色也封装出来，方便复用时改动 -->
        <img slot='item-icon' src="@/assets/img/tabbar/home.png" alt="">
        <img slot='item-icon-active' src="@/assets/img/tabbar/home_active.png" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot='item-icon' src="@/assets/img/tabbar/category.png" alt="">
        <img slot='item-icon-active' src="@/assets/img/tabbar/category_active.png" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <!-- <tab-bar-item path='/hot'>
        <img slot='item-icon' src="@/assets/img/tabbar/hot.png" alt="">
        <img slot='item-icon-active' src="@/assets/img/tabbar/hot_active.png" alt="">
        <div slot='item-text'>热门</div>
      </tab-bar-item> -->
      <tab-bar-item path='/cart'>
        <img slot='item-icon' src="@/assets/img/tabbar/cart.png" alt="">
        <img slot='item-icon-active' src="@/assets/img/tabbar/cart_active.png" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot='item-icon' src="@/assets/img/tabbar/profile.png" alt="">
        <img slot='item-icon-active' src="@/assets/img/tabbar/profile_active.png" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
      TabBar,
      TabBarItem
    }
}
</script>

<style>

</style>