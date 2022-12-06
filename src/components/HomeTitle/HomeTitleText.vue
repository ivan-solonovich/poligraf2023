<template>
    <div class="home-title-text-container">

        <ul class="home-title-text-subtitle-container">
            <li>ЗАЩИТИ СВОЙ БИЗНЕС</li>
            <li>БУДЬ УВЕРЕН В СВОИХ СОТРУДНИКАХ</li>
            <li>БУДЬ УВЕРЕН В ПАРТНЕРАХ ПО БИЗНЕСУ</li>
            <li>НЕ ДАЙ СЕБЯ ОБМАНУТЬ</li>
            <li>ВЕРНИ ДОВЕРИЕ В СЕМЬЮ</li>
        </ul>
        <div class="home-title-text-subtitle-description-container">
            <p>ПРОФЕССИОНАЛЬНЫЕ ПРОВЕРКИ НА ПОЛИГРАФЕ (ДЕТЕКТОРЕ ЛЖИ) ОТ КОМАНДЫ ЭКСПЕРТОВ-ПОЛИГРАФОЛОГОВ В ВАРШАВЕ,
                ПОЛЬШЕ, В ЛЮБОЙ СТРАНЕ ЕВРОПЫ. </p>
            <p>МЫ ГАРАНТИРУЕМ ВЫСОКОЕ КАЧЕСТВО СВОЕЙ РАБОТЫ И КОНФЕДЕНЦИАЛЬНОСТЬ
                ПРОВЕДЕННЫХ ПРОВЕРОК И ДАННЫХ НАШИХ КЛИЕНТОВ.</p>
        </div>
       <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleText",
        components:{
            IconsContainer
        }
    }
</script>

<style scoped>

    .home-title-text-container{
        padding-left: 1rem;
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
        padding-left: 1rem;
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