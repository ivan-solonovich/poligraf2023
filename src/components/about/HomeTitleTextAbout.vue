<template>
    <div class="home-title-text-container">
        <p>Команда досвідчених поліграфологів надає весь спектр послуг з опитувань та досліджень за допомогою поліграфа (детектора брехні) у всіх країнах Європи.</p>
        <ul class="home-title-text-subtitle-container">
            <li>ЗАХИСТИ СВІЙ БІЗНЕС</li>
            <li>БУДЬ ВПЕВНЕНИЙ У СВОЇХ СПІВРОБІТНИКАХ</li>
            <li>БУДЬ ВПЕВНЕНИЙ У ПАРТНЕРАХ З БІЗНЕСУ</li>
            <li>НЕ ДАЙ СУБЕ ОБДУРИТИ</li>
            <li>ВЕРНІ ДОВІРУ В СІМ'Ю</li>
        </ul>
        <div class="home-title-text-subtitle-description-container">

            <p>У нашій роботі ми використовуємо найсучасніше обладнання та передові методики виявлення брехні. </p>
            <p>Мінімальний досвід наших поліграфологів у цій сфері – 7 років.</p>
            <p>Ми гарантуємо високу якість послуг,
                індивідуальний підхід та повну конфіденційність наших клієнтів.</p>
            <p>У нашій команді немає «фахівців», які навчалися на «поліграфолога» протягом місяця,
                купили старий поліграф, намалювали безліч дипломів і намагаються заробляти гроші,
                надаючи послуги невисокої якості. З нашою командою постійно співпрацюють відомі компанії.</p>
        </div>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextAbout",
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
    p{
        padding-left: 1rem;
    }
</style>