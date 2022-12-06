<template>
    <div class="home-title-image-container">
        <img class="home-title-image-settings" src="../../assets/photo_2022-12-03_21-58-19.jpg">
    </div>

</template>

<script>
    export default {
        name: "HomeTitleImageWork"
    }
</script>

<style scoped>
    .home-title-image-container{
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home-title-image-settings{
        margin: 2rem;
        width: 60%;
        height: auto;
    }
</style>