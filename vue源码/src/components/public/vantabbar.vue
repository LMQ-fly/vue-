<template>
    <div>
    <!-- 导航 -->
    <transition 
        mode="out-in" 
        :duration="{enter:400,leave:400}"
        enter-active-class="animated fadeIn"  
        leave-active-class="animated fadeOut">
        <router-view></router-view>
    </transition>
    <!-- <div class="box"> -->
      <van-tabbar v-model="$store.state.active" :route="true">
        <van-tabbar-item to="/home/recommend" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    <!-- </div> -->
    </div>
</template>
<script>
    export default{
        data() {
            return {
            }
        },
    }
</script>
<style lang="scss" scoped>
 #vanTabbar{
      z-index: 999;
      background-color: #fff;
    }
    </style>