<template>
    <div class="home-body">
        <h1 class="home-title-main-text">Пробная проверка на полиграфе</h1>

        <h3 class="home-text-description">Проверка на детекторе лжи не поможет
            Вам скрыть правду, но поможет доказать свою непричастность к негативным поступкам,
            убедить работодателя взять Вас на работу,
            продемонстрирует честность, поможет получить престижную должность.
            Конечно, если Вы говорите правду.
        </h3>
    </div>
</template>

<script>
    export default {
        name: "HomeBodyPrev"
    }
</script>

<style scoped>

    .home-body{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #c4c4c4;
        padding: 1rem;
    }
    .home-title-main-text{
        text-align: center;
        font-size: 2rem;
        color:  #3F51B5;
        margin: 1rem;


    }
    .home-text-description{
        text-align: center;
        max-width: 1280px;
        padding: 2rem 2rem;
    }
</style>