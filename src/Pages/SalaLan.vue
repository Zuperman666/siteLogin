<template>
    <div>
        <div class="fixedHeaderContainer">
            <HeaderContainer/>
            <div class="centerTextMain">
                <h1> Questa è la sala lan del login</h1>
                <p>Sottotesto a caso</p>
                <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
                    Prenota Ora
                </button>
            </div>
        </div>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="foto1Letsplay.jpg" direction="right" alt="Gamer Girl"/>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="foto2Letsplay.jpg" alt="Gamer Girl" direction="left"/>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="simLetsplay.jpg" direction="right" alt="Gamer Girl Sim"/>
        <FooterElement/>
    </div>
</template>
<script>
    import LetsPlayCards from '../components/LetsPlayCard.vue'
    import FooterElement from '../components/Footer.vue'
    export default {
        name: 'SalaLan',
        components: {LetsPlayCards, FooterElement},
        metaInfo: {
            title: 'SalaLan LoginGaming',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata alla sala lan del LoginGaming' },
                { name:'keywords',content:'SalaLan LoginGaming'}
            ]
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});

            function a () {
                (window).Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "elektro.gaming.asd@gmail.com",
                    Password : "FD7003C4F50A0AA1CC6226A49B78833C6F1A.",
                    port:2525,
                    To : 'elektro.gaming.asd@gmail.com',
                    From : "elektro.gaming.asd@gmail.com",
                    Subject : "This is the subject",
                    Body : "And this is the body"
                }).then(
                    console.log("a")
                );
            }
            a()
        }
    }
</script>
<style lang="scss" scoped>
    .centerTextMain {
        position: absolute;
        color: white;
        font-size: 60px;
        top: calc(50% - 63px);
        min-width: 100%;
        transform: translate(0, -50%);

        p {
            font-size: 25px;
            margin-top: 30px;
        }
    }

    .fixedHeaderContainer {
        background-image: url("../assets/copertinaLetsplay.jpg");
        background-size: 100% 100%;
        min-height: 100vh;
    }
    @media only screen and (max-width: 972px) {
        .fixedHeaderContainer {
            background-image: url("../assets/joker.png");
        }
    }
</style>