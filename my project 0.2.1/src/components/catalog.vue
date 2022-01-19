<template>
<!-- Тут прошу вообще не лезть пока яро работаю над беком если что то слетит будет писец полный -->
  <section id="catalog" class=" cat-block">
    <div>
      <div class="d-flex row main-c" >
        <div class="block_cat "  v-for="post in allPosts" :key="post" :class="post.model">
          <div class="bord" >
              <div class="img_cat">
              <img :src="post.img" alt="">
              </div>
              <h1>{{post.name}}</h1>
              <p>{{post.opis}}</p>
        </div>
        <div class="d-flex cat-btn">  
          <button>Описание</button>
          <button class="cen">{{post.price}}tg </button>
        </div>
      </div>
      </div>
    </div>
    <footerr />
  </section>

  
</template>

<script>
import footerr from './MainComp/footer.vue';
import {mapGetters,mapActions } from "vuex";
  export default { 
  props: ['ser'],
  computed: {
    ...mapGetters(["allPosts"]),
    filteredSearch() {
      return this.allPosts.filter((another) =>
        another.name.toLowerCase().includes(this.ser.toLowerCase())
      );
    },
  },
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts();
  },
  components: {
    footerr
  }
  
};


</script>

<style>
#catalog{
  padding-top: 23vh;
  background-color: black;
}
.cat-btn{
  justify-content: space-between;
  width: 88%;
  margin:15px auto;
}
.cat-btn button{
  width: 170px;
  padding: 12px 25px;
  border: none;
  border-radius:30px ;
  background-color: #d1b045;
  font-weight: 600;
  transition: 0.3s;
}
.cat-btn button:hover{
  transform: scale(1.1);
}
.cen{
  background-color: #2c2c2e !important;
  border: 2px solid #d1b045 !important;
  color: #d1b045;
}
.block_cat{
  background-color: #2c2c2e;
  margin:60px 0px;
  width: 33% !important;
  padding: 30px;
  text-align: left;
  border-left: 2px solid #d1b045;
  border-right: 2px solid #d1b045;
  color: white;
}
.bord{
  width: 95%;
  height: 80vh;
  padding: 0px 20px;
  margin: 10px;
}
.main-c{
  width: 90%;
  margin: auto !important;
  padding: 5%;
}
.img_cat{
  width: 100%;
  height: 50vh;
  text-align: center;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  border-radius: 30px;
  background-color: white;
  overflow: hidden;
  position: relative;
}
.bord h1{
  font-weight: 600;
  font-size: 29px;
  margin-top: 20px;
}
.bord p{
  font-weight: 500;
  font-size: 18px;
  margin-top: 30px;
}
.img_cat img{
  width: 100%;
  align-items: center;
  transition: 0.3s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.img_cat img:hover{
  /* margin-top: -40px ; */
  transform: scale(1.2);
}
</style>