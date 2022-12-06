<template>
    <div class="home-main">
        <NavigationBar/>
        <router-view></router-view>
        <FooterMain/>


    </div>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar";
    import FooterMain from "@/components/footer/FooterMain";


    export default {
        name: "HomeMain",
        props: {

    },
        components:{
            NavigationBar,
            FooterMain,

        }
    }
</script>

<style scoped>
.home-main{
    max-width: 1480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}



ul{
    list-style: none;
}
li{
    font-size: 1.3rem;
}
ul>li:before{
    content: '✔';
    padding-right: .5rem;
    color: darkgreen;
;
}
</style>