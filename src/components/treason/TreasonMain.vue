<template>
    <div class="t-home-title-container">
        <div class="container-title">
            <HomeTitleTextTreason/>
            <HomeTitleImageTreason/>
        </div>
        <HomeBodyTreason/>
        <HomeBodyListTreason/>
    </div>
</template>

<script>
    import HomeTitleTextTreason from "@/components/treason/HomeTitleTextTreason";
    import HomeTitleImageTreason from "@/components/treason/HomeTitleImageTreason";
    import HomeBodyTreason from "@/components/treason/HomeBodyTreason";
    import HomeBodyListTreason from "@/components/treason/HomeBodyListTreason";
    export default {
        name: "TreasonMain",
        components:{
            HomeTitleTextTreason,
            HomeTitleImageTreason,
            HomeBodyTreason,
            HomeBodyListTreason
        }
    }
</script>

<style scoped>
    .t-home-title-container{
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