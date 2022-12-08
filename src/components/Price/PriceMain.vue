<template>
    <div class="price-container" >
        <h1 class="price-title">Цены на наши услуги</h1>
        <div class="table-description">
            <h2>     МЫ ГАРАНТИРУЕМ ВЫСОКОЕ КАЧЕСТВО СВОЕЙ РАБОТЫ И КОНФЕДЕНЦИАЛЬНОСТЬ
                ПРОВЕДЕННЫХ ПРОВЕРОК И АНОНИМНОСТЬ ДАННЫХ НАШИХ КЛИЕНТОВ.</h2>
            <h2>ПОСТОЯННЫМ КЛИЕНТАМ КОМПАНИИ ПРЕДОСТАВЛЯЮТСЯ СКИДКИ.</h2>
            <h2>СТОИМОСТЬ УСЛУГ МОЖЕТ МЕНЯТЬСЯ В ЗАВИСИМОСТИ ОТ СТРАНЫ ОКАЗАНИЯ УСЛУГ И СЛОЖНОСТИ ПРОВОДИМОЙ ПРОВЕРКИ.</h2>
        </div>
        <div class="price-table-container">
            <p>ЦЕНЫ НА УСЛУГИ ПРИ ОДНОКРАТНОМ ОБРАЩЕНИИ:</p>
            <table class="price">
                <tr>
                    <th>Услуга</th>
                    <th>Стоимость</th>
                </tr>
                <tr>
                    <td>КАДРОВЫЕ ПРОВЕРКИ ПРИ ПРИЁМЕ НА РАБОТУ</td>
                    <td>ОТ 120 ЕВРО</td>
                </tr>
                <tr>
                    <td>ПРОВЕРКА ДОМАШНЕГО ПЕРСОНАЛА И РАБОТАЮЩИХ СОТРУДНИКОВ</td>
                    <td>ОТ 120 ЕВРО</td>
                </tr>
                <tr>
                    <td>Кадровые проверки принимаемых на работу сотрудников IT компаний и руководящего состава организаций</td>
                    <td>ОТ 150 ЕВРО</td>
                </tr>
                <tr>
                    <td>СЛУЖЕБНАЯ ПРОВЕРКА ПРИ НЕДОСТАЧАХ И ХИЩЕНИЯХ, ЗА ОДНОГО РЕСПОНДЕНТА
                        (ПРИ ПРОВЕРКАХ БОЛЕЕ 2 ЧЕЛОВЕК ПО ОДНОМУ ФАКТУ ХИЩЕНИЯ СТОИМОСТЬ УСЛУГ ОГОВАРИВАЕТСЯ ИНДИВИДУАЛЬНО)</td>
                    <td>ОТ 150 ЕВРО</td>
                </tr>
                <tr>
                    <td>ПРОВЕРКА НА ИЗМЕНУ (СУПРУЖЕСКУЮ ВЕРНОСТЬ)</td>
                    <td>ОТ 150 ЕВРО</td>
                </tr>
                <tr>
                    <td>ОПРОС ПОДРОСТКОВ С ПРИМЕНЕНИЕМ ПОЛИГРАФА (ДЕТЕКТОРА ЛЖИ) </td>
                    <td>ОТ 150 ЕВРО</td>
                </tr>
                <tr>
                    <td>ПРОБНАЯ ПРОВЕРКА НА ПОЛИГРАФЕ </td>
                    <td>ОТ 150 ЕВРО</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceMain"
    }
</script>

<style scoped>
.price-container{
    max-width: 1480px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
    .price-title{
        padding: 2rem;
        margin: 2rem;
        color: #3F51B5;
        font-size: 2rem;
    }
    .price{
        border-collapse: collapse;
        width: 100%;
    }
    .price>th,td{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
    th{
        border: 1px solid #dddddd;

        padding: 8px;
    }
</style>