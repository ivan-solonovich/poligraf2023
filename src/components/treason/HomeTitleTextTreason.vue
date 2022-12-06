<template>
    <div class="home-title-text-container">
        <h2 class="work-title">ПРОВЕРКА НА ДЕТЕКТОРЕ ЛЖИ НА СУПРУЖЕСКУЮ ИЗМЕНУ</h2>
        <ul class="home-title-text-subtitle-container">
            <li>Проверка измены на детекторе лжи очень часто является единственным способом,
                выявляющим факт измены или подтверждающим супружескую верность.</li>
            <li>Зачастую у мужа или жены (парня или девушки), возникают подозрения (как показывает практика,
                иногда беспочвенные), что произошёл факт измены.
                Достоверно выяснить так это или нет, можно с помощью детектора лжи достаточно быстро.</li>
            <li>Неоправданные подозрения в измене создают напряжённость в отношениях,
                могут привести к реальной измене или прекращению отношений.
                Проверка на полиграфе поможет выяснить истину и в зависимости от результата,
                обдуманно делать какие-то шаги в отношениях.</li>

        </ul>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextTreason",
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
        text-align: center;
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