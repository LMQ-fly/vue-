<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type == 1">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    desc="描述信息"
                    :title="value.name"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    >
                    </van-card>
                </div>
                <div class="orderfooter">
                        <!-- 待支付 -->
                        <van-button size="mini" type="primary" @click="onPay(index)">支付订单</van-button>
                        <van-button size="mini" type="danger" @click="onDel(index)">删除订单</van-button>
                        
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
            this.lists = dataList.filter(item=>item.type == 1); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
            onPay(index){
                // let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; //切换支付后收货类型，调用支付接口
                Toast('修改待收货');
            },
            onDel(index){
                this.lists[index].type = 6; //修改一个没有类型删除
                Toast('删除数据');
            }
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
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