<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
            <div v-for="(value,key) in item.goodsList" :key="key">
                <van-card
                :num="value.num"
                :price="value.price"
                desc="① 骁龙865旗舰平台，双模5G，用久了也不卡
                    ② 向往的生活同款手机，1亿像素8K电影相机
                    ③ 6.67英寸 AMOLED 双曲面屏幕，刷新屏幕新体验"
                :title="value.name"
                thumb="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494372.61732687.jpg"
                >
            </van-card>
            </div>
            <div class="orderfooter">
                    <!-- 待支付 -->
                    <div v-if="item.type == 1">
                        <van-button size="mini" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                        <van-button size="mini" type="danger">删除订单</van-button>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.type == 2">
                        <van-button size="mini"  type="warning">退款申请</van-button>
                        <van-button size="mini"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                    </div>
                    <!-- 已完成 -->
                    <div v-else-if="item.type == 3" >             
                        <!-- <van-button size="mini" >商品评价</van-button> -->
                        <div class="judge">
                        商品评价</div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
    export default {
        created(){
            this.lists = this.$store.state.order.lists;
            this.typeList = this.$store.state.order.typeList;
        },
        methods:{
            onPay(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; //切换支付后收货类型，调用支付接口
            },
            onGoods(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货状态，
            }
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        },
        
    }
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
        }
    }
 
</style>
