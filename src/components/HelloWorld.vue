<template>
  <div>
    <div class="testacaso">
      <HeaderContainer />
      <div class="centerTextMain">
        Entra nel mondo di Login dove tutto può succedere!!
        <p>Sottotesto a caso</p>
        <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">Vienici a trovare</button>
      </div>
    </div>
    <div class="sim">
      <div class="leftSim">
        <div>
        Due Postazioni di Guida.
        Simulatori ideali per gli e-sports
        <p>
          Vieni a scroprire la postazione di guida
          <br />é la soluzione ideale per transformare la tua passione per la guida in una vera esperienza guidando auto da corsa con il massimo del realismo.
          <br />
          <br />Permette sessioni di guida online e offline
        </p>
        
        </div>
        <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">Per info</button>
      </div>
      <div class="rightSim"></div>
    </div>
    <video
      poster="https://images.everyeye.it/img-notizie/altre-immagini-preview-dall-anime-the-promised-neverland-v3-357710-1280x720.jpg"
      width="100%"
      height="100%"
      controls
    >
      <source src="../assets/videoplayback.mp4" type="video/mp4" />
    </video>
    <div class="separatorElement"></div>
    <div class="Ristoro">
       <div class="textRistoro">
        IL NOSTRO RISTORO
        <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
      </div>
      <div class="carousell">
        <div class="imageCarousell" :style="[bg]"></div>
        <div class="arrowLeft" v-on:click="leftArrow"></div>
        <div class="arrowRigth" v-on:click="rightArrow"></div>
      </div>
      <div class="marginTextUnderCaru">
        Se volete controllare il nostro menù
        <br />
        <br />
        <button v-on:click="greet('/Hamburgeria')" class="bottoneTestoMain">Clikkare qui</button>
      </div>
    </div>
    <div class="separatorElement"></div>
    <div class="SalaLanMain">
      <div class="textRistoroSala">
        SALA LAN -TORNEI EVENTI <br/>
        E TANTO ALTRO...
        <p>Giochi con un pc o con una console?Qui al Login Abbiamo pensato proprio a tutti !</p>
      </div>
      <div class="leftImageMain">
        <div class="fotoLeftImageMain"></div>
      </div>
      <div class="rightImageMain">
        <div class="TextTitleSalaLan">
          Postazioni Gaming 
          <p>Uniscici con i tuoi amici, abbiamo più di 20 postazioni gaming</P>
        </div>
        <div class="TextTitleSalaLan">
          Tornei
          <p>Sfida I tuoi avversari e scala tutte le classifiche</p>
        </div>
         <div class="TextTitleSalaLan">
           Partite Locali
           <p>Gioca con di tuoi amici con Pc o con Console</p>
          </div>
        <div class="TextTitleSalaLan">
          Sala Streaming
          <p>Sei uno streamer? Abbiamo una postazione apposta per te </p>
        </div>
      </div>
    </div>
    <div class="instagramMain">
       <div class="textInstagram">
        #LOGIN_IN_GAMING
        <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
      </div>      
    <div class="containerInstagram">
    <div  v-on:click="clickMethod(dynamicContentHtml.node)" class="fotoInstagram" v-for="dynamicContentHtml in dynamicContentHtml"
        :key="dynamicContentHtml.node.id"
         :style="{ 'background': 'url(' + dynamicContentHtml.node.display_url + ')' }"></div>
    </div>
    </div>
    <FooterElement></FooterElement>
  </div>
</template>

