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
                        <form action="https://api.elasticemail.com/contact/add?version=2" data-id="togWPeyyVt" method="post" id="ewf_subscriptionForm_togWPeyyVt" class="EWF__form Inline">
                            <div class="headers" style="">
                                <h4 id="ewf_formheader" class="EWF__header" style="">Contattaci
                                </h4>
                                <p id="ewf_formdesc" style="">
                                </p>
                            </div>
                            <fieldset style="border:none;" class="webform-custominputs">
                                <div class="inputs">
                                    <div>
                                        <label for="email" class="requiredInput">Email
                                        </label>
                                        <input maxlength="60" class="form-control webform__form-control" name="email" size="20" type="email" required="" placeholder="Inserisci la tua email">
                                    </div>
                                    <div>
                                        <label for="field_lastname">Nome
                                        </label>
                                        <input maxlength="60" class="form-control webform__form-control" name="field_lastname" size="20" type="text" false="" placeholder="Inserisci il tuo nome">
                                    </div>
                                    <div>
                                        <label for="field_firstname">Cognome
                                        </label>
                                        <input maxlength="60" class="form-control" name="field_firstname" size="20" type="text" placeholder="Inserisci il tuo cognome">
                                    </div>
                                    <div class="requiredInput">
                                        <label for="field_motivazione">Motivazione
                                        </label>
                                        <input maxlength="60" class="form-control" name="field_motivazione" size="20" type="text" placeholder="" required="">
                                    </div>
                                </div>
                                <div class="checkboxes">
                                </div>
                                <div class="webform-lists" style="display: none;">
                                    <div style="display:flex;" class="checkboxes js-Persone">
                                        <label class="container-box">
                                            <input type="checkbox" name="publiclistid" id="zUkSZMzm" value="3604e3a5-e40d-458c-94a5-f2b9fe4081ac" checked="checked">
                                        </label>
                                        <label class="publiclistlabel" for="zUkSZMzm">Persone
                                        </label>
                                    </div>
                                </div>
                                <div class="consent">
                                    <div class="consentcontainer">
                                    </div>
                                </div>
                                <p id="ewf_datadisclaimer">We use Elastic Email as our marketing automation service. By submitting this form, you agree that the information you provide will be transferred to Elastic Email for processing in accordance with their
                                    <a href="https://elasticemail.com/resources/usage-policies/terms-of-use/" target="_blank">Terms of Use</a> and
                                    <a href="https://elasticemail.com/resources/usage-policies/privacy-policy/" target="_blank">Privacy Policy</a>.
                                </p>
                            </fieldset>
                            <fieldset class="webform-options style-updated" style="border:none;">
                                <div id="trackconsentscript">
                                </div>
                                <input type="submit" name="submit" value="Invia" id="eesubmit" class="EWF__subscribe">
                                <input type="hidden" name="publicaccountid" value="189050db-a241-4d15-bff5-f603db2c7208">
                                <input type="hidden" name="returnUrl" value="">
                                <input type="hidden" name="activationReturnUrl" value="">
                                <input type="hidden" name="alreadyactiveurl" value="">
                                <input type="hidden" name="activationTemplate" value="">
                                <input type="hidden" name="source" value="WebForm">
                                <input type="hidden" name="verifyemail" value="false" id="ewf_verifyEmails">
                                <input type="hidden" id="ewf_captcha" name="captcha" value="false">
                                <input type="hidden" name="notifyEmail" value="">
                                <button type="button" name="dismissForm" id="ewf_dismissForm" style="display:none; position: absolute; top: 0; right: 0; float: right">X
                                </button>
                            </fieldset>
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
