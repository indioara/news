<template>
  <section class="all-news">
    <div class="all-news__container container">
        <ul class="all-news__wrap">
            <li class="all-news__item" v-for="item of newsItems.slice(0, countNews)" :key="item">
                <router-link :to="{name: 'newsItem', params: {newsTitle: item.title}}">
                    <img :src="item.enclosure && item.enclosure.url" alt="" onerror="this.src='/assets/images/allNews/1.jpg'">
                    <div class="all-news__about">
                        <p class="all-news__text">{{ item.title }}</p>
                        <div class="all-news__info">
                            <ui-date :itemDate="item.isoDate"></ui-date>
                            <p class="all-news__author">{{ item.author }}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="all-news__btns">
            <uiButton @click="setCountNews">больше новостей</uiButton>
            <uiButton @click="pushToAllNews">Все новости</uiButton>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            dateNow: "",
            countNews: 6
        }
    },
    computed:{
        ...mapState({
            newsItems: state => state.news.newsItems,
        })
    },
    methods:{
        pushToAllNews(){
            this.$router.push("/penguinnews/all-news")
        },
        
        setCountNews(){
            this.countNews = this.countNews + 6
        }
    },

}
</script>

<style lang="scss" scoped>
.all-news{
    &__info{
        margin-top: 5px;
        display: flex;
        font-size: 13px;
        p:last-child{
            margin-left: 10px;
        }
        P:first-child::after{
            content: ".";
            margin-left: 10px;
        }
    }
    &__btns{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        button{
            padding: 10px 15px;
            background-color: #4AC0FF;
            font-size: 18px;
            transition: 200ms ease-in-out;
            border-radius: 15px;
            &:hover{
                background-color: #A0DEFF;
            }
        }
        button:last-child{
            margin-left: 10px;
        }
    }
    &__text{
        font-size: 18px;
        margin-top: 5px;
    }
    &__data{
        
        
    }
    &__about{
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    margin-top: 50px;
    &__wrap{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 25px;
        grid-row-gap: 40px;
        

        
    }
    &__item{
        a:visited{
            color: black;
        }
        a{
            img{
                width: 250px;
                height: 180px;
            }
        }
    }
}

</style>