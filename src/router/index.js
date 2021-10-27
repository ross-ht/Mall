import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('@/views/home/Home')
const Category = ()=>import('@/views/category/Category')
// const Hot = ()=>import('@/views/hot/Hot')
const Cart = ()=>import('@/views/cart/Cart')
const Profile = ()=>import('@/views/profile/Profile')

//1.安装路由插件
Vue.use(VueRouter)

//2.创建路由对象
const routes=[
  {
    path:'',   //将特殊的路径放在最上方，方便寻找
    redirect:'/home' //重定向 默认跳转到主页
  },
  {
    path:'/home',
    name:'',
    component:Home,
    meta:{    // meta是元数据，全局导航守卫中更改页面title可以用 document.title=to.matched[0].meta.title,
      title:'首页'
    }
  },
  {
    path:'/category',
    name:'',
    component:Category
  },
  // {
  //   path:'/hot',
  //   name:'',
  //   component:Hot
  // },
  {
    path:'/cart',
    name:'',
    component:Cart
  },
  {
    path:'/profile',
    name:'',
    component:Profile
  },
]

const router =new VueRouter({
  routes,
  mode: 'history', //在mode属性下，将默认的hash模式改成h5的history模式，网址中就没有锚点了，
  linkActiveClass: 'active' //将路由活跃状态的时候的class名称定义为active,默认为'router-link-active'
})

//3.导出路由实例
export default router

