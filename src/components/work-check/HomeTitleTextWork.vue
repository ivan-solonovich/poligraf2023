<template>
    <div class="home-title-text-container">
        <h2 class="work-title">Выявление факторов риска у кандидатов на работу:</h2>
        <ul class="home-title-text-subtitle-container">
            <li>алкогольная зависимость</li>
            <li>употребление наркотиков</li>
            <li>связи с криминалитетом или криминальное прошлое</li>
            <li>связи с конкурентами</li>
            <li>корыстные мотивы трудоустройства</li>
            <li>передача служебной информации на предыдущем месте работы
                конкурентам или правоохранительным органам</li>
            <li>хищения материальных ценностей на предыдущем месте работы</li>
            <li>недостоверная информация о причинах ухода с предыдущего места работы</li>
        </ul>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextWork",
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