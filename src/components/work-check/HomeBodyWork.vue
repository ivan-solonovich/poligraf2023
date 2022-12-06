<template>
    <div class="home-body">
        <h1 class="home-title-main-text">ПРОВЕРКИ КАНДИДАТОВ ПРИ ТРУДОУСТРОЙСТВЕ, ПРОВЕРКА ДЕЙСТВУЮЩИХ РАБОТНИКОВ</h1>

        <h3 class="home-text-description">Исследуемые темы могут быть расширены.
            При проверке кандидатов на руководящие должности, должности, которые связаны с крупными
            финансовыми операциями, кассиров,
            специалистов IT-индустрии, используются специализированные тесты.
        </h3>
    </div>
</template>

<script>
    export default {
        name: "HomeBodyWork"
    }
</script>

<style scoped>

    .home-body{
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #c4c4c4;
    }
    .home-title-main-text{
        text-align: center;
        font-size: 2rem;
        color:  #3F51B5;


    }
    .home-text-description{
        text-align: center;
        max-width: 1280px;
        padding: 1rem 2rem;
    }
</style>