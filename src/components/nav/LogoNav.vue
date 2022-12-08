<template>
    <div class="logo">
        <div class="logo-container" ><img  src="../../assets/photo_2022-11-28_09-13-18.jpg" class="logo-main"><h2>POLIGRAF2023</h2></div>
    </div>
</template>

<script>
    export default {
        name: "LogoNav"
    }
</script>

<style scoped>
    .logo-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 1rem;
    }
    .logo{
        color: gray;
        width: 100%;
    }
    .logo-main{
        width: 36px;
        height: auto;
        padding-right: .5rem;

    }
</style>