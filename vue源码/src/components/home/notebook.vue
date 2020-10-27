<template>
    <div>
        <!-- 轮播图 -->
        <!-- <swiper :img="Images"></swiper> -->
        <div >
            <img src="../../assets/img/note1.jpg" alt="">
            <img src="../../assets/img/note2.jpg" alt="">
        </div>

        
        <!-- 商品列表 -->

        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="../../assets/img/note8.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Air 13.3" 2019款</div>
                    <div class="brief">独立显卡,指纹解锁</div>
                    <div class="price">￥4999<span>起</span>
                        <span class="price old"><s>￥5699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="../../assets/img/note9.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">RedmiBook 13</div>
                    <div class="brief">全面屏包罗万千视界</div>
                    <div class="price">￥4199<span>起</span>
                        <span class="price old"><s>￥4499</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 人群购买指南start -->
        <div>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0de51cddbd973e1ac2e27ba05a0693.jpg?thumb=1&w=720&h=70" alt="">
        </div>
   
        <div class="man">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d1ffaea355ab590ee88a48c9ab1ef0f.jpg?thumb=1&w=360&h=156" alt="" class="mans">
                <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4e381d6664a0f4aa94984af7b676de5.jpg?thumb=1&w=360&h=156" alt="" class="mans">
        </div>
        <div class="man">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/400e740d63fe4f377b05a3c969f150bf.jpg?thumb=1&w=360&h=152" alt="" class="mans">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a1a44f1b6a7ed090eb624969845bd7e.jpg?thumb=1&w=360&h=152" alt="" class="mans">
        </div>
        <div class="man">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cd3044325d320007ec3c3444396287d.jpg?thumb=1&w=360&h=169" alt="" class="mans">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/21d72b6e96625e586e52ac3e6b0bfedc.jpg?thumb=1&w=360&h=169" alt="" class="mans">
        </div>
        <!-- 人群购买指南end -->
        <div>
            <img src="../../assets/img/note3.jpg" alt="">
            <img src="../../assets/img/note4.jpg" alt="">
            <img src="../../assets/img/note5.jpg" alt="">
            <img src="../../assets/img/note6.jpg" alt="">
            <img src="../../assets/img/note7.jpg" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/812f0270eaa54a4c0870ab39154a0c02.jpg?thumb=1&w=720&h=361" alt="">
        </div>
        <!-- 商品列表end -->
        <!-- <米粉推荐start -->
        <div>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/91a05995cce34229088a55a8b45dcfb4.jpg?thumb=1&w=720&h=84" alt="">
        </div>
        <!-- <米粉推荐end' -->
        <!-- <轻薄小巧start -->
        <div>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b70f3d9ed2afee673b73809c3e3b1d07.jpg?thumb=1&w=720&h=108" alt="">
        </div>
        <div class="goods-list">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3480d56fd89dc2f80e2ec1653e718d1.jpg?thumb=1&w=338&h=338" alt="" style="height:176px;width:176px">
            <div class="info-box">
                <div class="text">
                    <div class="names">Air 12.5" 2019款</div>
                    <div class="briefs">全金属机身，极简设计，像杂志般便携</div>
                </div>
                <div class="right">
                    <div class="prices" style="color: rgb(245, 75, 75);">3599<span>起</span>
                    </div>
                    <div class="ui-button btn-s-h" style="background-color: rgb(245, 75, 75); color: rgb(255, 255, 255);">
                        <span style="margin-left:30px" >立即购买</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="../../assets/img/note8.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Air 13.3" 2019款</div>
                    <div class="brief">独立显卡,指纹解锁</div>
                    <div class="price">￥4999<span>起</span>
                        <span class="price old"><s>￥5699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="../../assets/img/note9.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">RedmiBook 13</div>
                    <div class="brief">全面屏包罗万千视界</div>
                    <div class="price">￥4199<span>起</span>
                        <span class="price old"><s>￥4499</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 性能强劲start -->
        <div>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8040a1514313da858c8fdcfcfb526c54.jpg?thumb=1&w=720&h=102" alt="">
        </div>
         <div class="goods-list">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3a81530c81ba1e6e926bc2cea70b1f4.jpg?thumb=1&w=338&h=338" alt="" style="height:176px;width:176px">
            <div class="info-box">
                <div class="text">
                    <div class="names">RedmiBook 14 锐龙版</div>
                    <div class="briefs">满血锐龙，高性能金属轻薄本</div>
                </div>
                <div class="right">
                    <div class="prices" style="color: rgb(245, 75, 75);">3299<span>起</span><span class="price old" style="color:rgba(0,0,0,.54)"><s>￥3499</s></span>
                    </div>
                    <div class="ui-button btn-s-h" style="background-color: rgb(245, 75, 75); color: rgb(255, 255, 255);">
                        <span style="margin-left:30px" >立即购买</span>
                    </div>
                </div>
            </div>
        </div>
         <div class="goods-list">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1038b06609731b7179fcaef03627ede.jpg?thumb=1&w=338&h=338" alt="" style="height:176px;width:176px">
            <div class="info-box">
                <div class="text">
                    <div class="names">RedmiBook 14 增强版</div>
                    <div class="briefs">全新的多彩十代酷睿轻薄本</div>
                </div>
                <div class="right">
                    <div class="prices" style="color: rgb(245, 75, 75);">4499<span>起</span>
                    </div>
                    <div class="ui-button btn-s-h" style="background-color: rgb(245, 75, 75); color: rgb(255, 255, 255);">
                        <span style="margin-left:30px" >立即购买</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 性能强劲end -->
        <!-- 大屏酷爽start -->
        <div>
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/edd0862be527e5e25398e0a16de526aa.jpg?thumb=1&w=720&h=101" alt="">
        </div>

        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c087fe7fbda06e01401b1875af2580a.jpg?thumb=1&w=338&h=338" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Pro 15 增强版</div>
                    <div class="brief">从核心到视野，再次突破强大</div>
                    <div class="price">￥5899<span>起</span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd919151c6f7340c19fabc5c8e5f884d.jpg?thumb=1&w=338&h=338" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Pro 15.6" GTX显卡</div>
                    <div class="brief">更强悍的专业笔记本</div>
                    <div class="price">￥7999
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//i8.mifile.cn/v1/a1/3e9c8e72-8d07-e0e9-1ef5-66d7a08b17f4.webp" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米笔记本15.6" MX110</div>
                    <div class="brief">全面均衡的国民轻薄本</div>
                    <div class="price">￥4299<span>起</span>
                      
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d4d53cde3f9d51184d06fa2553f45be8.jpg?thumb=1&w=338&h=338" alt="">
                </div>
                <div class="bottom">
                    <div class="name">游戏本2019款</div>
                    <div class="brief">性能怪兽全新出击</div>
                    <div class="price">￥7499<span>起</span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 大屏酷爽结束 -->
