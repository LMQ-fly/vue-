<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 地址 -->
        <div @click="addressfun">
            <van-contact-card 
            :type="cardType" 
            :name="name" 
            :tel="tel" 
            add-text="添加联系人"
            :editable="false" />
        </div>
        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            desc="① 骁龙865旗舰平台，双模5G，用久了也不卡
            ② 向往的生活同款手机，1亿像素8K电影相机
            ③ 6.67英寸 AMOLED 双曲面屏幕，刷新屏幕新体验"
            :title="item.name"
            thumb="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494372.61732687.jpg"
            />
        </div>

        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单" @submit="onsubmit" />
        
        <!-- 意外保险 -->
        <div class="insurance">
            <div class="i1"><img src="//s1.mi.com/m/images/m/insurance.png" alt="" ></div>
            <div class="i2">
                 <div>意外保护 124元起</div>
            </div>
            <div class="i3">
               <div style="margin-left:5px">选购</div>                  
            </div>
        </div>
        <!-- 延长保修 -->
        <div class="insurance">
            <div class="i1"><img src="//s1.mi.com/m/images/m/insurance.png" alt="" ></div>
            <div class="i2">
                 <div>延长保修服务 79元</div>
            </div>
            <div class="i3">
               <div >选购</div>                 
            </div>
        </div>
        <!-- 云空间服务 -->
        <div class="insurance">
            <div class="i1"><img src="//s1.mi.com/m/images/m/insurance.png" alt="" ></div>
            <div class="i2">
                 <div>云空间服务 6元起</div>
            </div>
            <div class="i3">
               <div style="margin-left:7px">选购</div>                
            </div>
        </div>
        <!-- 小米[小爱老师]白色 -->
        <div class="insurance">
            <div class="i1"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222533.85047588.jpg" alt="" ></div>
            <div class="i2">
                 <div>小米[小爱老师]白色</div>
            </div>
            <div class="i3">
               <div style="margin-left:-2px">399 加价购</div>                  
            </div>
        </div>

         <!-- 小米[小爱老师]白色 -->
        <div class="insurance">
            <div class="i1"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222533.85047588.jpg" alt="" ></div>
            <div class="i2">
                 <div>小米 [小爱老师] 4G</div>
            </div>
            <div class="i3">
               <div style="margin-left:-2px">799 加价购</div>                  
            </div>
        </div>

        <!-- 温馨提示 -->
        <div class="insurance">
           <p style="color:#999999">温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
        </div>


        <!-- 猜你喜欢 -->
        <div>
            <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
        </div>

        

    </div>

</template>

<script>
    export default {
        data() {
            return {
              
                name:"",
                tel:""
            }
        },
        methods:{
            
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            // 定义跳转方法
            addressfun(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderList/orderAll")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格
            //隐藏导航
            this.$store.state.vanTabbar = false;
        }, 
    }
</script>
<style lang="scss" scoped>
    .insurance{
        display: flex;
        background-color: #ffffff;
        margin-top: 15px;
        padding: 10px;
        overflow: hidden;
    }
    .i1{
        line-height: 20px;
        width: 20px;
        height: 20px;
    }
    .i2{
        margin-left: 7px;
        line-height: 20px;

    }
    .i3{
        margin-left: 153px;
        color: #ff5722;
    }
   
</style>