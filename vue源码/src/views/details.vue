
<template>
    <div>
        <van-button class="arrowleftgo" @click="$router.go(-1)" plain hairline round icon="arrow-left" type="default" />
        <!-- 引入轮播图组件 -->
        <swiper :img="Images" class="img"></swiper>

        <div class="panel">
            <div class="price">￥{{goods.price}}</div>
            <h1>{{goods.name}}</h1>
            <div class="content">
                <font color="#ff4a00">「分期享12期免息，低至417元起/期」</font>向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC
            </div>       
          

            <!-- 套餐推荐 -->
             <div class="insurance">
                <div class="i1">已选</div>
                <div class="i2">
                    <div>小米10 8GB+256GB </div>
                </div>
                <div class="i4">
                <div style="margin-left:1px"><span class="iconfont icon-jiantou1" 
                ></span></div>                     
                </div>
            </div>

        
         
            <div class="insurance">
                <div class="i1">送至</div>
                <div class="i2">
                    <div>北京市 东城区 </div>
                </div>
                <div class="i4">
                <div style="margin-left:35px"><span class="iconfont icon-jiantou1" 
                ></span></div>                     
                </div>
            </div>

            <div class="insurance">
                <div class="i1" >小米自营</div>
                <div class="i2">
                    <div >小米发货</div>
                </div>
                <div class="i4">
                <div style="margin-left:37px"><span class="iconfont icon-jiantou1"  ></span></div>                     
                </div>
            </div>
             
        </div>
        <!-- 商品介绍 -->
        <div >
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d2589c76f2b822abfd0295c4d52b616.jpg?w=1080&h=300&bg=1A685A" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c800f765b6b795094659f413e289ba0.jpg?w=1080&h=218&bg=FEFEFE" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/95a3019200c600fb583e72a7893842c3.jpg?w=1080&h=1885&bg=FFFFFF" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1318c513d90fc9f609b3be0033bcb381.jpg?w=1080&h=834&bg=FFFFFF" alt="">
        </div>

        <van-goods-action>
          
            <van-goods-action-icon 
                icon="chat-o" 
                color="#07c160"
                @click="showPopup"
            /> 
             <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                <h1 style="font-size:20px; color:#222222">
                 小米商城在线人工客服（24小时）：
                </h1>
                <h1 style="font-size:20px; color:#222222">小米商城热线人工客服每天8:00-18:00（电视每天8：00-21：00）：400-100-5678                 
                </h1>
                <button style="width:92px;height:28px ;color:#0086cf ;background-color:white ;border:1px solid #c6c6c6">已解决</button>
                <button style="width:92px;height:28px ;color:#0086cf ;background-color:white ;border:1px solid #c6c6c6 ; margin-left:190px">未解决</button>
                <input type="text" placeholder="我想问" class="mc-submi">
                <div class="chat-footer">
                    <span>隐私政策</span>
                    <span style="margin-left:15px">转在线人工客服</span>
                </div>
                </van-popup>
            <van-goods-action-icon 
            @click="$router.push('/home/recommend')"
            icon="home-o"  
            color="#07c160"
            />            
            <van-goods-action-icon 
            @click="$router.push('/cart')"
            icon="cart-o" 
            :badge="num"
            />   
            <van-goods-action-icon icon="star" color="#ff5000" />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买"  @click="$router.push('/cart')"/>
        </van-goods-action>
     
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const {mapState,mapMutations} = createNamespacedHelpers("cart");
    import swiper from "../components/public/swiper";
    // 引入商品规格
    import Vue from 'vue';
    import { Sku } from 'vant';
    Vue.use(Sku);
   
    export default {
        data() {
            return {
                active:0,
                show: false,
                Images:[
                    require("../assets/img/小米10.jpg"),
                    require("../assets/img/小米102.jpg"),
                    require("../assets/img/小米103.jpg"),
                    require("../assets/img/小米104.jpg"),
                ],
                goods:{
                    id:6,
                    name:"小米10",
                    price:"4999",
                    num:1
                }
                
                
            }
        },
        methods:{
            // 直接调用vuex里面方法
            ...mapMutations(["add"]),
            showPopup() {
                this.show = true;       
            }, 
         },
          
        computed:{
            ...mapState({
                num:state=>state.num
            })
        },
        components:{
            swiper,
        },
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },  
       
       
    }
    
    
</script>

<style lang="scss" scoped>
    .arrowleftgo{
        position:fixed;
        left:10px;
        top:10px;
        z-index: 200;
        font-size: 16px;
        width: 44px;
    }
    .panel{
        padding: 15px 15px 0px 15px;
        h1{
            font-size: 24px;
        }
        .content{
            font-size:14px;
        }
        .price{
            color:#ff6b00;
            font-size: 28px;
        }
    }
    
     .insurance{
        display: flex;
        background-color: #ffffff;
        padding: 10px;
        overflow: hidden;

    }
    .i1{
        line-height: 20px;
        
    }
    .i2{
        margin-left: 8px;
        line-height: 20px;

    }
    .i3{
        margin-left: 10px;
    }
    .i4{
        margin-left: 153px;
        color: #ff5722;
    }
    .icon-jiantou1{
        font-size: 14px;
        line-height: 20px;
    }
    .mc-submi{
        width: 298px;
        -webkit-border-radius: 0 0 6px 6px;
        border-radius:50px;
        padding: 10px;
        /* height: 30px; */
        background-color: #EDEEF0;
        border: 1px solid #c6c6c6;
        background: -webkit-linear-gradient(#EDEEF0, #CECFD1) repeat scroll 0 0 rgba(0, 0, 0, 0);
        background: linear-gradient(#EDEEF0, #CECFD1) repeat scroll 0 0 rgba(0, 0, 0, 0);
        transition: bottom 0.5s ease-in-out 0s;
        position: relative;
        margin-top: 100px;
        margin-left:28px;
        
        zoom: 1;
    }
    .chat-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0;
        z-index: 2;
        height: 50px;
        padding: 8px 0;
        line-height: 30px;
        color: #8c8c8c;
    
    }
 
</style>