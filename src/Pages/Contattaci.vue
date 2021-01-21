<template>
    <div>
        <div class="fixedHeaderContainer">
            <HeaderContainer/>
        </div>
        <div class="bg-white">
            <div class="container text-left">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="H1">
                            <h1>
                                Contatti
                            </h1></div>
                        <GoogleMap/>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <form>
                            <div class="row form-group">
                                <div class="col">
                                    <label for="name">Nome</label>
                                    <input
                                            id="name"
                                            type="text"
                                            class="form-control"
                                            v-model="dataSave.nome"
                                    />
                                </div>
                                <div class="col">
                                    <label for="lastName">Cognome</label>
                                    <input
                                            id="lastName"
                                            type="text"
                                            class="form-control"
                                            v-model="dataSave.cognome"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail">Email</label>
                                <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail"
                                        v-model="dataSave.email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="topicSelect">Topic</label>
                                <select id="topicSelect" class="form-control">
                                    <option>topic 1</option>
                                    <option>topic 2</option>
                                </select>
                            </div>
                            <div class="form-group form-check d-flex">
                                <label class="form-check-label" for="exampleCheck"
                                >Data Processing</label
                                >
                                <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="exampleCheck"
                                        v-model="dataSave.check"
                                />
                            </div>
                            <button class="btn btn-primary" v-on:click="sendData()">
                                Invia
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FooterElement/>
    </div>
</template>
<script>
    import GoogleMap from '../components/GoogleMap.vue';
    import FooterElement from "../components/Footer.vue";
    import axios from "axios";

    export default {
        name: "Contattaci",
        components: {FooterElement, GoogleMap},
        metaInfo: {
            title: 'Contattaci LoginGaming',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata alla pagina del contattaci del LoginGaming' },
                { name:'keyword',content:'Page Not Found LoginGaming'}
            ]
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
        data() {
            return {dataSave: {nome: "", cognome: "", email: "", check: false}};
        },
        methods: {
            sendData: async () => {
              let data = {
                SecureToken: "f3923abb-e4a8-4805-8bbb-921aed777ed3",
                To: 'login.gaming.asd@gmail.com',
                From: "login.gaming.asd@gmail.com",
                Subject: "This is the subject",
                Body: "And this is the body",
                Action:"Send"
              }
              data = JSON.stringify(data)
                const gino = await axios.post("https://smtpjs.com/v3/smtpjs.aspx?", data, {
                        headers: {"Content-type": "application/x-www-form-urlencoded"}
                    }
                );
                console.log(gino, "sono gino")
            },
        },
    };
</script>
<style lang="scss">
    .fixedHeaderContainer {
        background-image: url("../assets/logincarosello.jpg");
        background-size: cover;
        min-height: 80vh;
    }
</style>
