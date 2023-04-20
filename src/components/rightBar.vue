<template>
  <section class="right-bar">
    <div class="container">
        <div class="right-bar__wrap news">
            <div class="news__title"><h4>Популярное</h4></div>
            <div class="news__wrap">
                <div class="news__item" v-for="(item, index) of news.slice(0, 15)" :key="item.id">
                    <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                        <img v-if="index == 0" :src="item.enclosure.url" alt="">
                        <p class="news__text">{{ item.title }}</p>
                        <ui-date class="news__data" :itemDate="item.isoDate"></ui-date>
                    </router-link>
                </div>
           </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState({
            news: state => state.news.newsItems
        })
    }
}
</script>

<style lang="scss" scoped>
.right-bar{
    background: white;
    max-width: 300px;
    margin-left: 20px;
    margin-top: 110px;
    
}
.news{
    &__wrap{
        height: 700px;
        overflow: scroll;
    }
    &__title{
        background-color: #4AC0FF;
        h4{
            font-size: 25px;
            padding: 10px;
        }
    }
    &__item{
        padding: 10px;
        border-bottom: 2px solid #BBBBBB;
        img{
            width: 250px;
            margin-bottom: 10px;
            transform: translateX(5px);
        }
    }
    &__text{
        font-size: 18px;
    }
    &__data{
        font-size: 13px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

}
</style>