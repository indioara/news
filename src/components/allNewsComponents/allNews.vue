<template>
    <section class="all-news">
        <div class="container all-news__container">
            <div class="all-news__wrap">
                <div class="all-news__titles">
                    <h1>{{ title }}</h1>
                </div>
                <ul class="all-news__list">
                    <li class="all-news__item" v-for="(item, index) of setNews.slice(0, newsLimit)" :key="index" >
                        <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                            <div class="all-news__item-wrap">
                                <img :src="item.enclosure.url" alt="">
                                <div class="all-news__about">
                                    <p class="all-news__item-title">{{ item.title }}</p>
                                    <ui-date class="all-news__item-data" :itemDate="item.isoDate"></ui-date>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="all-news__btns">
                    <uiButton @click="getMoreNews" v-if="setNews.length > newsLimit">загрузить еще 10 новостей</uiButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data(){
        return{
            newsLimit: 30,
        }
    },
    methods:{
        ...mapMutations({
            setItemNews: "setItemNews"  
        }),
        getMoreNews(){
            this.newsLimit += 10
        }
    },
    computed:{
        ...mapGetters({
            setNews: "setNews"
        }),
        ...mapState({
            news: state => state.news.newsItems,
            title: state => state.news.title,
            newsPageItem: state => state.news.newsPageItem

        })
    }
}
</script>

<style lang="scss">
    .all-news{
        &__titles{
            height: 80px;
            border-radius: 5px;
            width: 100%;
            background-color:#4AC0FF ;
            display: flex;
            align-items: center;
            font-size: 30px;
            margin-top: 30px;
            margin-bottom: 30px;
            h1{
                margin-left: 20px;
                margin-top: 20px;
            }
        }
        &__list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
            row-gap: 40px;
        }
        &__item{
            a{
                img{
                    width: 200px;
                    height: 120px;
                }
            }
            a:visited{
                color: black;
            }
            
        }
        &__about{
            text-align: left;
        }
        &__item-wrap{
            display: flex;
            font-size: 18px;
        }
        &__about{
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__item-data{
            font-size: 13px;
        }
        &__btns{
            text-align: center;
            margin-top: 50px;
            transform: translateX(-50px);
        }
    }
</style>