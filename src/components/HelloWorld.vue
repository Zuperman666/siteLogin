<template>
  <div>
    <div class="fixedHeaderContainer">
      <HeaderContainer />
      <div class="centerTextMain">
        Entra nel mondo di Login dove tutto può succedere!!
        <p>Sottotesto a caso</p>
        <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
          Vienici a trovare
        </button>
      </div>
    </div>
    <div class="sim">
      <div class="row mx-0">
        <div class="leftSim col-md-6">
          <div>
            Due Postazioni di Guida. Simulatori ideali per gli e-sports
            <p>
              Vieni a scroprire la postazione di guida
              <br />é la soluzione ideale per transformare la tua passione per
              la guida in una vera esperienza guidando auto da corsa con il
              massimo del realismo.
              <br />
              <br />Permette sessioni di guida online e offline
            </p>
          </div>
          <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
            Per info
          </button>
        </div>
        <div class="col-md-6 rightSim"></div>
      </div>
    </div>
    <iframe
      poster="https://images.everyeye.it/img-notizie/altre-immagini-preview-dall-anime-the-promised-neverland-v3-357710-1280x720.jpg"
      width="100%"
      height="100%"
      controls
    >
      <source src="../assets/videoplayback.mp4" type="video/mp4" />
    </iframe>
    <div class="separatorElement"></div>
    <DualImageBanner  toYoutube="false" textButton="Visualizza gli eventi passati" text="Oltre ai servizi tipici del locale,organizziamo eventi e collaborazioni con realtà attente all’innovazione" linkImage1="MNT00026.png" linkImage2="MNT00026.png" title="Eventi in programma" redirect="/Eventi"></DualImageBanner>
    <div class="Ristoro">
      <div class="textRistoro">
        IL NOSTRO RISTORO
        <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
      </div>
      <div class="carousell">
        <div class="imageCarousell" :style="[bg]"></div>
        <div class="arrowLeft" v-on:click="leftArrow"></div>
        <div class="arrowRight" v-on:click="rightArrow"></div>
      </div>
      <div class="marginTextUnderCaru">
        Se volete controllare il nostro menù
        <br />
        <br />
        <button v-on:click="greet('/Hamburgeria')" class="bottoneTestoMain">
          Clikkare qui
        </button>
      </div>
    </div>
    <div class="separatorElement"></div>
    <DualImageBanner toYoutube="false" textButton="Guarda i video" text="Cosa ne pensi delle ultime uscite?Ascolta cosa pensiamo noi e dicci la tua!" linkImage1="MNT00026.png" linkImage2="MNT00026.png" title="La fumetteria" redirect="/Eventi"></DualImageBanner>
    <div class="SalaLanMain">
      <div class="textRistoroSala row mx-0">
        <div>
          SALA LAN -TORNEI EVENTI <br />
          E TANTO ALTRO...
          <p>
            Giochi con un pc o con una console?Qui al Login Abbiamo pensato
            proprio a tutti !
          </p>
        </div>
      </div>
      <div class="row mx-0">
        <div class="col-md-6">
          <div class="fotoLeftImageMain"></div>
        </div>
        <div class="col-md-6 justify-center">
          <div class="rightTextRistoro">
            <div class="TextTitleSalaLan">
              Postazioni Gaming
              <p>
                Uniscici con i tuoi amici, abbiamo più di 20 postazioni gaming
              </p>
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
              <p>Sei uno streamer? Abbiamo una postazione apposta per te</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="instagramMain">
      <div class="textInstagram">
        #LOGIN_IN_GAMING
        <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
      </div>
      <div class="containerInstagram">
        <div
          v-on:click="clickMethod(dynamicContentHtml.node)"
          class="fotoInstagram"
          v-for="dynamicContentHtml in dynamicContentHtml"
          :key="dynamicContentHtml.node.id"
          :style="{
            background: 'url(' + dynamicContentHtml.node.display_url + ')',
          }"
        ></div>
      </div>
    </div>
    <FooterElement />
  </div>
</template>

