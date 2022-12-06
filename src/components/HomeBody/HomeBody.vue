<template>
    <div class="home-body">
        <h1 class="home-title-main-text">Я очень люблю слушать ложь... Особенно, когда знаю правду (Андриано Челентано)</h1>

        <h3 class="home-text-description">Проверки на детекторе лжи проводятся с использованием самого современного оборудования и передовых технологий в области распознавания лжи. Минимальный опыт наших полиграфологов в данной сфере-7 лет.
            В нашей команде нет «специалистов», которые обучались на «полиграфолога» в течении месяца, купили старый полиграф, нарисовали множество дипломов и пытаются зарабатывать деньги, оказывая услуги невысокого качества. С нашей командой на постоянной основе сотрудничают известные компании.
        </h3>
    </div>
</template>

<script>
    export default {
        name: "HomeBody"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Comforter&family=Montserrat&display=swap');
       .home-body{
        display: flex;
        justify-content: center;
        flex-direction: column;
           background-color: #c4c4c4;
    }
    .home-title-main-text{
        text-align: center;
        font-size: 3rem;
        color:  #3F51B5;
        font-family: 'Comforter', cursive;

    }
.home-text-description{
    text-align: center;
    max-width: 1280px;
    padding: 1rem 2rem;
}
</style>