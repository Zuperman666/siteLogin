<template>
    <div>
        <div class="fixedHeaderContainerHomePage">
            <HeaderContainer/>
            <div class="centerTextMain">
                <h1>
                    NEL MONDO DI LOGIN TUTTO PUÒ SUCCEDERE
                </h1>
                <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
                    Vieni a scoprirlo
                </button>
            </div>
        </div>
        <div class="sim">
            <div class="row mx-0">
                <div class="leftSim col-md-6">
                    <div>
                        <h1>
                            Due Postazioni di Guida. Simulatori ideali per gli e-sports
                        </h1>
                        <p>
                            Vieni a scroprire la postazione di guida
                            <br/>é la soluzione ideale per transformare la tua passione per
                            la guida in una vera esperienza guidando auto da corsa con il
                            massimo del realismo.
                            <br/>
                            <br/>Permette sessioni di guida online e offline
                        </p>
                    </div>
                    <button v-on:click="greet('/Contattaci')" class="bottoneTestoMainBlack">
                        Per info
                    </button>
                </div>
                <div class="col-md-6 rightSim"></div>
            </div>
        </div>
        <div class="col-12">
            <div
                    class="testIframe"
            >
                <div v-html="video.src"></div>
            </div>
        </div>
        <div class="separatorElement"></div>
        <DualImageBanner toYoutube="false" textButton="Visualizza gli eventi passati"
                         text="Oltre ai servizi tipici del locale,organizziamo eventi e collaborazioni con realtà attente all’innovazione"
                         linkImage1="logintime1.0.jpg" linkImage1Desc="Cortometraggio LogIn Time" linkImage2="aperol1.0.jpg" title="Eventi in programma"
                         linkImage1Alt="logintime1.1.jpg"  linkImage2Desc="Foto Evento Aperol" linkImage2Alt="aperol1.1.jpg"
                         redirect="/Eventi"></DualImageBanner>
        <div class="Ristoro">
            <div class="col-md-6 col-sm-12">
                <p>Cibo</p>
                <img class="imgThree" src=../assets/hamburgerHome.jpg alt="Hamburger Login">
                <h1>Testo sotto foto cibo</h1>
            </div>
            <div class="col-md-6 col-sm-12">
                <p>Cocktails</p>
                <img class="imgThree" src=../assets/cocktailHome.jpg alt="Cocktail Login">
                <h1>Testo sotto foto cocktails</h1>
            </div>
        </div>
        <div class="separatorElement"></div>
        <DualImageBanner toYoutube="false" textButton="Guarda i video"
                         text="Cosa ne pensi delle ultime uscite?Ascolta cosa pensiamo noi e dicci la tua!"
                         linkImage1="fumetteria1.0.jpg" linkImage2="digimon.jpg" title="La fumetteria"
                         linkImage1Alt="fumetteria1.1.jpg"  linkImage1Desc="Foto Fumetteria Login" linkImage2Desc="Foto Digimon Login" linkImage2Alt="digimon1.1.jpg"
                         redirect="/Eventi"></DualImageBanner>
        <div class="SalaLanMain">
            <div class="textRistoroSala row mx-0">
                <div>
                    <h1>
                        SALA LAN -TORNEI EVENTI <br/>
                        E TANTO ALTRO...
                    </h1>
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
                            <h1>
                                Postazioni Gaming
                            </h1>
                            <p>
                                Uniscici con i tuoi amici, abbiamo più di 20 postazioni gaming
                            </p>
                        </div>
                        <div class="TextTitleSalaLan">
                            <h1>
                                Tornei
                            </h1>
                            <p>Sfida I tuoi avversari e scala tutte le classifiche</p>
                        </div>
                        <div class="TextTitleSalaLan">
                            <h1>
                                Partite Locali
                            </h1>
                            <p>Gioca con di tuoi amici con Pc o con Console</p>
                        </div>
                        <div class="TextTitleSalaLan">
                            <h1>
                                Sala Streaming
                            </h1>
                            <p>Sei uno streamer? Abbiamo una postazione apposta per te</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instagramMain">
            <div class="textInstagram">
                <h1>
                    #LOGIN_IN_GAMING
                </h1>
                <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
            </div>
            <div class="containerInstagram">
                <div class="elfsight-app-6ac799a2-5437-490e-a8b6-26396bcb78c5"></div>
            </div>
        </div>
        <FooterElement/>
    </div>
