<template>
    <div class="phone-nav">
        <a href="tel:+48799247910">
            <img class="icon-mess" width="32" height="32" src="../../assets/icons8-звонок-phonelink.gif" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "PhoneNav"
    }
</script>

<style scoped>
.phone-nav{
    color: crimson;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
    a{
        text-decoration: none;
    }
</style>