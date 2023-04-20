<template>
  <section class="main-news">
    <div class="container main-news__container">
        <ul class="main-news__links">
            <li class="main-news__link"><router-link to="/penguinnews">Главная</router-link> </li>
            <li class="main-news__link"><router-link to="/penguinnews/all-news">Новости</router-link> </li>
            <li class="main-news__link" @click.prevent="pushToAllItemWichTitile"><a href="">{{ teg }}</a></li>
        </ul>
        <div class="main-news__titles">
            <h1 class="main-news__title">{{ itemNews.title }}</h1>
        </div>
            <div class="main-news__wrap">
                <div class="main-news__left-bar">
                    <ui-date class="main-news__data" :itemDate="date"></ui-date>
                    <div class="main-news__author-wrap">
                        <p>Автор:</p>
                        <p class="main-news__author">{{ itemNews.author }}</p>
                    </div>
                    <div class="main-news__repost-wrap">
                        <p>Поделиться новостью</p>
                        <ul class="main-news__reposts">
                            <li><img src="@/assets/images/icons/wp.svg" alt=""></li>
                            <li><img src="@/assets/images/icons/fc.svg" alt=""></li>
                            <li><img src="@/assets/images/icons/tl.svg" alt=""></li>
                            <li><img src="@/assets/images/icons/vk.svg" alt=""></li>
                            <li><img src="@/assets/images/icons/tw.svg" alt=""></li>
                        </ul>
                    </div>
                </div>
            <div class="main-news__main">
                <img :src="img" alt="">
                    <div class="main-news__about">
                        <p class="main-news__text">{{ itemNews.content }}</p>
                    </div>
                    <div class="main-news__tegs">
                        <p class="main-news__teg">#{{ teg }}</p>
                    </div>
            </div>
            <div class="main-news__right-bar">
                <right-bar></right-bar>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations} from 'vuex'
import rightBar from '../rightBar.vue';
export default {
  components: { rightBar },
    data(){
        return{
            itemNews: {},
            img: "",
            teg: "",
            date: "",
        }
    },
    methods:{
        ...mapMutations({
            setTitle: "setTitle",
            setIsActiveCategories: "setIsActiveCategories"
        }),
        pushToAllItemWichTitile(){
            this.setTitle(this.teg)
            this.$router.push("/penguinnews/all-news")
        },
    },
    mounted(){
        this.news.forEach(elem => { 
            if(elem.title == this.$route.params.newsTitle){
                this.itemNews = elem
                this.img = elem.enclosure.url
                this.teg = elem.categories[0]
                this.date = elem.isoDate
            }
        });
        console.log(this.itemNews)
        

    },
    computed:{
        ...mapState({
            news: state => state.news.newsItems
        })
    }
}
</script>

<style lang="scss" scoped>
    .main-news{
        margin-top: 60px;
        &__links{
            display: flex;
            font-size: 18px;
            margin-bottom: 40px;
        }
        &__link::after{
            content:">";
            margin: 0px 20px;
            color:#AFACAA;

        }
        &__link:last-child::after{
            content: " ";
        }
        &__title{
            color: #2b2b2b;
            font-size: 40px;
            line-height: 56px;
            letter-spacing: -.01em;
        }
        &__titles{
            max-width: 855px;
            margin-bottom: 30px;
        }
        &__main{
            img{
                width: 100%;
            }
            max-width: 670px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
        }
        &__text{
            font-size: 16px;
            line-height: 24px;
        }
        &__wrap{
            display: flex;
            
        }
        &__about{
            margin-top: 30px;
        }
        &__text{
            font-size: 17px;
            line-height: 24px;
            font-weight: 400;
            font-style: normal;
        }
        &__left-bar{
            font-size: 20px;
            width: 200px;
        }
        &__data{
            position: relative;
        }
        &__data::before, &__author-wrap::before, &__repost-wrap::before{
            content: " ";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -20px;
            background-color: #D8D7D7;
        }
        &__author-wrap{
            position: relative;
            margin-top: 40px;
        }
        &__author{
            margin-top: 10px;
            font-size: 15px;
        }
        &__tegs{ 
            margin-top: auto;
            font-size: 17px;
        }
        &__teg{
            display: inline;
            padding: 5px 10px;
            border-radius: 50px;
            border: 2px solid #4AC0FF;
        }
        &__repost-wrap{
            margin-top: 40px;
            position: relative;
        }
        &__reposts{
            margin-top: 20px;
            display: flex;
            li{
                margin-left: 5px;
                img{
                    width: 25px;
                    height: 25px;
                }
            }
            li:first-child{
                margin-left: 0px;
            }
        }
        &__right-bar{
            .right-bar{
                width: 290px;
                margin-top: 0px;
                background-color: #A0DEFF;

                
            }
        }
    }
</style>