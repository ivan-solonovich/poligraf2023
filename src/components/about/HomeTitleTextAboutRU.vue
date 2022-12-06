<template>
    <div class="home-title-text-container">
<p>Команда опытных полиграфологов оказывает весь спектр услуг по опросам и исследованиям с помощью полиграфа
    (детектора лжи) во всех странах Европы.</p>
        <ul class="home-title-text-subtitle-container">
            <li>ЗАЩИТИ СВОЙ БИЗНЕС</li>
            <li>БУДЬ УВЕРЕН В СВОИХ СОТРУДНИКАХ</li>
            <li>БУДЬ УВЕРЕН В ПАРТНЕРАХ ПО БИЗНЕСУ</li>
            <li>НЕ ДАЙ СЕБЯ ОБМАНУТЬ</li>
            <li>ВЕРНИ ДОВЕРИЕ В СЕМЬЮ</li>
        </ul>
        <div class="home-title-text-subtitle-description-container">
            <p>В нашей работе мы используем самое современное оборудование и передовые методики выявления лжи.</p>
            <p>Минимальный опыт наших полиграфологов в данной сфере-7 лет.</p>
            <p>Мы гарантируем высокое качество услуг,
                индивидуальный подход и полную конфиденциальность наших клиентов.</p>
            <p>      В нашей команде нет «специалистов», которые обучались на «полиграфолога»
                в течении месяца, купили старый полиграф, нарисовали множество дипломов
                и пытаются зарабатывать деньги, оказывая услуги невысокого качества.
                С нашей командой на постоянной основе сотрудничают известные компании.</p>
        </div>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextAboutRU",
        components:{
            IconsContainer
        }
    }
</script>

<style scoped>
    .home-title-text-container{
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
    .home-title-text-subtitle-description-container{
        padding: 1rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #3F51B5;
        font-size: .8rem;
        font-weight: bold;
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