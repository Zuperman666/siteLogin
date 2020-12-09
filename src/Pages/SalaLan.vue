<template>
    <div>
        <div class="fixedHeaderContainer">
            <HeaderContainer/>
            <div class="centerTextMain">
                Questa è la sala lan del login
                <p>Sottotesto a caso</p>
                <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
                    Prenota Ora
                </button>
            </div>
        </div>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="right"/>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="left"/>
        <LetsPlayCards text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="right"/>
        <FooterElement/>
    </div>
</template>
<script>
    import LetsPlayCards from '../components/LetsPlayCard.vue'
    import FooterElement from '../components/Footer.vue'

    export default {
        name: 'SalaLan',
        components: {LetsPlayCards, FooterElement},
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
        background-image: url("../assets/MNT00276.png");
        background-size: cover;
        min-height: 80vh;
    }
</style>