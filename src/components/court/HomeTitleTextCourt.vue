<template>
    <div class="home-title-text-container">
        <h2 class="work-title">Судебная экспертиза</h2>
        <ul class="home-title-text-subtitle-container">
            <li>исследование на основе специальных знаний по вопросам, которые являются или будут предметом
                судебного разбирательства. В различных странах Европы законодательство по-разному
                подходит к вопросу применения детектора лжи при проведении судебных экспертиз.
                Наши специалисты-полиграфологи имеют большой опыт проведения судебных экспертиз в Европе.</li>

        </ul>
        <IconsContainer/>
    </div>
</template>

<script>
    import IconsContainer from "@/components/IconsContainer";
    export default {
        name: "HomeTitleTextCourt",
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