</template>

<script>
    import {router} from "../main.js";
    import FooterElement from "../components/Footer.vue";
    import DualImageBanner from "../components/DualImageBanner.vue";

    export default {
        name: "HelloWorld",
        components: {FooterElement, DualImageBanner},
        metaInfo: {
            title: 'Home Page LoginGaming',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Home Page LoginGaming Pagina dedicata al pub di Roma' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name:'keywords',content:'2021, Hamburger, Panini, LOGIN ESPORTS, LOGIN GAMING ESPORTS, SIM RACING, SQUADRE, TEAMS, SIMULATORI DI GUIDA, COMICS, MANGA, FUMETTERIA, ASSETTO CORSA, ASSETTO CORSA COMPETIZIONE, EVENTI, PARTNERS, GUARDS, SQUALO, SHARK, AUTO DA CORSA, CONTATTI, ESPORTS ACADEMY, TORNEI, PROGETTO, PROJECT, GIOCHI DI CARTE, CARD GAME, ULTIMI VOLUMI, ULTIMI CAPITOLI, SALA LAN, ESPORTS BAR, ESPORTS PUB, GAMING AREA, SOCIAL NETWORK, SOCIAL, COCKTAILS, COCKTAIL'}
            ]
        },
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
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
            window.setInterval(() => {
                this.rightArrow();
            }, 6000);
        },
        data: () => ({
            dynamicContentHtml: "",
            i: 0,
            video: {
                src: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_0cSvQeHL6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            },
        }),
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
    .elfsight-app-6ac799a2-5437-490e-a8b6-26396bcb78c5{
        > .eapps-link {
            display: none!important;
        }
    }
    $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
    $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

    .fixedHeaderContainerHomePage {
        background-image: url("../assets/copertina.jpg");
        background-size: cover;
        min-height: 100vh;
    }
    .testIframe div {
      height: 960px;
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

    .BottoneFumetteria {
        width: 150px;
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
            font-size: 14px;
        }
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

        h1{
            letter-spacing: 4px;
        }
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
    p {
        line-height: 1.5em;
    }

    .fotoLeftImageMain {
        background-image: url("../assets/logincarosello.jpg");
        height: 100%;
        margin-top: 20px;
        background-size: contain;
        width: auto;
        margin-left: 70px;
    }

    .Ristoro {
        padding: 50px 0 30px 0;
        display: flex;
        flex-flow: nowrap;
        img {
            width: 100%;
        }
        p {
            color: white;
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 10px;
        }
        h1{
            margin-top: 20px;
        }
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
        background-image: url("../assets/simrig2.png");
        background-size: contain;
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
        height: 60px;
        width: auto;
        padding: 0 30px;
        font-size: 20px;
        outline: none;
        margin-top: 35px;

        &:hover {
            text-decoration: underline;
        }
    }
    .bottoneTestoMainBlack {
        background: transparent;
        border: 1px solid black;
        height: 60px;
        width: auto;
        padding: 0 30px;
        font-size: 20px;
        outline: none;
        margin-top: 35px;

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
        background: white;
        flex-wrap: nowrap;
        display: flex;
        position: relative;
        padding: 100px 40px;
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
        .Ristoro {
            width: 100%;
            flex-flow: column;
        }
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
            background-image: url("../assets/simrig2.png");
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
        video {
            height: 100%;
        }
    }

    @media only screen and (max-width: 800px) {
        .fotoLeftImageMain {
            margin-left: 0%;
            width: 100%;
            background-size: 100% 100%;
            height: 400px;
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
      .testIframe div {
        height: 500px;
      }
        .batmanLogo {
            width: 150px;
            height: 150px;
            background-color: red;
        }


        .bottoneTestoMain {
            margin-top: 20px;
        }

    }

</style>
