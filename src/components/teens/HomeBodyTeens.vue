<template>
    <div class="home-body">
        <div class="home-body"><h1 class="home-title-main-text">
            <h1 class="home-title-main-text">Подростки своим поведением зачастую
                доставляют массу хлопот своим родителям.</h1>

            <h3 class="home-text-description">Причин для этого масса: переходный возраст,
                плохая компания, желание попробовать алкоголь и запрещенные вещества и т.д.
            </h3>
        </h1></div>

        <h3 class="home-text-description">Если родители выявили в поведении ребёнка странные поступки,
            необъяснимые реакции, депрессию, панические атаки, повышенную агрессивность,
            а причины такого поведения непонятны, то необходимо обратиться к полиграфологу
            и тем самым предотвратить возможные негативные последствия.
        </h3>
    </div>
</template>

<script>
    export default {
        name: "HomeBodyTeens"
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