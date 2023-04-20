<template>
<section class="sport">
    <div class="sport__container container">
    <div class="sport__titles">
        <h4 class="sport__title">Спорт</h4>
        <p class="world__tegs"><a href="#">#Спорт</a></p>
    </div>
        <div class="sport__swiper-container swiper news-lent">
            <swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="25"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
            :loopAdditionalSlides = "1"
            :speed = "1000"
            :autoplay="{
                delay: 1000,
            }"
            >
                <swiper-slide v-for="item of setNews" :key="item">
                    <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                            <img :src="item.enclosure.url" alt="">
                            <div class="swiper__about news-lent__about">
                                <p class="swiper__text news-lent__text">{{ item.title.slice()}}</p>
                                <div class="swiper__informat news-lent__information">
                                    <ui-date class="swiper__data news-lent__data" :itemDate="item.isoDate"></ui-date>
                                </div>
                            </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</section>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Autoplay} from "swiper"
import 'swiper/css'
import "swiper/css/autoplay"
import {mapState} from "vuex"
    
export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data(){
            return{
                modules: [Autoplay]
            }
        },
        methods:{
        },
        computed:{
            ...mapState({
                news: state => state.news.newsItems
            }),
            setNews(){
                return this.news.filter(item => {
                    if(item.categories){
                        return item.categories[0] == "Спорт"
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.sport{
    margin-top: 50px;
    &__container{
        background-color: #A0DEFF;
        padding: 20px 10px;
    }
    &__title{
        font-size: 30px;
        margin-bottom: 10px;
    }
    &__titles{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            a{
                border: 2px solid #FFFFFF;
                padding: 5px 10px;
                border-radius: 30px;
                opacity: 0.8;
            }
            a:visited{
                color: black;
            }
            
        }
}
</style>