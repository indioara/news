<template>
  <div class="page-wrapper">
        <my-header></my-header>
        <main class="content-wrapper">
          <div class="container top-content">
            <div class="main-con">
              <main-news></main-news>
              <all-news></all-news>
            </div>
            <div class="right-bar">
              <right-bar></right-bar>
              <interesting></interesting>
            </div>
          </div>
          <p @click="asa">asdsadasd</p>
          <world-news></world-news>
          <polit-news></polit-news>
          <sport-news></sport-news>
          <science></science>
      </main>
      <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from '@/components/header.vue'
import MainNews from '@/components/mainNews.vue'
import rightBar from "@/components/rightBar.vue"
import rightBarVue from '@/components/rightBar.vue'
import allNews from '@/components/allNews.vue'
import sportNews from '@/components/sportNews.vue'
import PolitNews from '@/components/politNews.vue'
import WorldNews from '@/components/worldNews.vue'
import myFooter from "@/components/footer.vue"
import interesting from "@/components/interesting.vue"
import science from "@/components/science.vue"
import axios from 'axios'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {science, myHeader, MainNews, rightBar, allNews, sportNews, PolitNews, WorldNews, myFooter, interesting},
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
        newsItems: state => state.news.newsItems,
      })
  },
  methods:{
    asa(){
      this.newsItems.forEach(element => {
        console.log(element)
      });
    },
    ...mapMutations({
        setNewsItem: "setNewsItem"
    }),
    ...mapActions({
        getNews: "getNews"
    })
  },
  mounted(){
    this.getNews()
  }  
}
</script>




<style>
.top-content{
  display: flex;
}
.main-con{
  width: 800px;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
}
</style>