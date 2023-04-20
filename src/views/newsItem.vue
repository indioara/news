<template>
    <div class="page-wrapper ">
        <my-header></my-header>
        <main class="content-wrapper">
            <div class="container">
                <main-news></main-news>
            </div>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import mainNews from "@/components/separateNews/mainNews.vue"
import myHeader from "@/components/header.vue"
import myFooter from "@/components/footer.vue"
export default {
    components: { myHeader,myFooter, mainNews},
}
</script>

<style scoped>


</style>