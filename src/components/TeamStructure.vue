<template>
    <div>
        <div class="GameImages" :style="[BgImage]"></div>
        <div class="separatorName"></div>
        <div class="flexBox">
            <div v-on:mouseleave="ArrayPlayer.isActive = false" v-on:mouseover="ArrayPlayer.isActive  = true"
                 class="CardPLayer" v-for="(ArrayPlayer, i) in ArrayPlayers"
                 :key="i"
                 :style="{ 'background': 'url(' + ArrayPlayer.src + ')' }
                 ">
                <div class="none" :class="ArrayPlayer.isActive  ? 'visible fade-in' : ''">
                    <div>
                        {{ArrayPlayer.nickname}}
                    </div>
                    <div class="marginBotNation">
                        {{ArrayPlayer.role}}
                    </div>
                    <div v-if="ArrayPlayer.age">
                        {{ArrayPlayer.age}},&nbsp;&nbsp;{{ArrayPlayer.nation}}
                    </div>
                    <div class="separatorColored"></div>
                    <div class="flexIcon">
                        <a v-if="ArrayPlayer.linkTwitter" v-on:mouseleave="twitter = false" class="twitter" :class="twitter ? 'colored': ''"
                           v-on:mouseover="twitter = true"
                           v-bind:href=ArrayPlayer.linkTwitter></a>
                        <a v-if="ArrayPlayer.linkYoutube" v-on:mouseleave="youtube = false" class="youtube" :class="youtube ? 'colored': ''"
                           v-on:mouseover="youtube = true"
                           v-bind:href=ArrayPlayer.linkYoutube></a>
                        <a v-if="ArrayPlayer.linkTwitch" v-on:mouseleave="twitch = false" class="twitch" :class="twitch ? 'colored': ''"
                           v-on:mouseover="twitch = true"
                           v-bind:href=ArrayPlayer.linkTwitch></a>
                        <a v-if="ArrayPlayer.linkInstagram" v-on:mouseleave="instagram = false" class="instagram" :class="instagram ? 'colored': ''"
                           v-on:mouseover="instagram = true"
                           v-bind:href=ArrayPlayer.linkInstagram></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TeamStructure',
        props: ["ArrayPlayers", "ImageGamesLink"],
        data() {
            return {
                twitter: false,
                twitch: false,
                youtube: false,
                instagram: false,
            };
        },

        computed: {
            BgImage() {
                return {
                    background: `url(${this.ImageGamesLink})`,
                    backgroundSize: 'container',
                };
            },
        }
    }
</script>
<style lang="scss" scoped>
    .GameImages {
        width: 100%;
        height: 300px;
        display: block;
    }

    .CardPLayer {
        width: 300px;
        height: 300px;
    }

    .flexBox {
        display: flex;
        width: 80%;
        justify-content: space-evenly;
        margin-left: 10%;
    }

    .none {
        display: none;
    }

    .visible {
        display: flex;
        margin-top: 40%;
        justify-content: center;
        flex-flow: column;
    }

    .marginBotNation {
        margin-bottom: 25%;
    }

    .separatorColored {
        margin-top: 2%;
        height: 1px;
        background: red;
        width: 100%;
    }

    .twitch {
        width: 16px;
        height: 16px;
        background: yellow;

        &.colored {
            background: red;
        }
    }

    .twitter {
        width: 16px;
        height: 16px;
        background: yellow;

        &.colored {
            background: red;
        }
    }

    .flexIcon {
        display: flex;
        width: 100%;
        flex-flow: row;
        justify-content: space-evenly;
        margin-top: 10px;
    }

    .youtube {
        width: 16px;
        height: 16px;
        background: yellow;

        &.colored {
            background: red;
        }
    }

    .instagram {
        width: 16px;
        height: 16px;
        background: yellow;

        &.colored {
            background: red;
        }
    }
    .separatorName{
        height: 100px;
        width: 100%;
        background: grey;
    }
    .fade-in {
        animation: fadeIn ease 1s;
        -webkit-animation: fadeIn ease 1s;
        -moz-animation: fadeIn ease 1s;
        -o-animation: fadeIn ease 1s;
        -ms-animation: fadeIn ease 1s;
    }
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
</style>