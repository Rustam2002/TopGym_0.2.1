<template>
    <!-- Тут я разделил контейнер из нутри на две части чтоб можно было поменять местам
    ибо так проще нежели для каждого писать отдельные стили inverstren это главный конт
    а нижние дивы с классами d-flex это второстипенные в которых тоже два контейнер что бы
    поставить картинки справа и слева. Прошк не менять в html коде ничего без особой на то надобности -->
    <div id="inverstren">
        <div class="d-flex">
            <div class="intren" :style="`background-image:url(${require('@/assets/12.png')})`">
                <h1 class="log intren-h">Эллиптические <span>тренажеры</span></h1>
                <p class="log-p tren-p intren-p">Эффективные аэробные тренировки в любом месте</p>
                <button id="ring" class="butn intren-but">подробнее</button>
            </div>
            <div class="intren rig" :style="`background-image:url(${require('@/assets/13.png')})`">
                <h1 class="log intren-h rig-h">Инверсионные <span>столы</span></h1>
                <p class="log-p tren-p intren-p rig-h">Выпрями спину, живи без сколиоза</p>
                <button id="ring" class="butn intren-but">подробнее</button>
            </div>
        </div>


         <div class="d-flex">
            <div class="intren down rigg" :style="`background-image:url(${require('@/assets/14.jpeg')})`">
                <h1 class="log intren-hg rig-h">Гантели <span>шестигранники</span></h1>
                <p class="log-p tren-p intren-pg rig-h">Качественное резиновое покрытие, не имеет <br> посторонних запахов. Экологически безопасное.</p>
                <button id="ring" class="butn intren-but">подробнее</button>
            </div>
            <div class="intren down " :style="`background-image:url(${require('@/assets/15.png')})`">
                <h1 class="log intren-hg ">Гантели  <span>разборные</span></h1>
                <p class="log-p tren-p intren-pg ">Качественное резиновое покрытие , не имеет посторонних <br> запахов. Экологически безопасное.</p>
                <button id="ring" class="butn intren-but">подробнее</button>
            </div>
        </div>
    </div>
</template>


<style>
    /* Если будут вопросы что для чего можешь оставить тут комментарии я отвечу. Посторался все написать
    очень понятно и лего чтоб можно было проще редачить */
    .intren{
        width: 50%;
        height: 98vh;
        text-align: center;
        background-color: black;
        background-size: 65%;
        background-repeat: no-repeat;
        background-position-y: bottom;
        background-position-x: center;
    }

    .intren-h{
        font-size: 35px;
        text-align: center;
        margin-top: 40px;
    }
    .intren-pg{
        text-align: center !important;
        font-size: 18px !important;
        margin-top: 10px;
    }
    .intren-p{
        text-align: center;
        font-size: 15px;
        margin-top: 10px;
        color: white !important;
    }
    .intren-but{
        margin-top: 10px;
        padding: 12px 40px;
    }
    .rig{
        background-color: white;
        background-size: 50% !important;
    }
    .rig-h{
        color: black !important;
    }

    .intren-hg{
        font-size: 40px;
        text-align: center;
        margin-top: 40px;
    }
    .rigg{
        background-color: white;
        background-size: 80% !important;
    }
    .down{
        height: 92vh;
    }
</style>