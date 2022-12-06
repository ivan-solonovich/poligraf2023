<template>
    <div class="nav-container">
        <LogoNav/>
    </div>
</template>

<script>
    import LogoNav from "@/components/nav/LogoNav";
    export default {
        name: "Navigation",
        components:{
            LogoNav
        }
    }
</script>

<style scoped>
.nav-container{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>