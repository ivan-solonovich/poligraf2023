<template>
    <div class="c-home-title-container">
        <div class="container-title">
            <HomeTitleTextCourt/>
            <HomeTitleImageCourt/>
        </div>

    </div>
</template>

<script>
    import HomeTitleTextCourt from "@/components/court/HomeTitleTextCourt";
    import HomeTitleImageCourt from "@/components/court/HomeTitleImageCourt";
    export default {
        name: "CourtMain",
        components:{
            HomeTitleTextCourt,
            HomeTitleImageCourt
        }
    }
</script>

<style scoped>
    .c-home-title-container{
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