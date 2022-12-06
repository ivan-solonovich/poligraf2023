<template>
    <div class="home-body">
        <div class="home-body"><div class="home-title-main-text">
            <div class="home-title-main-text">Подростки своим поведением зачастую
                доставляют массу хлопот своим родителям.</div>

            <h3 class="home-text-description">Причин для этого масса: переходный возраст,
                плохая компания, желание попробовать алкоголь и запрещенные вещества и т.д.
            </h3>
        </div>
        </div>

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