<template>
    <div>
        <HeaderContainer/>
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../../components/Footer.vue'
    export default {
        name: 'DragonBall',
        components:{FooterElement},
        metaInfo: {
            title: 'DragonBall LoginGaming Team',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata al team di DragonBall del Login Gaming' },
                { name:'keyword',content:'DragonBall LoginGaming Team'}
            ]
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});}
    }
</script>
<style lang="scss">

</style>