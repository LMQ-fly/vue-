<template>
    <div>
        <!-- 轮播图 -->
        <swiper :img="Images"></swiper>
        <!-- 分类 -->
        <van-grid :column-num="6" style="margin-top:8px">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152" alt="" class="tupian">
            <img src="//i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp" alt="" class="tupian">
            <img src="//i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp" alt="" class="tupian">
           <img src="//i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp" alt=""  class="tupian">
           <img src="//i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp" alt="" class="tupian">
           <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152" alt="" class="tupian">
           <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152" alt="" class="tupian">
           <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152" alt="" class="tupian">
           <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152" alt="" class="tupian">
           <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152" alt="" class="tupian">
           <img src="//i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp" alt="" style="margin-top:8px">
        </van-grid>
        <!-- 分类 end -->
        <!-- 热卖 start-->
        <div class="list">
            <div class="goods-list">
                <div class="img">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d647c34f3cc4cb0b113ed0defe4f35bd.jpg?thumb=1&w=221&h=221" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">扫拖一体机器人</div>
                    <div class="brief">扫得干净，拖得彻底</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">1499<span class="price old" style="color: rgba(0,0,0,.54);"><s>1999</s></span></div>
                </div>
            </div>
            <div class="goods-list">
                <div class="img">
                    <img src="//i8.mifile.cn/v1/a1/c9c2cd57-0baa-edd3-a7fd-db53fb892a03.webp" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">小米智能摄像机云台版</div>
                    <div class="brief">高清画质，守护家的每一面</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">177<span class="price old" style="color: rgba(0,0,0,.54);"><s>199</s></span></div>
                </div>
            </div>
            <div class="goods-list">
                <div class="img">
                    <img src="//i8.mifile.cn/v1/a1/577afa47-f79d-93c7-1185-f5c48f1b4ea2.webp" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">净水器600G</div>
                    <div class="brief">600加仑通量，流速更快</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">1399<span class="price old" style="color: rgba(0,0,0,.54);"><s>2499</s></span></div>
                </div>
            </div>
        </div>
         
          <div class="list">
            <div class="goods-list">
                <div class="img">
                    <img src="//i8.mifile.cn/v1/a1/6f2954f1-9b60-6d87-ffc1-ca203190fdb7.webp" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">小米AI音箱</div>
                    <div class="brief">听音乐、语音遥控家电</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">229<span class="price old" style="color: rgba(0,0,0,.54);"><s>299</s></span></div>
                </div>
            </div>
            <div class="goods-list">
                <div class="img">
                    <img src="//i8.mifile.cn/v1/a1/552b0df8-6a5c-f4dc-5a2e-12ed62a86bdf.webp" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">小米体脂秤2</div>
                    <div class="brief">轻松掌握身体脂肪率</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">99</div>
                </div>
            </div>
            <div class="goods-list">
                <div class="img">
                    <img src="//i8.mifile.cn/v1/a1/2df7f18c-f4c7-cd43-7148-3b015741aea3.webp" alt="" style="width:115px ">
                </div>
                <div class="text">
                    <div class="name">小米净水器</div>
                    <div class="brief">400加仑大流量，隐藏安装</div>
                    <div class="price" style="color: rgb(245, 75, 75 );">1099<span class="price old" style="color: rgba(0,0,0,.54);"><s>1999</s></span></div>
                </div>
            </div>
        </div> 
        <!-- 热卖结束 -->
        <!-- 查看更多开始 -->
        <div>
            <img src="//i8.mifile.cn/v1/a1/d6a387d1-3b5e-d81b-0c8b-3d0133d0bb5c.webp" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b3860db2bb5301df3b4a113dea2bac0.jpg?thumb=1&w=720&h=200" alt="" style="margin-top:8px">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c6646b30c352c557effb2d8537b6cfa.jpg?thumb=1&w=720&h=200" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c25c68694e064f1eda1c207ad481f767.jpg?thumb=1&w=720&h=112" alt="" style="margin-top:8px">
        <!-- <查看更多结束> -->
        <!-- <下拉刷新 -->
        <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
        >
        <p>刷新次数: {{ count }}</p>
        </van-pull-refresh>



        </div>
    </div>
</template>

<script>
import swiper from "../../components/public/swiper";
import { Toast } from 'vant';
    export default {
        data(){
            return{
                count:0,
                isLoading: false,
                Images:[
                    require("../../assets/img/banner08.jpg"),
                    require("../../assets/img/banner09.jpg"),
                    require("../../assets/img/banner07.jpg"),
                    require("../../assets/img/banner01.jpg"),
                    require("../../assets/img/banner09.jpg"),
                ]
            }
        },
        components:{
            swiper,
        },
         methods: {
                onRefresh() {
                    setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 1000);
            },
        },      
    }
</script>

<style lang="scss" scoped>
    .tupian{
        width:75px;
        height: 80px;
    }
    .list{
       overflow: hidden;
       padding:3px;
    }
    .goods-list{
        padding:4px;
        float: left;
    }
    .img{
        display: block;
    }
    .text{
        padding-top: 0;
        padding-right: 0;
        height: auto;
    }
    .name{
        width: 104px;
        height: 14px;
        padding: 0 .12rem;
        font-weight: bolder;
        color: #3c3c3c;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        margin-left: 5px;
    }
    .brief{
        width: 110px;
        height: 18px;
        margin-top: 5px;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
    }
    .price{
        margin-left:23px;
        font-weight: 700;
        font-size: 13px;
        font-family: Heiti SC,STHeiti;
        position: relative;
    }
    .price::before{
        content: "\A5";
        position: absolute;
        left: -8px;
        top: 0;
        font-size: .76em;
        vertical-align: inherit;
    }
    s{
        text-decoration: line-through;
    }
   
</style>