<template>
    <div>  
        <van-nav-bar
            :title="$route.name"
        />
        <van-row gutter="20" class="top">
        <div class="header"><span class="quit" @click="edit">退出</span></div>
            <van-col span="4">        
                <van-image
                    round
                    width="50px"
                    height="50px"
                    type="cover"
                    src="//cdn.cnbj1.fds.api.mi-img.com/user-avatar/afbcdcc0-d53b-4086-ab14-82b78ff26c22.jpg?thumb=150x150"
                />
            </van-col>
            
            <van-col span="20">
                <div v-if="$store.state.username">
                    <h3 v-text="$store.state.username"></h3>
                    <h5 @click="$store.state.username=''">退出</h5>
                </div>
                <div v-else>
                     <router-link to="/login" >登陆</router-link>
                    <router-link to="/register" >注册</router-link>     
                </div>   
            </van-col>
        </van-row>
        
        
        <!-- 列表 -->
        <van-cell-group>
            <van-cell title="我的订单" is-link to="orderlist"  />
            <!-- 我的收藏 -->
            <van-cell is-link @click="showPopups">我的收藏</van-cell>           
            <van-popup v-model="shows"  round
            position="top"
            style="height: 50%; padding-top: 4px; ">
            <div style="display:flex"> 
                <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1585724658.11257831.jpg" alt="" style="width:91px;height:91px">
                <div style="margin-top:-144px">
                    <span>红米8 6GB+128GB</span>
                    <span>售价 1299元</span>
                    <input type="button" style="background: #ff6700;
                    color: #fff; margin-left:5px" >点击购买          
                </div>  
                           
            </div>
             <div style="display:flex"> 
                <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493274.50817754.jpg" alt="" style="width:91px;height:91px">
                <div style="margin-top:-144px">
                    <span>小米10 8GB+256GB</span>
                    <span>售价 4999元</span>
                    <input type="button" style="background: #ff6700;
                    color: #fff; margin-left:5px" >点击购买          
                </div>  
                           
            </div>
            </van-popup>
            <!-- 我的地址 -->
            <van-cell title="我的地址" @click="address" is-link /> 
        
            <!-- 优惠券单元格 -->
            <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            优惠券/>
            <!-- 优惠券列表 -->
            <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
            >        
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
            />
            </van-popup>
            <!-- 服务中心 -->
            <van-cell is-link @click="showPopupss">服务中心</van-cell>   
            
            <van-popup v-model="showss" position="bottom" :style="{ height: '30%' }" >
                <div style="text-align:center">
                    <h1 style="font-size:20px;color:#ff9a00">商城热线:400-100-5678!</h1><h1 style="font-size:20px;color:#969696">8:00-18:00</h1>
                    <h1 style="font-size:20px;color:#ff9a00">金融热线:400-100-3399!</h1><h1 style="font-size:20px;color:#969696">9:00-19:00</h1>
                    <h1 style="font-size:20px;color:#ff9a00">小米移动:400-922-3838!</h1><h1 style="font-size:20px;color:#969696">8:00-18:00</h1>
                </div>
            
            </van-popup>
            <!-- 小米之家 -->
            <van-cell is-link @click="showPopupes">小米之家</van-cell>   
            <van-popup v-model="showes"  round
            position="bottom"
            style="height: 80%; padding-top: 4px; ">
            <input type="text" placeholder="请输入城市名称或拼音查询" class="city">
                <van-index-bar>
                    <van-index-anchor index="A" />
                    <van-cell title="阿克苏地区" />
                    <van-cell title="安顺" />
                    <van-cell title="阿勒泰地区" />

                    <van-index-anchor index="B" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    
                    <van-index-anchor index="C" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="D" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="D" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="E" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="F" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="G" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="H" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="J" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="K" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="L" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="M" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="N" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="P" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="Q" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="R" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="S" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="S" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="T" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="W" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="X" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="Y" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                    <van-index-anchor index="Z" />
                    <van-cell title="中国" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />

                </van-index-bar>
            </van-popup>
            <!-- F码 -->
            <van-cell is-link @click="showPopupssss">我的F码</van-cell>
            <van-popup v-model="showssss"  round
            position="bottom"
            style="height: 80%; padding-top: 4px;">
            <input type="text" placeholder="请输入F码兑换并使用" style="margin-left:15px ;border:1px solid #cccccc;width:295px;height:31px"> 兑换
            <br>
            <div class="F">
                <span>输入F码</span>>
                <span>提前加入购物车</span>>
                <span>和其他商品一起结算</span>
            </div>
            <div class="help">
                <span>使用帮助</span>
                <span> 礼物码兑换</span>
            </div>
            </van-popup>
            <!-- 礼物兑换码 -->        
            <van-cell is-link @click="showPopupssss">礼物兑换码</van-cell>
            <van-popup v-model="showssss"  round
            position="bottom"
            style="height: 80%; padding-top: 4px;">
            <input type="text" placeholder="请输入F码兑换并使用" style="margin-left:15px ;border:1px solid #cccccc;width:295px;height:31px"> 兑换
            <br>
            <div class="F">
                <span>输入F码</span>>
                <span>提前加入购物车</span>>
                <span>和其他商品一起结算</span>
            </div>
            <div class="help">
                <span>使用帮助</span>
                <span> 礼物码兑换</span>
            </div>
            </van-popup>
            <!-- 会员中心 -->
            <van-cell is-link @click="showPopupsssses">会员中心</van-cell>
            <van-popup v-model="showsssses"  round
            position="bottom"
            style="height: 80%; padding-top: 4px;">
            <div class="left">
                <div class="gift">
                    <p>请前往小米商城App查看会员福利</p>
                </div>
                <div class="action">
                    <div class="right">
                        立即下载小米商城App
                    </div>
                </div>
            </div>
            </van-popup>
            <!-- 设置 -->     
            <van-cell is-link @click="showPopupsss">设置</van-cell>
            <van-popup v-model="showsss"  round
            position="bottom"
            style="height: 80%; padding-top: 4px;">
              <ol>
                  <li>地址管理</li>
                  <li>经营证照</li>
                  <li>协议规则</li>
                  <li>小米商城用户协议</li>
                  <li>小米商城隐私政策</li>
                  <li>小米帐号使用协议</li>
                  <li>小米帐号隐私政策</li>
              </ol>
                <footer>
                    <span>退出账号</span>
                </footer>
            </van-popup>
        </van-cell-group>
        <!-- 显示分享面板 -->
        <van-cell title="分享面板" @click="showShare = true" is-link />
         <!-- <van-cell is-link @click="showPopupssss">礼物兑换码</van-cell> -->
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
          @select="onSelect"
        />

        <vantabber></vantabber>
    </div>