<script>
import axios from "axios";
import { router } from "../main.js";
import FotoCibo1 from "../assets/MNT00026.png";
import FotoCibo2 from "../assets/MNT00075.png";
import FotoCibo3 from "../assets/MNT00111.png";
import FotoCibo4 from "../assets/MNT00097.png";
import FooterElement from "../components/Footer.vue";
import DualImageBanner from "../components/DualImageBanner.vue";
export default {
  name: "HelloWorld",
  components: { FooterElement,DualImageBanner },
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
    clickMethod: function (value) {
      window.open("https://www.instagram.com/p/" + value.shortcode, "blank");
    },

  },
  mounted: function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setInterval(() => {
      this.rightArrow();
    }, 6000);
    const a = async () => {
      // fetch data from a url endpoint    ?access_token=...&count=250
      const response = await axios.get(
        " https://www.instagram.com/log_in_gaming/?__a=1"
      );
      return response;
    };
    a().then((value) => {
      this.dynamicContentHtml =
        value.data.graphql.user.edge_owner_to_timeline_media.edges;
    });
  },
  data: () => ({
    dynamicContentHtml: "",
    i: 0,
    items: [
      {
        src: FotoCibo1,
      },
      {
        src: FotoCibo2,
      },
      {
        src: FotoCibo3,
      },
      {
        src: FotoCibo4,
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

.fixedHeaderContainer {
  background-image: url("../assets/MNT00276.png");
  background-size: cover;
  min-height: 80vh;
}
.TestoFumetteriaCentrale {
  div {
    margin-top: 20px;
    font-size: 21px;
    color: #000;
  }
}
.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}
.arrowLeft {
  position: absolute;
  background-image: url(https://www.iconsdb.com/icons/preview/white/arrow-98-xl.png);
  height: 24px;
  width: 24px;
  height: 40px;
  width: 61px;
  background-size: contain;
  cursor: pointer;
}
.BottoneFumetteria {
  width: 150px;
}
.arrowRight {
  position: absolute;
  background-image: url(https://www.iconsdb.com/icons/preview/white/arrow-34-xl.png);
  height: 24px;
  width: 24px;
  height: 40px;
  width: 61px;
  right: 0;
  background-size: contain;
  cursor: pointer;
}

.fotoInstagram {
  height: 300px;
  width: 300px;
  margin-right: 3px;
  margin-top: 3px;
  background-size: 100% 100% !important;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
}

.TextTitleSalaLan {
  color: white;
  font-size: 20px;
  margin-top: 20px;
  p {
    margin-top: 10px;
    color: grey;
    font-size: 12px;
  }
}
.marginTextUnderCaru {
  color: white;
}
.SalaLanMain {
  justify-content: center;
  padding: 50px 0;
}

.FumetteriaMain {
  background-color: #dadada;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
}
.instagramMain {
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
  color: white;
  font-size: 45px;
  top: calc(50% - 33px);
  min-width: 100%;
  transform: translate(0, -50%);
  p {
    font-size: 25px;
    margin-top: 30px;
  }
}
.textInstagram {
  margin-top: 30px;
  color: black;
  font-size: 30px;
  p {
    margin-top: 10px;
    font-size: 15px;
    color: grey;
    margin-bottom: 10px;
  }
}
.imageCarousell {
  width: 700px;
  height: 468px;
  justify-content: center;
  margin: 50px auto;
  background-size: 100% 100%;
}

p {
  line-height: 1.5em;
}
.fotoLeftImageMain {
  background-image: url("../assets/MNT00280.png");
  height: 300px;
  width: 400px;
  margin: auto;
  margin-top: 20px;
  background-size: contain;
}
.Ristoro {
  padding: 50px 0;
}
.leftSim {
  color: black;
  font-size: 20px;
  p {
    margin-top: 20px;
  }
  div {
    text-align: center;
  }
  button {
    margin-top: 50px;
    font-size: 25px;
  }
}
.textRistoro {
  color: white;
  font-size: 40px;
  p {
    font-size: 15px;
    color: gray;
  }
}
.textRistoroSala {
  color: white;
  font-size: 40px;
  padding: 10px;
  justify-content: center;
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
  width: auto;
  padding: 0 10px;
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
  width: 100%;
  background: #dadada;
  flex-wrap: nowrap;
  display: flex;
  position: relative;
  padding: 20px 40px;
}
.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  box-sizing: content-box;
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
.containerInstagram {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}
.textFumetteria {
  font-size: 55px;
  color: black;
  p {
    font-size: 16px;
    color: gray;
  }
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

.rightTextRistoro {
  text-align: left;
  width: 80%;
  margin: auto;
}
.justify-center {
  justify-content: center;
}
@media only screen and (max-width: 960px) {
  .sim {
    flex-wrap: wrap;
  }
  .leftSim {
    color: black;
    font-size: 15px;
    p {
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
      font-size: 15px;
    }
    div {
      text-align: center;
    }
  }

  .rightSim {
    height: 50%;
    width: 100%;
    background-image: url(https://www.sparco-official.com/sim-rig/assets/img/rig-2/block-3-ITA.png);
    background-repeat: no-repeat;
    background-position: center;
    height: 30vh;
  }
  .centerTextMain {
    position: absolute;
    width: 100%;
    top: 40vh;
    color: white;
    font-size: 30px;
    padding: 0 20px;
    p {
      font-size: 15px;
      margin-top: 30px;
    }
  }

  .arrowLeft,
  .arrowRight {
    height: 40px;
    width: 49px;
  }
  video {
    height: 100%;
  }
}
@media only screen and (max-width: 800px) {
  .fotoLeftImageMain {
    margin-left: 0%;
    width: 100%;
    background-size: 100% 100%;
  }
  .textRistoroSala {
    position: unset;
    margin-top: 10px;
    color: white;
    font-size: 40px;
  }
  .rightImageMain {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 0px;
    text-align: center;
    margin-left: 0%;
    padding: 10px;
  }
  .leftImageMain {
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 0px;
  }
  .SalaLanMain {
    flex-direction: column;
  }
  .instagramMain {
    .fotoInstagram {
      height: 200px;
      width: 200px;
    }
  }
  .SalaLanMain {
    height: auto;
  }
  .containerInstagram {
    :nth-child(n + 7) {
      display: none;
    }
  }
}
@media only screen and (max-width: 690px) {
  .batmanLogo {
    width: 150px;
    height: 150px;
    background-color: red;
  }
  .marginTextUnderCaru {
    margin-top: 40px;
  }
  .imageCarousell {
    margin-top: 24px;
    width: 100%;
    height: 370px;
  }
  .bottoneTestoMain {
    margin-top: 20px;
  }
  .Ristoro {
    width: 100%;
  }
}
</style>
