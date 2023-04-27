<template>
  <header class="header">
    <div class="container header__container">
        <div class="header__val-wrap">
        <ul class="header__val container">
            <li><img src="@/assets/images/icons/russia.png" alt="">  RUB {{ setRub }}</li>
            <li><img src="@/assets/images/icons/eur.png" alt="">  EUR {{ setEur }}</li>
            <li><img src="@/assets/images/icons/kz.png" alt="">  KZT {{ setKzt}}</li>
        </ul>
    </div>
    <div class="header__wrap">
        <div class="header__left-bar">
            <router-link to="/penguinnews" class="header__logo-wrap">
                <div class="header__logo"><img src="@/assets/images/REBM1C3.svg" alt="ourlogo"></div>
                <h1 class="header__title">PENGUIN<span> news</span></h1>
            </router-link>
            <div class="header__search-wrap">
                <img src="@/assets/images/icons/search.svg" alt="searchBtn">
                <input type="text" class="header__seatch">
            </div>
        </div>
        <div class="header__right-bar">
            
            <div class="header__social-wrap">
                <ul class="header__social">
                    <li><a href="https://www.instagram.com/"><img src="@/assets/images/icons/in.svg" alt="instagram"></a></li>
                    <li><a href="https://web.telegram.org/k/"><img src="@/assets/images/icons/tl.svg" alt="telegram"></a></li>
                    <li><a href="https://www.whatsapp.com/?lang=ru"><img src="@/assets/images/icons/wp.svg" alt="whatsapp"></a></li>
                </ul>
            </div>
            <div class="header__burger-wrap">
                <ul class="header__burger" @click="openMenuBurger" :class="{ 'header__burger-active' : navIsVisible}">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        </div>
        <transition-group name="nav" class="header__nav-wrap">
            <nav class="header__nav" v-if="navIsVisible">
                <ul class="header__list">
                    <li v-for="item of categoriesForNav" :key="item" @click="pushToAllItemWichTitile(item)">{{ item.title}}</li>
                </ul>
            </nav>
        </transition-group>
     </div>
    </header>
</template>

<script>
import axios from "axios"
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            navIsVisible: false,
            kzt : "",
            rub : "",
            eur : "",
            categoriesForNav: [
                {index: 1, title: "Россия"},
                {index:10, title:"Экономика"},
                {index: 2,title: "Мир"},
                {index:11,title: "Культура"},
                {index: 7,title: "Спорт"},
                {index: 6, title:"Интернет и СМИ"}
            ]
        }
    },
    methods:{
        ...mapMutations({
            setTitle: "setTitle",
            setIsActiveCategories: "setIsActiveCategories"
        }),
        pushToAllItemWichTitile(item){
            this.setTitle(item.title)
            this.setIsActiveCategories(item.index)
            this.$router.push("penguinnews/all-news")
        },
        openMenuBurger(){
            this.navIsVisible = !this.navIsVisible
        },
        getVal(){
            axios.get("https://openexchangerates.org/api/latest.json?app_id=e1ca28dd549e4958bb426905fdbdcde6")
            .then(response => {
                this.kzt = response.data.rates.KZT
                this.rub = response.data.rates.RUB
                this.eur = response.data.rates.EUR
                console.log(response)
            })
        },
        
    },
    computed:{
        setKzt(){
            return this.kzt.toString().slice(0, 6)
        },
        setRub(){
            return this.rub.toString().slice(0, 6)
        },
        setEur(){
            return this.eur.toString().slice(0, 5)
        }
    },
    mounted(){
        this.getVal()
    }
}
</script>

<style lang="scss" scoped>

.header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 24px;
    cursor: pointer;
}

.header__burger li {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    transform-origin: center;
    transition: transform 0.3s ease-out;
}

.header__burger li:nth-child(1) {
    top: 0;
}

.header__burger li:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.header__burger li:nth-child(3) {
    bottom: 0;
}

.header__burger-active li:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.header__burger-active li:nth-child(2) {
    transform: translateY(-6px) rotate(-45deg);
}

.header__burger-active li:nth-child(3) {
    transform: scale(0);
}
.header{
        &__val-wrap{
            background-color: #4AC0FF;
            padding: 0px 10px;
        }
        &__val{
            padding: 5px 0px;
            justify-content: end;
            display: flex;
            li{
              img{
                width: 20px;
                height: 20px;
              }
              margin-left: 20px;
              font-size: 18px;
            }
        }
        &__container{
            position: relative;
        }
        &__wrap{
            background-color: #FFFFFF;
            position: relative;
            padding: 10px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__left-bar{
            display: flex;

        }
        &__title{
            cursor: pointer;
            font-size: 30px;
            display: flex;
            align-items: center;
            margin-right: 20px;
            span{
                color: #535353;
            }
        }
        &__logo{
            cursor: pointer;
            img{
                max-width: 50px;
                max-height: 50px;
            }
        }
        &__search-wrap{
            img{
                max-width: 20px;
                max-height: 20px;
                cursor: pointer;
            }
        }
        &__logo-wrap{
            display: flex;
            color: black;
        }
        &__social{
            display: flex;
            li:hover{
                img{
                    width:25px;
                }
            }
            li{
                transform: translateY(3px);
                width: 30px;
                height: 30px;
                margin-left: 10px;
                img{
                    width:20px;
                }
            }
            li:first-child{
                margin-left: 20px;
            }
            li:last-child{
                margin-right: 40px;
            }
        }
        &__right-bar{
            display: flex;
        }
        &__search-wrap{
            display: flex;
            align-self: center;
            padding: 0px 10px;
            align-items: center;
            border-radius: 20px;
            border: 2px solid black;
            input{
                height: 25px;
                width: 0px;
                align-self: center;
                background-color: #FFFFFF;
                font-size: 18px;
                transition-duration: 800ms;
            }
            
        }
        &__search-wrap:hover{
            input{
                width: 500px; 
            }
        }
        &__nav{
            position: absolute;
            width: 100%;
        }
        &__list{
            display: flex;
            padding: 0px 30px;
            justify-content: space-between;
            margin-top: 10px;
            li{
                cursor: pointer;
                font-size: 18px;
                :visited{
                    color:black;
                }
                position: relative;
                text-decoration: none;
            }
            li::before {
                content: "";
                position: absolute;
                width: 0;
                height: 4px;
                bottom: -5px;
                right: 0;
                background-color: #4AC0FF;
                transition: width 0.2s ease-in-out;
                }

            li:hover::before {
                width: 100%;
                left: 0;
                right: auto;
            }
        }
}
































.nav-enter-active {
  transition: all .3s ease;
}
.nav-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.nav-enter, .nav-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translatey(-15px);
  opacity: 0;
}
</style>