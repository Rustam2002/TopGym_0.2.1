<template>
     <nav id="navigation" class="d-flex align-items-center" >
        <ul class="d-flex justify-content-around align-items-center ">
          
            <li><a v-on:click="$router.push({name: 'main'})"><img src="@/assets/_Top_Gym.svg" alt=""></a></li>
            <li><a v-on:click="$router.push({name: 'main'})">Главная</a></li>
            <li><a v-on:click="$router.push({name: 'catalog'})">Каталог</a></li>
            <li><a v-on:click="$router.push({name: 'about'})" >О нас</a></li>
            <li><a href="#">Контакты</a></li>
             <form class="d-flex serchb">
              <input class="form-control me-2 search w-100" v-model="inputData" @keyup="$emit('update', inputData)" type="text" placeholder="Search" >
              <button class="btn btn-outline-warning " type="submit">Search</button>
              <div class="result">
                <div class="d-flex align-items-center singS" v-for="seb in filteredSearch" :key="seb">
                  <router-link class="d-flex w-100 align-items-center"
                  :to="{name:'singelP', params: {id: seb.id}}"
                   >
                   <img
                   class="seri"
                  :src="seb.img"
                  alt=""
                />
                   <p class="m-0">{{seb.name}}</p>
                   </router-link>
                </div>
              </div>
            </form>  
        </ul>
    </nav>
</template>

<style>
#navigation ul li a{
    text-decoration: none;
    color: white;
    font-size: 21px;
    font-weight: 600;
}
ul{
    width: 100%;
    list-style: none;
}
#navigation{
    width: 100%;
    height: 14vh;
    background-color: #1d1d1f;
    position:fixed;
    z-index: 999;
}
.searchb {
  position: relative;
  width: 40%;
  }
  .search {
    background: #eeeeee;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 10px 20px;
    color: #fff;
    font-size: 18px;
    display: block;
    padding: .375rem .75rem;
  }
   .search:focus-within ~ .result {
      display: block;
    }

    .result {
    position: absolute;
    width: fit-content;
    top: 80%;
    right:70px;
    display: none;
    max-height: 45vh;
    overflow: scroll;
    background: #fff;
    z-index: 1000;
    padding: 10px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    
  }
  .seri{
    width: 100px;
    text-align: center;
    display: block;
    margin: auto;
  }
  .result::-webkit-scrollbar{
    width: 0px;
  }
  .singS {
      width: 90%;
      height: 100%;
      margin-bottom: 10px;
      
    }
    a{
        color: #000;
        text-decoration: none;
      }

img{width: 50px; }
.bgvideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -9999;
}

.row{
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}

a{  
  text-decoration: none !important;
  transition: 0.3s;
}
a:hover{
  color: #d4a53f !important;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
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
}
</script>