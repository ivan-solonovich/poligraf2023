<template>
    <div class="home-title-text-container">
        <h2 class="work-title">Благодаря проверке на детекторе лжи можно выявить:</h2>
        <ul class="home-title-text-subtitle-container">
            <li>склонность к суициду</li>
            <li>наркотическую и алкогольную зависимости</li>
            <li>увлечение азартными играми(игромания)</li>
            <li>участие в религиозных сектах или культах</li>
            <li>участие в преступных группировках</li>
            <li>кражу денег и ценностей из дома</li>

        </ul>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextTeens",
        components:{
            IconsContainer
        }
    }
</script>

<style scoped>
    .home-title-text-container{
        padding-top: 2rem;
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .home-title-text-subtitle-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 3rem;
    }
    .work-title{
        padding-left: 1rem;
        color: #3F51B5;
    }
    ul{
        list-style: none;
    }
    li{
        font-size: 1.3rem;
    }
    ul>li:before {
        content: '✔';
        padding-right: .5rem;
        color: darkgreen;
    }
</style>