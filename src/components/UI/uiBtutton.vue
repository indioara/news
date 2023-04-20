<template>
  <button class="ui-button"><slot></slot></button>
</template>

<script>
export default {
    name: "uiButton"
}
</script>

<style lang="scss">
.ui-button{
    padding: 10px 15px;
    background-color: #4AC0FF;
    font-size: 18px;
    transition: 200ms ease-in-out;
    border-radius: 15px;
    &:hover{
        background-color: #A0DEFF;
    }
}
</style>