</template>

<script>
import vantabber from "../components/public/vantabbar.vue"
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
// 小米之家
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
// 分享面板
import { ShareSheet } from 'vant';
import { Toast } from 'vant';
Vue.use(ShareSheet);

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1592004000,
  endAt: 1593004000,
  valueDesc: '1.5',
  unitDesc: '元',
  
};

    export default {
        methods:{
             onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
            onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
            },
            onExchange() {
                this.coupons.push(coupon);
            },
            showPopup() {
                this.show = true;       
            }, 
            showPopups() {
                this.shows = true;       
            }, 
            showPopupes() {
                this.showes = true;       
            }, 
            showPopupss() {
                this.showss = true;       
            }, 
            showPopupsss() {
                this.showsss = true;       
            }, 
             showPopupssss() {
                this.showssss = true;       
            }, 
            showPopupsssses() {
                this.showsssses = true;       
            }, 
            edit(){
                this.$store.commit("my/edit",{value:null})
                this.$router.push("/login")
            },
            // 定义跳转方法
            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            }
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 3;
        },
        data() {
        return {
            show: false,
            shows:false,
            showes:false,
            showss:false,
            showsss:false,
            showssss:false,
            showsssses:false,
            showList:false,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
             showShare: false,
              options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
            
            }
        },
    }
</script>

<style lang="scss" scoped>
.top{
    background: #F37D0F url("../assets/img/bg.png") center center no-repeat;
    background-size: 100% auto;
}
.van-image{
    float: right;
    margin-top:15px;
}
.van-col{
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    a{
        margin-left: 20px;
        color:#fff;
    }
}
.van-popup--top{
    line-height: 200px;
}
.F{
    margin-top:55px ;
    text-align:center;
}
.F>span{
    display: inline-block;
    border-radius: 10%;
    border:3px solid #cccccc;
    margin-left: 1px;
}
.help{
    text-align: center;
    position: fixed;
    bottom: .31rem;
    width: 100%;
}
.help>span{
    color: #a08c72;
    display: inline-block;
    margin-left: 15px;
}
.left{
    padding-top: 50px;
}
.gift{
    padding: 1.5rem .4rem 1rem;
}
p{
    display: block;
    text-align: center;
    font-size: .32rem!important;
}
.action{
    margin: 0 .4rem;
}
.right{
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 2rem;
    line-height:2rem;
    font-size: 0.38rem;
}
li{
    width: 100%;
    display: inline-block;
    padding: .2rem;
    border-bottom: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: left;
    color: #3c3c3c;
}
footer{
    background-color: #f4f4f4;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    -webkit-box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
.city{
    padding: .20rem 0 .2rem .7rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    outline: 0;
    width: 340px;
    height: 35px;
    margin-left: 10px;
}
.header{
    position: relative;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.quit {
    position: absolute;
    /* display: inline-block; */
    right: 20px;
    top: 30px;
    color:white;
    font-size: 16px;
}
</style>