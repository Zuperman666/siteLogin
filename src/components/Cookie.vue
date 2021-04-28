<template>
    <div>
    <div class="fullblocked" :class="[isActive | currentPath === '/Privacy' ? 'disableCoockie' : '']">
    <div class="ContainerCookie">
        <div class="backgroundCookie"> Questo sito usa Cookie</div>
        <div class="TextCookie">
            We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.
        <a v-on:click="redirectPrivacy">Per maggiori informazioni</a>
        </div>
        <div class="buttonContainer">
            <button v-on:click="changeValue" class="acceptCookie"> Accetta tutti i coockie </button>
            <button v-on:click="goOut" class="declineCookie"> Declina </button>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
    import {router} from "../main.js";
export default {

    name: "Cookie",
    props: ['currentPath'],
    data: function () {
        return {
            isActive: false,
        };
    },
    methods: {
        changeValue: function () {
            this.isActive = true;
        },
        goOut: function () {
            window.history.back();
            window.scrollTo({top: 0, behavior: "smooth"});
        },
        redirectPrivacy : function () {
            router.push('/Privacy')
        },

    },
}
</script>
<style lang="scss" scoped>
    .fullblocked {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 99999999;
        &.disableCoockie {
            display: none;
        }
        a {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .ContainerCookie {
        position: absolute;
        z-index: 9999999;
        width: 400px;
        height: 200px;
        opacity: 1;
        left: 50%;
        background: white;
        top: 50%;
        transform: translate(-50%,-50%);

    }
    .backgroundCookie{
        background: blue;
        color: white;
        text-align: left;
        padding-left: 20px;
    }
    .TextCookie {
        display: flex;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
        padding-top:10px;
        flex-flow: column;
    }

    .buttonContainer{
        display: flex;
        justify-content: center;
        justify-content: space-around;
        padding-top: 30px;
    }
    .acceptCookie{
        padding: 5px;
        border:1px solid black;
        background: green;
        color: white;
    }
    .declineCookie {
        border: 2px gray Dashed;
        padding: 5px;
    }

</style>