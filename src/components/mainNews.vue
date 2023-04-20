<template>
  <section class="main-news">
    <div class="main-news__container container">
        <div class="main-news__wrap">
            <h1 class="main-news__title">Главные новости</h1>
            <div class="main-news__swiper-container">
            <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
            :loopAdditionalSlides = "1"
            :speed = "1200"
            :autoplay="{
                delay: 4000,
            }"
            
                >
                <swiper-slide v-for="item of news.slice(0,3)" :key="item" class="main-news__slider-wrap slide slide-wrap">
                    <div class="main-news__slide slide__item"> 
                        <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                            <img :src="item.enclosure.url" alt="main photo" class="slide__img">
                            <div class="slide__about">
                                <h2 class="slide__title">{{ item.title }}</h2>
                                <div class="slide__sub-title">
                                    <ui-date class="slide__data" :itemDate="item.isoDate"></ui-date>
                                    <p class="slide__creator">{{ item.creator }}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Autoplay} from "swiper"
import 'swiper/css'
import "swiper/css/autoplay"
import { mapState } from 'vuex'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data(){ 
        return{
        dateNow: "",
        modules : [Autoplay]
        }
    },
    methods:{
        setDate(){
            this.news.slice(0,3).forEach(element => {
                
                let date = new Date()
                let day = date.getDate()
                let month = date.getMonth()
                if(date.getDate() < 10){
                    day = `0${date.getDate()}`
                }
                if(date.getMonth() < 12){
                    month = `0${date.getMonth()}`
                }
                if(day == element.isoDate.slice(8, 10)){
                    this.dateNow = "Сегодня"
                    
                }else if(day - 1 == element.isoDate.slice(8, 10)){
                    this.dateNow = "Вчера"
                }
                else this.dateNow = `${element.isoDate.slice(8, 10)} ${month} ${date.getFullYear()}`
            })
        }
    },
    computed:{
        ...mapState({
            news: state => state.news.newsItems
        })
    },
    mounted(){
        setTimeout(this.setDate, 2000)
    }    
}
</script>

<style lang="scss" scoped>
.main-news{
    margin-top: 60px;
    &__slide__item{
        position: relative;
    }
    &__title{
        font-size: 40px;
        margin-bottom: 10px;
    }
    &__swiper-container{
        
    }
    
}
.slide{
    &__about{
        position: absolute;
        z-index: 2;
        bottom: 0;
    }
    &__title{
        color: white;
        font-size: 35px;
        width: 700px;
        padding: 20px;
        font-style: normal;
        font-weight: 400;
    }
    &__sub-title{
        p{
            margin-left: 10px;
        }
        p:first-child::after{
            content: "*";
            margin-left: 10px;
        }
        display: flex;
        color: white;
        padding: 0px 0px 20px 20px;
        font-size: 15px;
    }
    &__data, &__creator{
        color: white;
    }
    &__img{
        width: 800px;
    }
}

</style>