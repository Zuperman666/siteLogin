<template>
    <div>
        <HeaderContainer/>

        <div class="separatoreTop"></div>
        <div class="timelineContainer"
             :style="{ 'backgroundImage': indexItems === '-1'  ? 'grey' :'url(' + items[indexItems].src + ')' }">
            <div class="timeline">

                <div class="timelineItem"
                     v-for="(item, i) in items"
                     :data-text='items[i].date'
                     :key="i"
                     :class="indexItems == i ? 'active':''"
                >
                    <div class="timelineContent" :id="i">
                        <img class="timelineImg" :style="{ 'background': 'url(' + item.src + ')' }"/>
                        <h1 class="timelineTitle">{{item.title}}</h1>
                        <h2 class="timelineText">{{item.text}}</h2>
                        <a :href="item.link">{{item.linkDesc}}</a>
                    </div>
                </div>
            </div>
        </div>

        <FooterElement/>
    </div>
</template>
<script>
    import $ from 'jquery';
    import FooterElement from "../components/Footer.vue";

    export default {
        name: "Eventi",
        components: {
            FooterElement
        },
        created: function () {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed: function () {
            window.removeEventListener("scroll", this.handleScroll);
        },

        data() {
            return {
                indexItems: "-1",
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        title: 'Nome Evento 1 ',
                        text: 'Testo Evento 1',
                        link: 'https://www.google.it',
                        linkDesc: 'link evento',
                        date: '25/02/2021'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                        title: 'Nome Evento 2',
                        text: 'Testo Evento 2',
                        link: 'https://www.google.it',
                        linkDesc: 'link evento',
                        date: '25/02/2022'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                        title: 'Nome Evento 3',
                        text: 'Testo Evento 3',
                        link: 'https://www.google.it',
                        linkDesc: 'link evento',
                        date: '25/02/2023'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                        title: 'Nome Evento 4',
                        text: 'Testo Evento 4',
                        link: 'https://www.google.it',
                        linkDesc: 'link evento',
                        date: '25/02/2024'
                    },
                ],
            }
        },
        methods: {
            handleScroll() {
                let windowHeight = $(window).height(),
                    gridTop = windowHeight * .2,
                    gridBottom = windowHeight * .4;
                let v = this;
                let i = -1
                let allFalse = 0
                $('.timelineContent').each(function () {
                    i++
                    var thisTop = $(this).offset().top - $(window).scrollTop();
                    if (thisTop >= gridTop && thisTop <= gridBottom) {
                        v.indexItems = i.toString()
                    } else {
                        allFalse++
                        if (allFalse === v.items.length)
                            v.indexItems = "-1"
                    }
                })
            },
        },
    };
</script>
<style lang="scss" scoped>
    .separatoreTop {
        height: 130px;
        width: 100%;
        display: inline-block;
    }

    @mixin responsive() {
        @media only screen and (max-width: 767px) {
            @content;
        }
    }

    $timeline-width: 700px;
    $timeline-container-width: 100%;
    .timeline {
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        flex-direction: column;
        max-width: $timeline-width;
        position: relative;

        .timelineContent {
            .timelineTitle {
                font-weight: normal;
                font-size: 66px;
                margin: -10px 0 0 0;
                transition: .4s;
                padding: 0 10px;
                box-sizing: border-box;
                color: #fff;
            }

            .timelineText {
                margin: 0;
                font-size: 15px;
                box-sizing: border-box;
                color: rgba(#fff, .7);
                font-weight: normal;
                line-height: 25px;
            }
        }

        &:before {
            position: absolute;
            left: 50%;
            width: 2px;
            height: 100%;
            margin-left: -1px;
            content: "";
            background: rgba(255, 255, 255, .07);
            @include responsive() {
                left: 40px;
            }
        }

        .timelineItem {
            padding: 80px 0;
            opacity: .3;
            filter: blur(2px);
            transition: .5s;
            box-sizing: border-box;
            width: calc(50% - 40px);
            display: flex;
            position: relative;
            transform: translateY(-80px);

            &:before {
                content: attr(data-text);
                letter-spacing: 3px;
                width: 100%;
                position: absolute;
                color: rgba(#fff, .5);
                font-size: 13px;
                border-left: 2px solid rgba(#fff, .5);
                top: 70%;
                margin-top: -5px;
                padding-left: 15px;
                opacity: 0;
                right: calc(-100% - 56px);
            }

            &:nth-child(even) {
                align-self: flex-end;

                &:before {
                    right: auto;
                    text-align: right;
                    left: calc(-100% - 56px);
                    padding-left: 0;
                    border-left: none;
                    border-right: 2px solid rgba(#fff, .5);
                    padding-right: 15px;
                }
            }

            &.active {
                opacity: 1;
                filter: blur(0px);

                &:before {
                    top: 50%;
                    transition: .3s all .2s;
                    opacity: 1;
                }

                .timelineTitle {
                    margin: -50px 0 20px 0;
                }
            }

            @include responsive() {
                align-self: baseline !important;
                width: 100%;
                padding: 0 30px 150px 80px;
                &:before {
                    left: 10px !important;
                    padding: 0 !important;
                    top: 50px;
                    text-align: center !important;
                    width: 60px;
                    border: none !important;
                }
                &:last-child {
                    padding-bottom: 40px;
                }
            }
        }

        & img {
            max-width: 100%;
            width: 100%;
            height: 100%;
            box-shadow: 0 10px 15px rgba(0, 0, 0, .4);
        }

    }

    .timelineContainer {
        width: $timeline-container-width;
        position: relative;
        padding: 80px 0;
        transition: .3s ease 0s;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;

        &:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(99, 99, 99, 0.8);
            content: "";
        }
    }

</style>