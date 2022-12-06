<template>
    <div class="home-title-text-container">
        <h2 class="work-title">Многие хотят проверить свои реакции на детекторе лжи перед аналогичной проверкой</h2>
        <ul class="home-title-text-subtitle-container">
            <li>предварительно знать возможный результат проверки</li>
            <li>пройти проверку на детекторе лжи ради развлечения </li>
            <li>проверить фантазии о том, что обмануть детектор лжи легко</li>

        </ul>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextPrev",
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