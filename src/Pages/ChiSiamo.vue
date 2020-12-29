<template>
    <div>
        <div class="ImageUnderHeaderHamburger">
            <HeaderContainer/>
        </div>
        <div class="subText">
            <h1>Chi Siamo</h1>
            asdasdasdasdasd asd a
            d a
            d a
            sd
            asd
            a
            sd
            asd
            as
            d a
            sdas das dasd as da sd
        </div>
        <div class="col-12 LogoBox">
            <div class="col-12">
                La creazione del logo
            </div>
            <div class="col-12 d-flex flex-md-row flex-column">
                <div class="col-12 col-md-6">
                    <div class="LogoImage">
                        <img v-bind:src="require(`../assets/foto1ChiSiamo.jpg`)" class="imgCss" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    Testo sotto al logo
                </div>
            </div>
        </div>
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../components/Footer.vue'

    export default {
        name: "Chi Siamo",
        components: {FooterElement},
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
    };
</script>
<style lang="scss" scoped>
    .ImageUnderHeaderHamburger {
        background-size: cover;
        height: 100%;
        width: 100%;
        min-height: 100vh;
        background-image: url("../assets/copertinaChiSiamo.jpg");
    }

    .subText {
        background: grey;
    }

    .LogoBox {
        width: 100%;
        height: 100%;
        background: white;
        color: black;
        display: flex;
        flex-flow: column;
    }

    .LogoImage {
        height: 100%;
        width: 100%;
    }
</style>
