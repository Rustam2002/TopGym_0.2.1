<template>
    <div id="mainLine">
       <div class="paral d-flex align-items-center">
           <div id="MainVer"><h1 class="ver">Шаг</h1></div>
           <div class="polucr" :style="`background-image:url(${require('@/assets/6.png')})`"><h1>01</h1></div>
           <div id="centText">
                <h3>Заявка на сайте</h3>
           <p>Вы оставляете заявку на сайте TopGym, нужно оставить<br> только контактный номер телефона и ваше имя.</p>
           </div>
            <img src="@/assets/5.svg" alt="">
       </div>

        <div class="paral d-flex align-items-center">
           <div id="MainVer"><h1 class="ver">Шаг</h1></div>
           <div class="polucr" :style="`background-image:url(${require('@/assets/6.png')})`"><h1>02</h1></div>
           <div id="centText">
                <h3>Контакт с менеджерами</h3>
           <p>В течении 30 минут наши менеджера с вами свяжутся и проконсультируют вас в интересующемся вами вопросе</p>
       
           </div>
            <img src="@/assets/4.svg" alt="">
       </div>

        <div class="paral d-flex align-items-center">
           <div id="MainVer"><h1 class="ver">Шаг</h1></div>
           <div class="polucr" :style="`background-image:url(${require('@/assets/6.png')})`"><h1>03</h1></div>
           <div id="centText">
                <h3>Доставка</h3>
           <p>В этот же день с момента заказа мы осуществляем <br>доставку и сборку. Доставка и сборка бесплатна.</p>
       
           </div>
            <img src="@/assets/7.svg" alt="">
       </div>
    </div>
</template>

<style>
/* Если будут вопросы что для чего можешь оставить тут комментарии я отвечу. Посторался все написать
    очень понятно и лего чтоб можно было проще редачить */
    #mainLine{
        background-color: #000000;
        color: #4f4f4f;
        height: 150vh;
        padding-top:1px;
    }
    
    .paral{
        background-color: #1d1d1f;
        height: 260px;
        width: 80%;
        margin: 70px auto;
        padding: 50px;
        border-radius: 18px;
    }

    #mainLine img{
        display: block;
        width: 150px;
    }
    #MainVer{
        position: relative;
    }
    #mainLine .ver{
        font-weight: 600;
        transform: rotate(-90deg);
        position: absolute;
        font-size: 70px !important;
        top: -50px;
        left: -70px;
    }

    .polucr{
        height: 280px;
        display: flex;
        align-items: center;
        width: 250px;
        background-position: center;
        background-size: cover;
        text-align: center;
        padding-left: 65px;
        
    }
    .polucr h1{
        font-size: 100px;
        font-weight: 600;
        color: #000000;
    }

    #centText{
        margin-left: 50px;
        margin-right: 150px;
        width: 700px;
        text-align: left;
    }
    #centText p{
        color: #d1b045;
        font-size: 20px;
    }

    #centText h3{
        color: #d1b045;
        font-weight: 600;
        font-size: 20px;
    }
</style>