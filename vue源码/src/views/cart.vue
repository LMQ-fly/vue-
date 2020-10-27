<template>
    <div class="page">       

        <van-nav-bar
            :title="$route.name" 
        >                              
        </van-nav-bar>
        <!-- 商品列表 -->
        <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
            <van-col span="2">
                <van-checkbox  :value="item.isSelect" @click="inputselect(index)"></van-checkbox>
            </van-col>
            <van-col span="7">
                <van-image
                height="134"
                fit="cover"
                src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494292.17763824.jpg" 
                />
            </van-col>

            <van-col span="15">
                <div class="content">
                    <h1>{{item.name}}</h1>
                    <h2>① 骁龙865旗舰平台，双模5G</h2>
                    <p class="price">￥{{item.price}}</p>
                    <p>
                        <van-button type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
                        <span>{{item.num}}</span>
                        <van-button type="default" size="mini" @click="item.num++">+</van-button>
                        <van-button type="danger" class="danger" size="mini" @click="del(index)">删除</van-button>
                    </p>
                </div>
            </van-col>
        </van-row>
        <!-- 数组长度为零，默认隐藏 -->
        <div v-show="!($store.state.cart.lists.length)" >
            <div class="cart">
                <span class="goodsinfo" >购物车还是空的</span>      
                <button class="button"  @click="$router.push('/category')">去逛逛</button>    
            </div>
            <div>
                <img src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
            </div>
        </div>

        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">米家驱蚊器 智能版</div>       
                    <div class="price">￥59
                    </div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">米家直流变频落地扇1X</div>            
                    <div class="price">￥299
                    </div>
                </div>
            </router-link>
        </div>   
        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1571a08fd23ea5b409245916fbfb78c8.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="price">￥1499<span class="price old" style="color: rgba(0,0,0,.54);"><s>899</s></span>
                    </div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b5e8c6b8488b5534a9edb1b99779898.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi 8 4GB+64GB</div>
                    <div class="price">￥799<span class="price old" style="color: rgba(0,0,0,.54);"><s>899</s></span>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="list_two ">
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b21b11d359693c3ef7bd041737f90518.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8</div>     
                    <div class="price">￥849<span class="price old" style="color: rgba(0,0,0,.54);"><s>999</s></span>
                    </div>
                </div>
            </router-link>
            <router-link to="/details" tag="a">
                <div class="top">
                    <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc16c79affe652394b7436c8624640e.jpg?thumb=1&w=360&h=360" alt="">
                </div>
                <div class="bottom">
                    <div class="name">飞利浦吸顶灯卧室28W</div>
                    <div class="price">￥299
                    </div>
                </div>
            </router-link>
        </div>

        <van-submit-bar  v-show="$store.state.cart.lists.length" :price="total * 100" button-text="提交订单" @submit="$router.push('/order')">
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>
       
          <vantabber></vantabber>
       
    </div>

</template>

<script>
import vantabber from "../components/public/vantabbar.vue";
   
    export default {
        data() {
            return {
                active:0,
                checked:true,
                total:0,
                lists:[
          
                ]
                // lists:[]
            }
        },
        methods:{
            del(index){
                this.lists.splice(index,1)
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            this.sum();
            this.$store.state.active=2;
        },
        beforeUpdate(){
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
              this.$store.state.vanTabbar = false;
        },
         components:{
             vantabber,
        },
 
    
    }
</script>

<style lang="scss" scoped>
.goodslist{
    position: relative;
    background-color: #fff;
    .van-checkbox{
        position: relative;
        left:5px;
        top:52px;
    }
    .content{
        padding-left:10px;
        h1{
            font-size: 16px;
        }
        h2{
            font-size: 12px;
            font-weight: normal;
        }
        .price{
            font-size: 14px;
            color:#323233;
        }
        span{
            display: inline-block;
            width: 30px;
            font-size: 14px;
            text-align: center;
        }
        .danger{
            span{
                font-size: 12px;
            }
        }
    }
}

.van-submit-bar{
    bottom: 50px;
}
.page{
    margin-bottom: 50px;
}
.goodsinfo{
    font-size: 15px;
    text-align: center;
    margin-left: 85px;
    color: rgba(0,0,0,.27);
    background: url(/static/img/cartnull.daaf7926f8.png) no-repeat 0;
    display: inline-block;
}
.cart{
        background: #ebebeb;
        height: 55px;
        line-height: 55px;
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
                    text-align: left;
                }
                .brief {
                    margin: 0.6rem 0;
                    font-size: .22rem;
                    line-height: .3rem;
                    color: rgba(0,0,0,.54);
                }
                .price {
                    font-size: 16px;
                    color: #ff6700;
                    // height: 1.5em;
                    // line-height: 1.5em;
                    // padding-left: .5em;
                    // display: inline-block;
                    text-align: left;
                    
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
.button{
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 26px;
    line-height: 26px;
    padding: 0 .24rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
}
</style>