<template>
    <div class="w-home-title-container">
        <div class="container-title">
            <HomeTitleTextTeens/>
            <HomeTitleImageTeens/>
        </div>
        <HomeBodyTeens/>
        <HomeBodyListTeens/>
    </div>
</template>

<script>
    import HomeTitleTextTeens from "@/components/teens/HomeTitleTextTeens";
    import HomeTitleImageTeens from "@/components/teens/HomeTitleImageTeens";
    import HomeBodyTeens from "@/components/teens/HomeBodyTeens";
    import HomeBodyListTeens from "@/components/teens/HomeBodyListTeens";
    export default {
        name: "TeensCheck",
        components:{
            HomeBodyListTeens,
            HomeBodyTeens,
            HomeTitleTextTeens,
            HomeTitleImageTeens
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