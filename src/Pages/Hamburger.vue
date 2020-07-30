<template>
    <div>
        <p class="TextNameTitle"><a>Hamburgeria Login</a></p>
        <div class="ImageMenùContainer">
            <div class="ImagineMenù"> </div>
        </div>
        <separator/>
        <h1 class="TextNameTitleOur">I Nostri Panini</h1>
        <div class="DivPadre">
        <v-app>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
         :src="item.src"
      >
        <v-sheet
          height="100%"
         
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-app>
    </div>
    <div class="DivButton" v-on:click='greet'>
      <a><span/> <span/> <span/> <span/>PRENOTA ORA</a>
    </div>
    <FooterElement></FooterElement>  
    </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
import {router} from '../main.js'
export default {
   name: 'Hamburgeria',  
   components:{FooterElement},
   data () {
    return {
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }
  },
    methods: {
  greet: function () {
               router.push('/Contatti');
            },
    }
}
</script>
<style lang="scss">
.TextNameTitle{
    font-size: 40px;
    color: white;
}
.TextNameTitleOur{
    font-size: 30px;
    color: white;
}
.ImageMenùContainer{
    display: flex;
    justify-content: center;
}
.ImagineMenù{
    width: 600px;
    height: 400px;
    background-image: url(https://image.freepik.com/vettori-gratuito/lavagna-menu-hamburger_62951-60.jpg);
    background-size: cover;
}
.DivPadre .v-application--wrap {
    min-height: 0 !important;
     
  }
  .DivPadre .v-application {
    min-height: 0 !important;
    height: 100%!important;
   
  }
  .v-image__image{
    z-index: 0 !important;
  }
  @media screen and (max-width: 992px) {
  .v-image__image{
    background-size: cover !important;
  }
}
p a {
  font-size: 1.5em;
  color: #228DFF;
  font-family: Iceland;
}
p a:hover {
  color: #ffffff;
}
p a:hover {
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;
}
@-webkit-keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
}
@keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
}
.DivButton{
  margin-top:20px;
  height: 50px;
  width: 100%;
}
.DivButton a{
  color:#2196f3;
  position:relative;
  display: inline-block;
  padding: 15px 30px;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;
}

.DivButton a:hover {
  color: #255784;
  background: #2196f3;
  box-shadow: 0 0 10px  #2196f3,0 0 40px  #2196f3,0 0 80px  #2196f3 ;
  transition-delay: 1s;
}
.DivButton a span{ 
  position: absolute;
  display: block;
}
.DivButton a span:nth-child(1){ 
  top:0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#2196f3);
}
.DivButton a:hover span:nth-child(1){ 
  left: 100%;
  transition: 1s;
}
.DivButton a span:nth-child(3){ 
  bottom:0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent,#2196f3);
}
.DivButton a:hover span:nth-child(3){ 
  right:100%;
  transition: 1s;
  transition-delay: 0.5s;
}
.DivButton a span:nth-child(2){ 
  top:-100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#2196f3);
}
.DivButton a:hover span:nth-child(2){ 
  top:100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.DivButton a span:nth-child(4){ 
  bottom:-100%;
  left: 0;
  width:2px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#2196f3);
}
.DivButton a:hover span:nth-child(4){ 
  bottom:100%;
  transition: 1s;
  transition-delay: 0.75s;
}
</style>