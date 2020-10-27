<template>
    <div>
        <van-row class="topsearchNav" v-model="active">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-zuojiantou
            "></span></van-col>
            <van-col span="18">
                <van-search placeholder="搜索商品名称" />
            </van-col>
            <router-link to="/category" >
            <van-col span="3"><span class="iconfont icon-sousuokuang
            "></span></van-col>
            </router-link>

        </van-row>
        <!-- 搜索历史 -->
        <div class="title">
            <van-col span="8" class="suo">搜索历史<span class="iconfont  icon-xxx
            "></span></van-col>
            <van-col span="14" v-model="show" title="标题" show-cancel-button><span class="iconfont  icon-shanchu
            " v-on:click="handleClick"></span></van-col> 

            <div class="history">
                <router-link to="/details">
                <van-col  span="8" class="his">小米10</van-col>
                </router-link>
                <router-link to="/details">
                <van-col  span="8" class="his">小米8</van-col>
                </router-link>
                <router-link to="/details">
                <van-col  span="8" class="his">小米x</van-col>
                </router-link>
            </div>   
        </div>
        <!-- 搜索发现 -->
        <div class="discover">
            <router-link to="/home/recommend"   
            >
            <van-col  span="8" class="dis">搜索发现</van-col>  
             </router-link>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/248966620607ffb7b4fb3e165adab599.jpg?w=984&h=160&bg=24B7ED" alt="">        
        </div>

    </div>
</template>
<script>
export default {
        data() {
        return {
            active:0
        }
    },
}

</script>
<style lang="scss" scoped>
    .topsearchNav{
       background-color: white;
    }
    .icon-zuojiantou{
        height:44px;
        line-height: 44px;
        text-align: center;
        display: block;
        font-size: 24px;
    }
    .van-search{
        width: 280px;
        height: 40px; 
        margin: 4px;
        padding: 0px;  
        border: 1px solid #cccccc; 
    }
     .van-search__content{
        background-color: #fff;
    }
    .icon-sousuokuang{
        height:44px;
        line-height: 44px;
        text-align: center;
        display: block;
        font-size: 24px;
    }
    .icon-shanchu{
        display: block;     
        text-align: right;   
    }
    .title,.dis,.his{
        margin-top: 16px;
    }
    .suo,.history,.discover{
        margin-left:16px;   
    }
    .his{
        border-radius: 50%;
        background-color:
        rgba(0,0,0,.04);
        color: #3c3c3c;
        text-align: center;
    }
    img{
        width: 340px;
    }
</style>