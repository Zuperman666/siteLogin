<template>
    <div>
        <HeaderContainer/>
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../../components/Footer.vue'
    export default {
        name: 'Digimon',
        components:{FooterElement},
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
    }
</script>
<style lang="scss">

</style>