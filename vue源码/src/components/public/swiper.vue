<template>
    <div>

        <!-- 轮播图 -->
        <div class="swiper-container homeSlideContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                    <img :src="item"  alt="">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination homeSlidePagination"></div>
        </div>
        <!-- 轮播图end -->
    </div>
</template>

<script>

    import Swiper from "swiper"
    export default {
        props:["img"],
        mounted(){
            new Swiper('.homeSlideContainer', {
                pagination: {
                    el: '.homeSlidePagination',
                },
            });
        },
    }
</script>

<style lang="scss" scoped>
.swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>