<template>
  <nav class="nav">
    <div class="container">
        <ul class="nav__list">
            <li class="nav__item" 
            v-for="(item, index) of categories" 
            :key="index" 
            :class="{nav__item_active: index == isActiveCategories}"
            @click="changeActive(item, index)"
            >
                <button> #{{ item }}</button>
            </li>
        </ul>
    </div>
  </nav>
</template>


<script>
import { mapMutations, mapState } from 'vuex'

export default {
    data(){
        return{
            
            categories: ["Все новости", "Россия","Мир","Среда обитания","Бывший СССР","Из жизни","Интернет и СМИ","Спорт","Наука и техника","Ценности","Экономика","Культура","Силовые структуры","Путешествия","Забота о себе","69-я параллель","Моя страна",]
        }
    },
    computed:{
        ...mapState({
            isActiveCategories: state => state.news.isActiveCategories
        })
    },
    methods:{
        ...mapMutations({
            setTitle: "setTitle",
            setChangeActive: "setChangeActive",
            setIsActiveCategories:  "setIsActiveCategories"
        }),
        changeActive(item, index){
            this.setTitle(item)
            this.setIsActiveCategories(index)
            this.isActiveCategories = index
        }
    }
}
</script>

<style lang="scss">
.nav{
    &__list{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    &__item{
        button{
            font-size: 18px;
            padding: 5px 10px;
            margin-left: 10px;
            border: 2px solid #4AC0FF;
            border-radius: 20px;
            margin-top: 10px;
            background-color: #F2F4F5;
        }
        
    }
    &__item_active{
        button{
            border: 2px solid black;
            background-color: #A0DEFF;
        }
    }
}
</style>