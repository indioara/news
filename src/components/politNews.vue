<template>
    <section class="polit">
        <div class="polit__container container">
        <div class="polit__titles">
            <h4 class="polit__title">Россия </h4>
            <p class="polit__tegs"><a href="#">#Россия</a> <a href="#">#CCCP</a></p>
        </div>
            <div class="polit__swiper-container swiper news-lent">
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
import { computed } from 'vue'
import { mapState } from 'vuex'
        
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
                        return item.categories[0] == "Россия" ||  item.categories[0] == "Бывший СССР"
                    }else return 
                })
            }
        }
    }
    </script>
    
    <style lang="scss" scoped>
    .polit{
        margin-top: 50px;
        &__container{
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
                border: 2px solid #4AC0FF;
                padding: 5px 10px;
                opacity: 0.8;
                border-radius: 30px;
            }
            a:visited{
                color: black;
            }
        }
    }
    </style>