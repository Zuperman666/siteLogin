<template>
    <Observer @on-change="onChange">
        <div class="container-fluid containerCard" id="test" >
            <div v-if="direction === 'left' " class="row">
                <div class=" col-sm-12  col-md-6 textBox borderRight">
                    <div class="textBoxTitle">
                        <h1>{{title}}</h1></div>
                    <div class="textBoxDescription">
                        <h2>{{text}}</h2>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 imgBox " :class="isVisible ? 'fade-in' : ''">
                    <img v-bind:src="require(`../assets/${img}`)" class="imgCss" :alt="alt">
                </div>
            </div>
            <div v-if="direction ==='right'" class="row">
                <div class="col-md-6 col-sm-12 imgBox borderLeft" :class="isVisible ? 'fade-in' : ''">
                    <img v-bind:src="require(`../assets/${img}`)" class="imgCss" :alt="alt">
                </div>
                <div class=" col-sm-12  col-md-6 textBox ">
                    <div class="textBoxTitle"><h1>{{title}}</h1></div>
                    <div class="textBoxDescription">
                        <h2>{{text}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </Observer>
</template>
<script>
    import Observer from "vue-intersection-observer";

    export default {
        name: 'LetsPlayCards',
        props: ["title", "text", "img", "direction","alt"],
        data: function () {
            return {
                isVisible: false,
            };
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
        },
        components: {
            Observer
        },
        methods: {
            onChange(entry) {
                this.isVisible = entry.isIntersecting;
            }
        }
    }

</script>
<style lang="scss">
    .containerCard {
        background-color: #bebebe;
        padding: 25px;
    }

    .imgBox {
        text-align: right;
    }

    .imgCss {
        width: 100%;
    }

    .textBox {
        text-align: center;
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

    .fade-in {
        animation: fadeIn 3s;
        -webkit-animation: fadeIn 3s;
    }

    .textBoxTitle {
        font-size: 40px;
        font-weight: 700;
    }

    .textBoxDescription {
        font-size: 21px;
    }

    .borderRight {
        border-right: 1px solid black;
    }

    .borderLeft {
        border-right: 1px solid black;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>