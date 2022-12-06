<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-contacts">
            <h2 style="color: white">Связаться с нами:</h2>
            <div class="icons-container">
                <a href="tel:+48799247910">
                    <img class="icon-mess" width="32" height="32" src="../../assets/icons8-звонок-phonelink.gif" alt="">
                </a>
                <a href="https://wa.me/%2B48799247910">
                    <img class="icon-mess" width="32" height="32" src="../../assets/icons-messanger/icons8-whatsapp.gif" alt="">
                </a>
                <a href="viber://chat?number=%2B48799247910">
                <img class="icon-mess" width="32" height="32"  src="../../assets/icons-messanger/icons8-viber.gif" alt="">
                </a>
                <a href="https://t.me/%2B48799247910">
                    <img class="icon-mess" width="32" height="32" src="../../assets/icons-messanger/icons8-телеграмма-app.gif" alt="">
                </a>

            </div>
        </div>
            <div class="footer-social-media">
            <h2 style="color: white">Присоединяйтесь к нам в:</h2>
            <div class="icons-container">
                <a href="https://www.facebook.com/100088354503698/posts/1802392273458068/?substory_index=1802392273458068">
                    <img class="icon-mess" width="32" height="32" src="../../assets/icons8-facebook.gif" alt="">
                </a>
                <a href="https://www.instagram.com/polygraf2023/">
                    <img class="icon-mess" width="32" height="32" src="../../assets/icons8-instagram.gif" alt="">
                </a>

            </div>
        </div>
            <div class="footer-pages"></div>
         </div>
        <CopyRight/>
    </div>


</template>

<script>
    import CopyRight from "@/components/CopyRight";
    export default {
        name: "FooterMain",
        components:{
            CopyRight
        }
    }
</script>

<style scoped>
    .footer-wrapper{
        margin-top: 1rem;
        padding-top: 2rem;
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        background-color: #3F51B5;
        padding-bottom: 2rem;
    }
    .footer-container{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        background-color: #3F51B5;
        margin-top: 2rem;
       padding-bottom: 1rem;
    }
    @media screen and (max-width: 1058px) {
        .footer-container{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
        }}
    .footer-contacts {

        background-color: #3F51B5;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

    }
.footer-social-media{
    background-color: #3F51B5;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.footer-pages{

    background-color: #3F51B5;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
    .icon-mess{
        padding-left: 1rem;
        padding-right: 1rem;

    }
</style>