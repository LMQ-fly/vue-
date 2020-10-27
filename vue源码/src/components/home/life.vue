<template>
    <div>
       <div>
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0aff16e8043883eaa685b3d41cea1e9a.jpg?thumb=1&w=720&h=900" alt="">
       </div>

        <div class="pack">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7290a6d86e5e4af88dc6c94447908f32.jpg?thumb=1&w=360&h=215" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b14e9dd5839ca2e9291c6609f5a9e2.jpg?thumb=1&w=360&h=215" alt="">
        </div>
        <div class="pack">
              <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/099294492c12fce0f8201bb04ebaa54a.jpg?thumb=1&w=360&h=215" alt="">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/493ac7d29b53dfd53b08f1fe0a14a17c.jpg?thumb=1&w=360&h=215" alt="">
        </div>
      
       <div>
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f50ca758a345fcaeac25cfb36770047.jpg?thumb=1&w=720&h=138" alt="">
        </div>
        <!-- 精选好物start -->
        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//i8.mifile.cn/v1/a1/33c6d391-82a0-0fd2-2d0e-fb59f4679b6c.webp" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi波轮洗衣机1A</div>
                    <div class="brief">8kg大容量，一键操作</div>
                    <div class="price">￥749<span class="price old" style="color:rgba(0,0,0,.54)"><s>￥899</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//i8.mifile.cn/v1/a1/994b51d7-4cf7-2a31-d97c-51e9343c9aa9.webp" alt="">
                </div>
                <div class="bottom">
                    <div class="name">米家洗烘一体机</div>
                    <div class="brief">智能烘干，高效净衣</div>
                    <div class="price">￥2099<span class="price old" style="color:rgba(0,0,0,.54)"><s>￥2299</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>

         <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd677836285f664503029b22ed6ce695.jpg?thumb=1&w=338&h=338" alt="">
                </div>
                <div class="bottom">
                    <div class="name">变频滚筒洗衣机1S 8kg </div>
                    <div class="brief">超薄机身大容量</div>
                    <div class="price">￥1399<span class="price old" style="color:rgba(0,0,0,.54)"><s>￥1599</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e08bbc47384f7cfcafe0e5aee71ec257.jpg?thumb=1&w=338&h=338" alt="">
                </div>
                <div class="bottom">
                    <div class="name">变频滚筒洗衣机1C 10kg </div>
                    <div class="brief">10kg大容量，专业羽绒</div>
                    <div class="price">￥1499<span class="price old" style="color:rgba(0,0,0,.54)"><s>￥1699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>



</div>
</template>
<script>
//   import swiper from "../../components/public/swiper";
export default {
    
}
</script>
<style lang="scss">
    ul{
       display: flex; 
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
                    font-size: 15px;
                    color: rgba(0,0,0,.87);
                   font-weight: bolder;
                }

                }
                .brief {
                    margin: 0.6rem 0;
                    font-size: .22rem;
                    line-height: .3rem;
                    color: rgba(0,0,0,.54);
                    
                }
                .price {
                    font-size: .28rem;
                    color: rgb(245, 75, 75);
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
.pack{
    width: 187px;
    height: 111px;
    display: flex;
}
</style>