</div>
</template>

<script>

    // import swiper from "../../components/public/swiper";
    export default {
        
    }
</script>

<style lang="scss" scoped>

    .classification{
        // 转成弹性元素
        display: flex;
        // 换行
        flex-wrap: wrap;
        // 行与行之间不出现空白
        align-content: flex-start;
        img{
            width: 20%;
        }
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
                    font-size: .28rem;
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
                    background: #f54b4b;
                    border-radius: .05rem;
                    text-align: center;
                    color: #fff;
                    font-size: .24rem;
                    padding: .16rem 0;
                    font-weight: bolder;
                }
        }
    }
}
.man{
    padding: 1px;
    display: flex;
}
.mans{
    width: 187px;
    height: 81px;
}
.goods-list{
    display: flex;
    padding: 5px;
}
.info-box{
    margin-top: 21px;
    margin-left: 15px;
}
.names{
    font-size:17px;
    font-weight: bolder;
    color: #3c3c3c;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

}
.briefs{
    margin-top: 10px;
}
.prices{
   font-size: 17px;
    color: #ff4a48;
    font-weight: bolder;
    margin-top: 35px;
    line-height: 1em;
    height: 1.2em;
    white-space: nowrap;
    position: relative;
    margin-left: 8px;

}
.prices::before{
    content: "\A5";
    position: absolute;
    left: -8px;
    top: 0;
    font-size: .76em;
    text-decoration: none;
}
.ui-button,.btn-s-h{
    width: 114px;
    height: 25px;
    line-height: 25px;
    margin-top: 3px;
    font-weight: bolder;

}
</style>