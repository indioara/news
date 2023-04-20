<template>
    <p>{{ setDate(itemDate) }}</p>
</template>

<script>
export default {
    name: "uiDate",
    props:{
        itemDate: String
    },
    methods:{
        setDate(itemDate){
                let date = new Date()
                let day = date.getDate()
                let month = date.getMonth()
                if(date.getDate() < 10){
                    day = `0${date.getDate()}`
                }
                if(date.getMonth() < 12){
                    month = `0${date.getMonth()}`
                }

                if(day == itemDate.slice(8, 10)){
                    return `Сегодня ${itemDate.slice(11, 16)}` 
                }else if(day - 1 == itemDate.slice(8, 10)){
                    return `Вчера ${itemDate.slice(11, 16)}` 
                }else return `${itemDate.slice(8, 10)} ${month} ${date.getFullYear()} ${itemDate.slice(11, 16)}`

                
        },
    }
}
</script>

<style>

</style>