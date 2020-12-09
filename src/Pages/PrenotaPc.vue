<template>
    <div>
        <HeaderContainer/>
        <div class="fotoBackground"></div>
        <FormPrenotazione />
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../components/Footer.vue';
    import FormPrenotazione from "../components/FormPrenotazione";
    export default {
        name: 'PrenotaPc',
        components:{FooterElement,FormPrenotazione},
    }
</script>
<style lang="scss" scoped>
.fotoBackground{
    width:100%;
    height: 500px;
    background: grey;
}
</style>