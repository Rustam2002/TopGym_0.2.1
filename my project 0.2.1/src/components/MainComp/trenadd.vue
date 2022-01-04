<template>
    <div id="trenadd">
        <div class="d-flex">
            <div class="tren" > 
                <h1 class="log">Беговые дорожки Top<span>Gym</span></h1>
                <p class="tren-p">Беговая дорожка для домашнего использования <br> имеет 6 уровней защиты от ударов. <br> Светодиодный дисплей, мониторинг сердечного ритма и тд.</p>
                <button id="ring" class="butn tren-but">узнать подробнее</button>
            </div>
            <div class="tren" :style="`background-image:url(${require('@/assets/8.jpeg')})`"></div>
        </div>

        <div class="d-flex">
            <div class="tren" :style="`background-image:url(${require('@/assets/9.jpg')})`" > 
                 </div>
            <div class="tren chet" >
            <h1 class="log tren-log">Многофункциональный тренажер на троих человек <span><u>MS631</u></span></h1>
                <p class="tren-p">Ключевые части такие, как труба основной рамы, труба спинки и подседельная труба, все выполнено из высококачественных стальных труб</p>
                <button id="ring" class="butn tren-but">узнать подробнее</button>
           </div>

        </div>

        <div class="d-flex">
            <div class="tren" > 
                <h1 class="log">Велотренажеры Top<span>Gym</span></h1>
                <p class="tren-p">Велотренажер адаптируется к вашему телу за несколько секунд благодаря быстрым настройкам. Он обеспечивает самое плавное и бесшумное педалирование из когда-либо существовавших.</p>
                <button id="ring" class="butn tren-but">узнать подробнее</button>
            </div>
            <div class="tren" :style="`background-image:url(${require('@/assets/10.jpg')})`"></div>
        </div>
        
    </div>
</template>

<style>
/* Если будут вопросы что для чего можешь оставить тут комментарии я отвечу. Посторался все написать
    очень понятно и лего чтоб можно было проще редачить */
    .right_tren{
        width: 50%;
        height: 75vh;
        background-size: cover;
    }

    .tren{
        background-color: #1d1d1f;
        width: 50%;
        height: 75vh;
        padding: 50px 100px 20px 90px;
        text-align: left;
        background-size: cover;
    }

    .tren-p{
        text-align: left;
        font-size: 22px;
        font-weight: 600;
        line-height: 35px;
        margin-top: 40px;
        color: #e3e3e3;
    }
    .tren-but{        
      color: black !important;
      margin-top: 35px;

    }

    .tren-log{
        font-size: 50px;
    }

    .chet{
        background-color: black;
    }
</style>