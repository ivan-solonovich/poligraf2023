<template>
    <div class="home-title-container">
        <div class="container-title">
            <HomeTitleTextAbout/>
            <HomeTitleTextAboutRU/>
        </div>
<!--        <HomeBodyAbout/>-->
<!--        <HomeListAbout/>-->
    </div>
</template>

<script>
    import HomeTitleTextAbout from "@/components/about/HomeTitleTextAbout";
    import HomeTitleTextAboutRU from "@/components/about/HomeTitleTextAboutRU";
    export default {
        name: "AboutMain",
        components:{
            HomeTitleTextAboutRU,
            HomeTitleTextAbout
        }
    }
</script>

<style scoped>
    .home-title-container{
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