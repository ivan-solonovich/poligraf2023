<template>
    <div class="w-home-title-container">
        <div class="container-title">
            <HomeTitleTextWork/>
            <HomeTitleImageWork/>
        </div>
            <HomeBodyWork/>
            <HomeBodyListWork/>
    </div>
</template>

<script>
    import HomeTitleTextWork from "@/components/work-check/HomeTitleTextWork";
    import HomeTitleImageWork from "@/components/work-check/HomeTitleImageWork";
    import HomeBodyWork from "@/components/work-check/HomeBodyWork";
    import HomeBodyListWork from "@/components/work-check/HomeBodyListWork";
    export default {
        name: "WorkCheck",
        components:{
            HomeTitleTextWork,
            HomeTitleImageWork,
            HomeBodyWork,
            HomeBodyListWork
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