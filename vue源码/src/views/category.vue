<template>
    <div>   
        <router-link to='/home/recommend'>
            <van-nav-bar
                :title="$route.name" 
              >                      
            </van-nav-bar>
        </router-link>
      
        <!-- 分类列表 -->
        <bscroll></bscroll>
       
        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll" 
    import vantabber from "../components/public/vantabbar.vue";
    export default {
        components:{
            bscroll,
            vantabber,
        },
         created(){
            this.$store.state.active=1;
        },
        data() {
            return {     
                active:0, 
            }
        },
       
        
    }
</script>

<style lang="scss" scoped>

</style>