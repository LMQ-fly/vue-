<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 3">
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
                    <!-- 已完成 -->
                   <div>商品评价</div>
                       <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />              
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 3); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            console.log(this.lists.length)
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        },
        data(){
            return{
                   value: 2.5,
            }
        }
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