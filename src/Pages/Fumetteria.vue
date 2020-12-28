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
        <div class="containerFum">
            <div class="col-md-6 col-sm-12">
                <h1> I VIDEO BELLI</h1>
                <div
                        class="testIframe"
                        v-for="(vid, i) in video"
                        :key="i"
                        :class="i !== 0 ? 'displayNoneVid' : ''"
                >
                    <div v-html="vid.src"></div>
                    <h1>{{vid.title}}</h1>
                    <h2>{{vid.text}}</h2>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <h1> I Fumetti BELLI</h1>
                <div
                        class="blockFumetto"
                        v-for="(item, i) in itemsFumetti"
                        :key="i"
                >
                    <img :src="item.src">
                    <div class="textInsedeFumetto">
                        <h1>{{item.title}}</h1>
                        <h2>{{item.descrizione}}</h2>
                    </div>
                </div>
            </div>

        </div>
        <div class="buttonFumetteria">
            <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
                Prenota Ora
            </button>
        </div>
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../components/Footer.vue'
    import Fumetteria1 from "../assets/fumetteria1.jpg"
    import Fumetteria2 from "../assets/fumetteria2.jpg"
    import Fumetteria3 from "../assets/fumetteria3.jpg"

    export default {
        name: 'Fumetteria',
        components: {FooterElement},
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
        data() {
            return {
                itemsFumetti: [
                    {
                        src: Fumetteria1,
                        title: 'Scoglionato',
                        descrizione: 'Poteva andare peggio ed invece'
                    },
                    {
                        src: Fumetteria2,
                        title: 'Scoglionato2',
                        descrizione: 'Poteva andare peggio ed invece2'
                    },
                    {
                        src: Fumetteria3,
                        title: 'Scoglionato3',
                        descrizione: 'Poteva andare peggio ed invece3'
                    },
                ],
                video: [{
                    src: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ALFRBMClBwU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    title: 'La mamma di flavio 1 ',
                    text: 'Bel film ma la trama scarseggia'
                },
                    {
                        src: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ALFRBMClBwU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        title: 'La vendetta di Gilda 2',
                        text: 'Anvedi Gilda'
                    },
                    {
                        src: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ALFRBMClBwU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        title: 'Il ritorno del Re 3 ',
                        text: 'Molto bello questo signore degli anelli'
                    },

                ],
            }
        }
    }
</script>
<style lang="scss" scoped>

    .testIframe {
        text-align: left;
    }

    .testIframe div {
        height: 460px;
    }

    .textInsedeFumetto {
        color: white;
        text-align: left;
        margin-left: 10px;
        h1{
            font-size: 30px;
            margin-bottom: 20px;
        }
        h2{
            font-size: 16px;
        }
    }

    .displayNoneVid {
        display: block;
    }

    .containerFum {
        display: flex;
        flex-flow: row;
    }

    .blockFumetto {
        display: flex;
        width: 100%;
        height: 300px;
        justify-content: flex-start;
        margin-bottom: 60px;
        img {
            height: 100%;
            width: 100%;
            max-width: 40%;
        }
    }
    .buttonFumetteria{
        background-color: #3d3c3a;
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        .bottoneTestoMain{
            color: white;
        }
    }
    @media only screen and (max-width: 790px) {
        .testIframe div {
            height: 360px;
        }
        .displayNoneVid {
            display: none;
        }
        .containerFum{
            display: flex;
            flex-flow: column;
        }
    }

</style>