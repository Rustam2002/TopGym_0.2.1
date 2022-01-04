<template>
    <div class="bg">
        <div id="main-w" class="row m-auto">
        <div id="left" class="col-md-4">
            <div class="blockd" :style="`background-image:url(${require('@/assets/1.jpeg')})`"></div>
            <div class="block d-flex justify-content-between">
                <div class="pic1" :style="`background-image:url(${require('@/assets/2.jpeg')})`"></div>
                <div class="pic1" :style="`background-image:url(${require('@/assets/3.jpeg')})`"></div>
            </div>
        </div>
        <div id="right" class="col-md-5">
            <div id="textPres">
                <h1 class="preH preM">При покупке тренажера фитнес браслет Xiaomi Mi Band в подарок</h1>
                <p class="preH">Браслеты Mi Band с пульсометром помогают отслеживать интенсивность сердцебиения и вовремя сделать перерыв на тренировке. Помогают в пробежках и занятиях спортивной ходьбой. И просто добавляют мотивации и желания вернуться на беговую дорожку.</p>
                <p class="preH">Это устройство — не просто элегантный электронный аксессуар, а настоящий гид здоровья! Больше двигайся и будь здоров!</p>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
    .bg{
        padding-top: 20vh;
        background-color:black ;
        height: 125vh;
    }
    #main-w{
        width: 70%;
        min-height: 100vh;
        
    }
    #left{
        width: 50%;
    }
    #right{
        width: 50%;
    }
    .blockd{
        width: 100%;
        height: 430px;
        background-position: center !important;
        background-size: cover;
    }
    
    .pic1{
        width: 48% !important;
        height: 250px;
        margin-top: 20px;
        background-position: center;
        background-size: cover;
        padding: 0 !important;
    }
    #textPres{
        background-color: #1d1d1f;
        padding: 60px;
    }

    .preH{
        color: #d4a53f;
        font-weight: 600 !important;
        margin-bottom: 40px;
        font-size: 20px;
    }
    .preM{
        font-size: 30px !important;
    }
</style>