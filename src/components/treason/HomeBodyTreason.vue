<template>
    <div class="home-body">
        <h1 class="home-title-main-text">Результаты проверки на измену на детекторе лжи имеют высокую достоверность</h1>

        <h3 class="home-text-description">благодаря применению самого современного компьютерного оборудования,
            индивидуального подхода,
            использования нескольких методов тестирования и системе неоднократного контроля результата.
        </h3>
    </div>
</template>

<script>
    export default {
        name: "HomeBodyTreason"
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