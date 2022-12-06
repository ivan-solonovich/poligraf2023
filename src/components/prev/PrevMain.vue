<template>
    <div class="w-home-title-container">
        <div class="container-title">
            <HomeTitleTextPrev/>
            <HomeTitleImagePrev/>
        </div>
        <HomeBodyPrev/>
<!--        <HomeBodyListPrev/>-->
    </div>
</template>

<script>
    import HomeTitleTextPrev from "@/components/prev/HomeTitleTextPrev";
    import HomeTitleImagePrev from "@/components/prev/HomeTitleImagePrev";
    import HomeBodyPrev from "@/components/prev/HomeBodyPrev";
    export default {
        name: "PrevMain",
        components:{
            HomeTitleTextPrev,
            HomeTitleImagePrev,
            HomeBodyPrev
        }
    }
</script>

<style scoped>
    .w-home-title-container{
        width: 100%;


    }
    .container-title{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 1058px) {
        .container-title{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>