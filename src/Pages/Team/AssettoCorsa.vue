<template>
    <div>
        <HeaderContainer/>
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../../components/Footer.vue'
    export default {
        name: 'AssettoCorsa',
        components:{FooterElement},
        metaInfo: {
            title: 'Assetto Corsa LoginGaming Team',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata al team di Assetto Corsa del Login Gaming' },
                { name:'keyword',content:'Assetto Corsa LoginGaming Team'}
            ]
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }
</script>
<style lang="scss">

</style>