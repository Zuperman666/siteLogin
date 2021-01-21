<template>
    <div>
          <h1>
              FILE NOT FOUND
          </h1>
    </div>
</template>
<script>
    export default {
        name: "404",
        metaInfo: {
            title: '404 LoginGaming',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina per la gestione degli errori di pagina non trovata del LoginGaming' },
                { name:'keyword',content:'Page Not Found LoginGaming'}
            ]
        },
        mounted: function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    };
</script>
<style lang="scss" scoped>

</style>
