<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 2">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
                <div v-for="(value,key) in item.goodsList" :key="key"  >            
            <van-count-down style="margin-left:18px">还有</van-count-down>        
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /> <van-count-down>自动收货</van-count-down>  
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
                    <!-- 待收货 -->
                    <van-button size="mini"  type="warning">退款申请</van-button>
                    <van-button size="mini"  type="info" @click="onGoods(index)">已收货</van-button>
        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
    export default {
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 2); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
            onGoods(index){
                // let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货状态，
                Toast('修改已完成');
            }
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        },
         data() {
            return {
                time: 300 * 60 * 60 * 1000,
            };
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
    .van-count-down {
        display: inline;
    }
</style>