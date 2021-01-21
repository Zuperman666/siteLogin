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
        metaInfo: {
            title: 'Digimon LoginGaming Team',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata al team di Digimon del Login Gaming' },
                { name:'keyword',content:'Digimon LoginGaming Team'}
            ]
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
    }
</script>
<style lang="scss">

</style>