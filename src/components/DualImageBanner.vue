<template>
    <div class="background">
        <div class="d-flex bannerDual">
            <div class="title"> {{title}}</div>
            <Observer @on-change="onChange">
                <div class="d-flex imageCenter" :class="isVisible ? 'fade-in' : ''">
                    <img :src="getImageUrl(1)" v-on:mouseenter="img1.actual = linkImage1Alt" v-on:mouseleave="img1.actual = linkImage1" :alt="linkImage1Desc"/>
                    <img :src="getImageUrl(2)" v-on:mouseenter="img2.actual = linkImage2Alt" v-on:mouseleave="img2.actual = linkImage2" :alt="linkImage2Desc"/>
                </div>
            </Observer>

            <div class="text">{{text}}</div>
            <button v-on:click="toYoutube === 'false' ? greet(redirect) : goLink(redirect)" class="bottoneTestoMain">
                {{textButton}}
            </button>
        </div>
    </div>
</template>
<script>
    import {router} from "../main";
    import Observer from 'vue-intersection-observer';

    export default {
        props: ['toYoutube', 'title', 'linkImage1', 'linkImage2', 'text', 'redirect', 'textButton','linkImage1Alt', 'linkImage2Alt',"linkImage1Desc","linkImage2Desc"],
        name: 'DualImageBanner',
        components: {
            Observer
        },
        data: function () {
            return {
                isVisible: false,
                img1: {
                    actual:this.linkImage1,
                },
                img2: {
                    actual:this.linkImage2,
                },
            };
        },
        methods: {
            greet: function (value) {
                router.push(value);
            },
            goLink: function (value) {
                window.location.href = value
            },
            onChange(entry) {
                this.isVisible = entry.isIntersecting;
            },
            getImageUrl: function (value) {
                if(value === 1 ) return require(`../assets/${this.img1.actual}`)
                return require(`../assets/${this.img2.actual}`)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bannerDual {
        flex-flow: column;
        align-items: flex-start;
        margin-left: 10%;
        margin-right: 10%;
    }

    img {
        max-width: 40%;
        margin-right: 10%;
    }

    .title {
        font-size: 30px;
        color: red;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .text {
        font-size: 22px;
        color: black;
        width: 500px;
        margin-top: 20px;
        text-align: left;
    }

    .bottoneTestoMain {
        background: transparent;
        border: 1px solid black;
        height: 50px;
        width: auto;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 10px;
        font-size: 20px;
        outline: none;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }

    .fade-in {
        animation: fadeIn 3s;
        -webkit-animation: fadeIn 3s;
    }

    .background {
        background: white;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 600px) {
        img {
            width: 100%;
            max-width: unset;
            margin-bottom: 30px;
        }
        .imageCenter {
            flex-flow: column;
        }
    }
</style>