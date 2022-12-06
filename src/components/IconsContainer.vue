<template>
    <div class="icons-container">
        <a href="https://wa.me/%2B48799247910">
            <img class="icon-mess" width="64" height="64" src="../assets/icons-messanger/icons8-whatsapp.gif" alt="">
        </a>
        <a href="viber://chat?number=%2B48799247910">
        <img class="icon-mess" width="64" height="64"  src="../assets/icons-messanger/icons8-viber.gif" alt="">
    </a>
        <a href="https://t.me/%2B48799247910">
            <img class="icon-mess" width="64" height="64" src="../assets/icons-messanger/icons8-телеграмма-app.gif" alt="">
        </a>
        <a href="tel:+48799247910">
            <img class="icon-mess" width="64" height="64" src="../assets/icons8-звонок-phonelink.gif" alt="">
        </a>

    </div>
</template>

<script>
    export default {
        name: "IconsContainer"
    }
</script>

<style scoped>
    .icons-container{
        width: 200px;
        display: flex;
        justify-content: center;
    }
    .icon-mess{
        margin: 1rem;
    }
</style>