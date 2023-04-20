<template>
    <section class="world">
        <div class="world__container container">
        <div class="world__titles">
            <h4 class="world__title">Мир</h4>
            <p class="world__tegs"><a href="#">#Мир</a></p>
        </div>
            <div class="world__swiper-container swiper news-lent">
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
                    <swiper-slide v-for="item of worldNews" :key="item">
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
            aaaa(){
                this.news.forEach(element => {
                    if(element.categories[0] == "Мир"){
                        console.log(element)
                    }
                    
                });
            }
        },
        computed:{
            worldNews(){
                return this.news.filter(item => {
                    if(item.categories){
                        return item.categories[0] == "Мир" 
                    }else return
                })
            },
            ...mapState({
                news: state => state.news.newsItems
            })
        }
        
    }
    </script>
    
    <style lang="scss">
    .world{
        margin-top: 50px;
        
        &__container{
            background-color: #A0DEFF;
            padding: 20px 10px;
        }
        &__title{
            font-size: 35px;
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
    .news-lent{
            &__data{
                margin-top: 20px;
            }
            &__about{
                height: 130px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
            }
            &__text{
            font-size: 18px;
            margin-top: 10px;
            }
            img{
                width: 260px;
                height: 180px;
            }
            
        }
    </style>