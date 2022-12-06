<template>
    <div class="nav-container">
        <LogoNav/>
        <MenuNav/>

    </div>
</template>

<script>
    import LogoNav from "@/components/nav/LogoNav";
    import MenuNav from "@/components/nav/MenuNav";

    export default {
        name: "NavigationBar",
        components:{
            LogoNav,
            MenuNav,

        },
        computed:{


    }

    }
</script>

<style scoped>
.nav-container{
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-gap: 1rem;

}
@media screen and (max-width: 1058px) {
    .nav-container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;

    }
}
</style>
