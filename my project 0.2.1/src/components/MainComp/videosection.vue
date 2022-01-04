<template>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="@/assets/8.jpeg" class="d-block w-100 img-s">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="@/assets/18.jpg" class="d-block w-100 img-s">
    </div>
    <div class="carousel-item">
      <img src="@/assets/10.jpg" class="d-block w-100 img-s">
    </div>
  </div>
    <div id="text">
        <h1 class="log">Top<span>Gym</span></h1>
        <p class=" log-p">Мощнейший игрок на рынке спортивных <br> товаров</p>
        <button id="ring" class="butn">Заказать звонок</button>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
</template>

<style>
/* Если будут вопросы что для чего можешь оставить тут комментарии я отвечу. Посторался все написать
    очень понятно и лего чтоб можно было проще редачить */
#carouselExampleInterval{
    position: relative !important;
    z-index: 0;
}


#text{
    position: absolute;
    text-align: left;
    padding-top:8%;
    padding-left: 14%;
    top: 120px;
}
.img-s{
height: 110vh !important;
padding-top: 14vh;
}
.log{
    font-size: 60px;
    color: white;
    font-weight: 700;
    text-align: left;
}

.log-p{
    margin-top: 45px;
    font-size: 40px;
    font-weight: 600;
    color: #afafaf;
    

}
.butn{
    margin-top: 60px;
    border: none;
    border-radius: 30px;
    padding: 18px 60px;
    color: black !important;
    font-weight: 600;
    background-color: #d4a53f;
}
span{
    color: #d4a53f;
}
</style>