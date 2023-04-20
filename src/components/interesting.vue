<template>
  <section class="interesting">
    <div class="container">
        <div class="interesting__wrap-news news">
            <div class="interesting__title"><h4>Может быть интересно</h4></div>
            <div class="interesting__wrap">
                <div class="interesting__item" v-for="item of interestingNews.slice(0, 10)" :key="item">
                    <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                        <p class="interesting__text">{{ item.title }}</p>
                        <p class="interesting__data">{{ item.isoDate.slice(0,10,) }}  {{ item.isoDate.slice(12,16) }}</p>
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
        interestingNews(){
        return this.news.filter(item => {
            if(item.categories){
                return  item.categories[0] == "Забота о себе" || item.categories[0] == "Из жизни"
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
    .interesting{
    background: white;
    max-width: 300px;
    margin-left: 20px;
    margin-top: 20px;
    &__wrap{
        height: 450px;
        overflow: scroll;
    }
    &__title{
        background-color: #4AC0FF;
        h4{
            font-size: 20px;
            padding: 10px;
        }
    }
    &__item{
        padding: 10px;
        border-bottom: 2px solid #BBBBBB;
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