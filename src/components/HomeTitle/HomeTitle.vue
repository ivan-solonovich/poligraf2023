<template>
    <div class="home-title-container">
        <div class="container-title">
        <HomeTitleText/>
        <HomeTitleImage/>
        </div>
        <HomeBody/>
        <HomeList/>
    </div>
</template>

<script>
    import HomeTitleText from "@/components/HomeTitle/HomeTitleText";
    import HomeTitleImage from "@/components/HomeTitle/HomeTitleImage";
    import HomeBody from "@/components/HomeBody/HomeBody";
    import HomeList from "@/components/HomeTitle/HomeList";
    export default {
        name: "HomeTitle",
        components:{
            HomeTitleText,
            HomeTitleImage,
            HomeBody,
            HomeList
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