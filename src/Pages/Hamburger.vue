<template>
    <div>
        <div class="ImageUnderHeaderHamburger">
            <HeaderContainer/>
            <div class="centerTextMain">
                Entra nel mondo di Login dove tutto può succedere!!
                <p>Sottotesto a caso</p>
                <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
                    Prenota Ora
                </button>
            </div>
        </div>
        <div class="d-md-inline-flex">
            <div class="col-md-6 col-sm-12">
                <video
                        poster="https://images-na.ssl-images-amazon.com/images/I/81eNGmjkfsL._AC_SL1500_.jpg"
                        width="100%"
                        height="100%"
                        controls
                >
                    <source src="../assets/videoplayback.mp4" type="video/mp4"/>
                </video>
            </div>
            <div class="col-md-6 col-sm-12">
                <img class="imgThree" src=../assets/MNT00026.png>
            </div>
        </div>
        <div class="d-md-inline-flex">
            <div class="col-md-6 col-sm-12">
                <img class="imgThree" src=../assets/MNT00026.png>
            </div>
            <div class="col-md-6 col-sm-12">
                <img class="imgThree" src=../assets/MNT00026.png>
            </div>
        </div>
        <div class="separatorElement"></div>
        <div class="Ristoro2">
            <div class="textRistoro">
                IL NOSTRO RISTORO
                <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
            </div>
            <div class="carousell2">
                <div class="imageCarousell2" :style="[bg]"></div>
                <div class="arrowLeft" v-on:click="leftArrow"></div>
                <div class="arrowRigth" v-on:click="rightArrow"></div>
                <div class="textFoodOverCarousel">{{ items[i].name }}</div>
            </div>
        </div>
        <div class="textFoodBanner">
            <div class="textFoodContainer">
                <p>sdajsnmdasd </p>
                <p>sdajsnmdasd </p>
                <p>sdajsnmdasd </p>
                <p>sdajsnmdasd </p>
                <p>sdajsnmdasd </p>
            </div>
            <button v-on:click="modal" class="bottoneTestoMain">
                Prenota Ora
            </button>
        </div>
        <modal v-if="showModal"/>
        <FooterElement></FooterElement>
    </div>
</template>
<script>
    import FooterElement from "../components/Footer.vue";
    import modal from "../components/modal.vue"
    import {router} from "../main.js";
    import FotoCibo2 from "../assets/MNT00075.png";
    import FotoCibo3 from "../assets/MNT00111.png";
    import FotoCibo4 from "../assets/MNT00097.png";
    import FotoCibo5 from "../assets/MNT00011.png";
    import FotoCibo6 from "../assets/MNT00023.png";
    import FotoCibo7 from "../assets/MNT00031.png";
    import FotoCibo8 from "../assets/MNT00037.png";
    import FotoCibo9 from "../assets/MNT00047.png";
    import FotoCibo10 from "../assets/MNT00057.png";
    import FotoCibo11 from "../assets/MNT00070.png";
    import FotoCibo12 from "../assets/MNT00094.png";
    import FotoCibo13 from "../assets/MNT00106.png";

    export default {
        name: "Hamburgeria",
        components: {FooterElement, modal},
        data() {
            return {
                showModal: false,
                i: 0,
                items: [
                    {
                        src: FotoCibo2,
                        name: "Polpette Al Sugo",
                    },
                    {
                        src: FotoCibo3,
                        name: "Piatto Aperitivo",
                    },
                    {
                        src: FotoCibo4,
                        name: "Patate Cheddar e Bacon",
                    },
                    {
                        src: FotoCibo5,
                        name: "Mayor Mc Cheese",
                    },
                    {
                        src: FotoCibo6,
                        name: "Goomba",
                    },
                    {
                        src: FotoCibo7,
                        name: "Onion Knight",
                    },
                    {
                        src: FotoCibo8,
                        name: "Noob",
                    },
                    {
                        src: FotoCibo9,
                        name: "Kikkirikiller",
                    },
                    {
                        src: FotoCibo10,
                        name: "Login Special",
                    },
                    {
                        src: FotoCibo11,
                        name: "Easter Egg",
                    },
                    {
                        src: FotoCibo12,
                        name: "Polpette Cacio e Pepe",
                    },
                    {
                        src: FotoCibo13,
                        name: "Patate Cacio e Pepe",
                    },
                ],
            };
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
            window.setInterval(() => {
                this.rightArrow();
            }, 6000);
        },
        methods: {
            modal: function () {
                this.showModal = true;
            }
            ,
            greet: function () {
                router.push("/Contattaci");
            },
            leftArrow: function () {
                if (this.i === 0) return (this.i = 11);
                return this.i--;
            },
            rightArrow: function () {
                if (this.i === 11) return (this.i = 0);
                return this.i++;
            },
        },
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
<style lang="scss">
    .TextNameTitle {
        font-size: 40px;
        color: white;
    }

    .TextNameTitleOur {
        font-size: 30px;
        color: white;
    }

    .ImageMenùContainer {
        display: flex;
        justify-content: center;
    }

    .imgThree {
        width: 100%;
    }

    .ImagineMenù {
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
        height: 100% !important;
    }

    .ImageUnderHeaderHamburger {
        background-size: cover;
        height: 100%;
        width: 100%;
        min-height: 80vh;
    }

    .v-image__image {
        z-index: 0 !important;
    }

    .imageCarousell2 {
        width: 1000px;
        height: 666px;
        justify-content: center;
        margin-top: 124px;
        background-size: 100% 100%;
    }

    .textFoodContainer {
        width: 500px;

        p {
            margin-top: 10px;
            color: crimson;
        }

    }

    .carousell2 {
        width: 100%;
        height: 610px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .textFoodBanner {
        background-color: #3d3c3a;
        height: 400px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;

        .bottoneTestoMain {
            margin-top: 30px;
            color: white;
        }
    }

    .Ristoro2 {
        height: 810px;
        width: 100%;
    }

    .textFoodOverCarousel {
        position: absolute;
        color: white;
        margin-top: 500px;
        font-size: 30px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    @media screen and (max-width: 992px) {
        .v-image__image {
            background-size: cover !important;
        }
    }

    @media screen and (max-width: 800px) {
        .textFoodContainer {
            width: 100%;
        }
    }
</style>