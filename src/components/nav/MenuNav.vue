<template>
    <div class="menu-container" >
        <ul class="menu-list" @mouseleave="closeMenu">


                <router-link class="menu-item" :to="{name:'home'}" active-class="none">
                Home
                </router-link>

                <li  @click="show = !show" class="menu-item" >Услуги &#9660;
                    <transition  name="slide-fade">
                    <ul v-if="show"  class="submenu">
                        <li><router-link class="submenu-item" :to="{name:'work'}">
                        ПРОВЕРКИ КАНДИДАТОВ ПРИ ТРУДОУСТРОЙСТВЕ, ПРОВЕРКА ДЕЙСТВУЮЩИХ РАБОТНИКОВ
                        </router-link></li>
                        <li><router-link class="submenu-item" :to="{name:'treason'}">
                        ПРОВЕРКА НА ИЗМЕНУ
                        </router-link></li>
<!--                        <li>СЛУЖЕБНОЕ РАССЛЕДОВАНИЕ С ПРИМЕНЕНИЕМ ДЕТЕКТОРА ЛЖИ ПРИ ХИЩЕНИЯХ НА РАБОТЕ И ДОМА</li>-->
                        <li><router-link class="submenu-item" :to="{name:'court'}">
                        ПРОВЕДЕНИЕ СУДЕБНОЙ ЭКСПЕРТИЗЫ С ПРИМЕНЕНИЕМ ДЕТЕКТОРА ЛЖИ
                        </router-link></li>
                        <li><router-link class="submenu-item" :to="{name:'teens'}">
                            ВЫЯВЛЕНИЕ СКЛОННОСТЕЙ У ПОДРОСТКОВ СКЛОННОСТЕЙ К СУИЦИДУ,
                            УПОТРЕБЛЕНИЮ НАРКОТИКОВ, АЗАРТНЫМ ИГРАМ, СЕКТАНСТВУ, ХИЩЕНИЯМ.</router-link></li>
                        <li><router-link class="submenu-item" :to="{name:'prev'}">
                            ПРОБНАЯ ПРОВЕРКА НА ДЕТЕКТОРЕ ЛЖИ</router-link></li>
                    </ul>
                    </transition>
                </li>

            <router-link class="menu-item" :to="{name:'price'}">
            Расценки
            </router-link>
            <li class="menu-item"> <router-link class="menu-item" :to="{name:'about'}">
                О нас</router-link>
            </li>
            <li class="menu-item"> <router-link class="menu-item" :to="{name:'history'}">
                История полиграфа</router-link>
            </li>
        </ul>

    </div>
</template>

<script>


    export default {
        name: "MenuNav",
        data () {
            return {
                show: false
            }
        },
        methods:{
            closeMenu(){
                    return this.show = false
                }
        }
    }
</script>

<style scoped>
.menu-container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
    .menu-list{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;
    }
    .menu-item{
        color: dimgrey;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.3rem;
        list-style: none;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
        padding-top: .5rem;
    }

    .submenu{
        background-color: #3F51B5;
        font-weight: bold;
        max-width: 650px;
        padding-top: .5rem;
        position: absolute;
        list-style: none;
        text-decoration: none;
        border-radius: 5px;
        z-index: 999;
    }
    .submenu>li{
        margin: 1rem;
        padding: 1rem;
        border-bottom: #ffffff solid 2px;
    }

    .submenu-item{
        width: 100%;
        color: white;
        text-decoration: none;

        z-index: 999;

    }
    .submenu-item:hover{
        background-color: darkslategrey;
        transition: background-color 1s ease-out 100ms
    }

    .slide-fade-enter-active {

    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>