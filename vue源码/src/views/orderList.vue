<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
            v-model="active"
        />
        <van-tabs v-model="active">
            <van-tab title="全部订单" to="/orderList/orderAll"></van-tab>
            <van-tab title="待支付" to="/orderList/orderPay"></van-tab>
            <van-tab title="待收货" to="/orderList/orderGoods"></van-tab>
            <van-tab title="已完成" to="/orderList/orderEnd"></van-tab>
        </van-tabs>
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            }
        },  
        created(){
            //隐藏导航
            this.$store.state.orderList = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.orderList= true;
        }
    }
</script>

<style lang="scss" scoped>

</style>