<script>
import axios from 'axios'
import FooterElement from "../components/Footer.vue";
import { router } from "../main.js";
export default {
  name: "HelloWorld",
  components: { FooterElement },
  methods: {
    greet: function (value) {
      router.push(value);
    },
    leftArrow: function () {
      if (this.i === 0) return (this.i = 3);
      return this.i--;
    },
    rightArrow: function () {
      if (this.i === 3) return (this.i = 0);
      return this.i++;
    },
    clickMethod:function (value) {
      window.open("https://www.instagram.com/p/"+ value.shortcode,'blank')
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.rightArrow();
    }, 6000);
    const a = async() => {
  // fetch data from a url endpoint    ?access_token=...&count=250
    const response = await axios.get(' https://www.instagram.com/log_in_gaming/?__a=1')
    return response
    }
    a().then(value => {
       this.dynamicContentHtml = value.data.graphql.user.edge_owner_to_timeline_media.edges
      })
  },
  data: () => ({
    dynamicContentHtml:'',
    i: 0,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
  computed: {
    bg() {
      const i = this.i;
      return {
        backgroundImage: `url(${this.items[i].src})`,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.testacaso {
  background-image: url("http://risl.net/storage/2019/04/6.png");
  background-size: cover;
  height: 100%;
  width: 100%;
  min-height: 80vh;
}
.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}
.carousell {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrowLeft {
  position: absolute;
  background-image: url(https://www.seekpng.com/png/full/93-932539_arrow-bw-left-white-left-arrow-png.png);
  height: 24px;
  width: 24px;
  left: 40px;
  margin-top: 200px;
  height: 40px;
  width: 61px;
  background-size: cover;
}
.arrowRigth {
  position: absolute;
  background-image: url(https://w7.pngwing.com/pngs/552/763/png-transparent-white-and-black-arrow-to-right-arrow-symbol-icon-right-arrow-angle-white-text.png);
  height: 24px;
  width: 24px;
  right: 40px;
  margin-top: 200px;
  height: 40px;
  width: 61px;
  background-size: cover;
}
.fotoInstagram{
  height: 300px;
  width: 300px;
  margin-right: 1px;
  margin-top: 1px;
  background-size: contain !important;
   cursor: pointer;
   &:hover{
   opacity: 0.9;
  }
}
.TextTitleSalaLan{
  color:white;
  font-size: 20px;
  margin-top:20px;
  p{
    margin-top:10px;
    color:grey;
    font-size: 12px;
  }
}
.marginTextUnderCaru {
  color: white;
  margin-top: 120px;
}
.SalaLanMain{
  height: 600px;
  width: 100%;
  display: flex;
    justify-content: center;
}
.instagramMain{
  height: 100%;
  min-height: 450px;
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.centerTextMain {
  position: absolute;
  width: 100%;
  top: 35vh;
  color: white;
  font-size: 60px;
  max-width: 900px;
  left: 30%;
  p {
    font-size: 25px;
    margin-top: 30px;
  }
}
.leftImageMain{
  height: 100%;
  width:50%;
  display: flex;
  margin-top:230px;
}
.rightImageMain{
  height: 100%;
  width:50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top:230px;
  text-align: left;
  margin-left: 20%;
}
.textInstagram{
  margin-top:30px;
  color:black;
  font-size: 30px;
  p{
    margin-top:10px;
    font-size: 15px;
    color: grey;
    margin-bottom:10px;
  }
}
.imageCarousell {
  width: 700px;
  height: 400px;
  justify-content: center;
  margin-top: 200px;
  background-size: cover;
}

p {
  line-height: 1.5em;
}
.fotoLeftImageMain{
  background:red;
  height: 300px;
  width: 80%;
  margin-left:20%;
}
.Ristoro {
  height: 700px;
  width: 100%;
}
.leftSim {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  font-size: 20px;
  p {
    margin-top: 20px;
  }
  div{
    width: 500px;
    text-align: left;
  }
  button {
    margin-top: 50px;
    font-size: 25px;
  }
}
.textRistoro {
  margin-top: 50px;
  color: white;
  font-size: 40px;
  p {
    font-size: 15px;
    color: gray;
  }
}
.textRistoroSala{
  position: absolute;
  margin-top: 50px;
  color: white;
  font-size: 40px;
  p {
    font-size: 15px;
    color: gray;
  }
}
.rightSim {
  height: 100%;
  width: 50%;
  display: flex;
  background-image: url(https://www.sparco-official.com/sim-rig/assets/img/rig-2/block-3-ITA.png);
  background-size: contain;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
}
.separatorElement {
  height: 1px;
  width: 100%;
  background-color: #dadada;
}
.bottoneTestoMain {
  background: transparent;
  border: 1px solid white;
  height: 50px;
  width: 200px;
  font-size: 20px;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
}
h1 + p,
p + p {
  margin-top: 10px;
}
video {
  height: 600px;
}
.containerCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.sim {
  height: 500px;
  width: 100%;
  background: #dadada;
  flex-wrap: nowrap;
  display: flex;
}
.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  box-sizing: content-box;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info,
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}
.containerInstagram{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  }
.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
@media only screen and (max-width: 960px) {
  .sim {
    flex-wrap: wrap;
  }
  .leftSim {
    height: 50%;
    width: 100%;
    color: black;
    font-size: 15px;
    p {
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
      font-size: 15px;
    }
    div{
      width: 450px;
    text-align: center;
    }
  }
  .bottoneTestoMain {
    margin-top: 20px;
  }
  .rightSim {
    height: 50%;
    width: 100%;
    background-image: url(https://www.sparco-official.com/sim-rig/assets/img/rig-2/block-3-ITA.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .centerTextMain {
    position: absolute;
    width: 100%;
    top: 40vh;
    color: white;
    font-size: 30px;
    left: unset;
    p {
      font-size: 15px;
      margin-top: 30px;
    }
  }
  .imageCarousell {
    margin-top: 85px;
    width: 100%;
  }
  .arrowLeft,
  .arrowRigth {
    height: 40px;
    width: 49px;
  }
  video {
    height: 100%;
  }
  .marginTextUnderCaru {
    margin-top: 80px;
  }
}
@media only screen and (max-width: 800px) {

.instagramMain{
  .fotoInstagram{
    height: 200px;
    width: 200px;
  }
}

.containerInstagram{
:nth-child(n+7) {
      display: none;
  }
}


}

</style>
