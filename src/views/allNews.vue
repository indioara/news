<template>
  <div class="page-wrapper ">
        <my-header class="aboba"></my-header>
        <my-nav></my-nav>
        <main class="content-wrapper">
          <div class="container top-content">
            <div class="main-con">
              <all-news></all-news>
            </div>
            <div class="right-bar">
              <right-bar class="right-bar__item"></right-bar>
            </div>
          </div>
      </main>
      <my-footer></my-footer>
    </div>
</template>
<script>
import myHeader from '@/components/header.vue'
import myNav from '@/components/allNewsComponents/nav.vue'
import allNews from '@/components/allNewsComponents/allNews.vue'
import rightBar from '@/components/rightBar.vue'
import myFooter from '@/components/footer.vue'
export default {
  components: { myHeader, myNav, allNews, rightBar,myFooter},
}
</script >

<style lang="scss">
.aboba{
  .header__burger-wrap{
    display: none;
  }
}
  .main-con{
    max-width: 800px;
  }
  .right-bar__item{
    transform: translateY(-80px);
  }

</style>
