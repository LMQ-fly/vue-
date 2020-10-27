<template>
    <div>
        <!-- 轮播图 -->
        <swiper :img="Images">
            
        </swiper>
        <!-- 分类 -->
       <router-link to="/details" v-model="active">
            <van-grid :column-num="5">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152" alt="" class="tupian">
                <img src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp" alt="" class="tupian">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp" alt=""  class="tupian">
            <img src="//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp" alt="" class="tupian">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152" alt="" class="tupian">

            </van-grid>
       </router-link>
        <!-- 分类 end -->
     
        <router-link to="/details" v-model="active">
            <!-- 商品列表 -->
            <div class="goodslist">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?thumb=1&w=720&h=280" alt="">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440" alt="" style="margin-top:8px">
            </div>
        </router-link>

        <div class="list_two ">
            <router-link to="/details" tag="a" v-model="active" v-show="$store.state.vanTabbar">
                <div class="top">
                    <img src="../../assets/img/recom1.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米10 Pro</div>
                    <div class="brief">骁龙865 / 50倍变焦</div>
                    <div class="price">￥4999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a" v-model="active">
                <div class="top">
                    <img src="../../assets/img/recom2.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi K30 5G</div>
                    <div class="brief">双模5G，120Hz流速屏</div>
                    <div class="price">￥3999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details" tag="a" v-model="active">
                <div class="top">
                    <img src="../../assets/img/recom3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="brief">6400万全场景四摄</div>
                    <div class="price">￥1599<span>起</span>
                        <span class="price old"><s>￥1699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a" v-model="active">
                <div class="top">
                    <img src="../../assets/img/recom4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi K30 5G</div>
                    <div class="brief">双模5G，120Hz流速屏</div>
                    <div class="price">￥1999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details" tag="a" v-model="active">
                <div class="top">
                    <img src="../../assets/img/recom5.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="brief">6400万全场景四摄</div>
                    <div class="price">￥1299<span>起</span>
                        <span class="price old"><s>￥1399</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a"  v-model="active">
                <div class="top">
                    <img src="../../assets/img/recom6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8</div>
                    <div class="brief">千元4800万四摄</div>
                    <div class="price">￥899<span>起</span>
                        <span class="price old"><s>￥999</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        
        <!-- 商品列表end -->
        <div>
            <img src="//i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp" alt="">
        </div>
       
        <vantabber></vantabber>
        
    </div>
 
</template>

<script>
 import vantabber from "../../components/public/vantabbar.vue";
import swiper from "../../components/public/swiper";


    export default {
        data() {
            return {
               
                Images:[
                    require("../../assets/img/banner01.jpg"),
                    require("../../assets/img/banner02.jpg"),
                    require("../../assets/img/banner03.jpg"),
                    
                ],
                  active: 0,
            }
        },
        components:{
            swiper,
            vantabber,
           
        },
        created(){
            this.$store.state.active=0;
        },
     
    }
</script>

<style lang="scss" scoped>
    .goodslist{
        width: 100%;
        margin-top:8px;
    
    }
    .tupian{
        width: 75px;
        height: 80px;
    }
    .list_two{
        padding: 0.22rem ;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        background: rgb(255, 255, 255);
        :first-child{
            margin-right: .12rem;
        }
        a{
            background-color: transparent;
            outline: 0;
            text-decoration: none;
            flex: 1 1 auto;
            width: 3.4rem;
            .top{
                box-sizing: border-box;
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                    outline: 0;
                    border-style: none;
                }
            }
            .bottom{
                padding: .2rem .27rem;
                text-align: center;
                -webkit-box-align: center;
                align-items: center;
                background-color: #fff;
                .name {
                    font-size: .28rem;;
                    color: rgba(0,0,0,.87);
                }
                .brief {
                    margin: 0.6rem 0;
                    font-size: .22rem;
                    line-height: .3rem;
                    color: rgba(0,0,0,.54);
                }
                .price {
                     font-size: .28rem;
                    color: #ea625b;
                    height: 1.5em;
                    line-height: 1.5em;
                    padding-left: .5em;
                    display: inline-block;
                    span {
                        display: inline-block;
                        margin-left: .04rem;
                        font-size: .2rem;
                    }
                    .old {
                        display: inline-block;
                        margin: 0 .1rem;
                        font-size: .22rem;
                        color: rgba(0,0,0,.54);
                    }
                    s {
                        text-decoration: line-through;
                    }
                }
                .buybtn {
                    margin: 0 auto;
                    width: 104px;
                    height: 30px;
                    line-height: 30px;
                    background: #ea625b;
                    border-radius: .05rem;
                    text-align: center;
                    color: #fff;
                    font-size: .24rem;
                    padding: .16rem 0;
                    font-weight: 700;
                }
        }
    }
}
</style>