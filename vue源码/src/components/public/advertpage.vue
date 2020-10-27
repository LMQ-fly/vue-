<template>
    <div>
        <!-- 广告页advertpage.vue -->
        <!-- <h1>广告页<font style="font-size:40px;">{{num}}</font></h1>
        <h2>广告只打三秒</h2>
        <button @click="goHome">跳过</button>
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7414ea8fc38d56fdbb6e2667b0c4975b.jpg?thumb=1&w=696&h=436" alt=""> -->
        <van-button @click="goHome" round
            color="linear-gradient(to right, #505acb, #64299f)"
            to="/home/recommend">跳过 {{num}}s</van-button>
          <img src="../../assets/img/details3.jpg" alt="" class="bg">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:15,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommend");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home/recommend");//跳转首页
                }else{
                    this.num--;
                }
            },1000)

            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
      .bg{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        // height: 100%;
        z-index: -1;
    }

    .van-button{
        position:absolute;
        top: 15px;
        right: 20px;
    }
</style>