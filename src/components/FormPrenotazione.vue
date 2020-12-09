<template>
    <div class="FormFlex">
        <div>
            Prenota il tuo Pc
        </div>
        <div class="Form">
            <div class="FlexName">
                <input type="text" id="nome" value="" v-model="nome" placeholder="inserisci il tuo nome">
                <input type="text" id="cognome" value="" v-model="cognome" placeholder="inserisci il tuo cognome">
                <input type="email" id="email" value="" v-model="email" placeholder="inserisci qui la tua email">
                <input type="number" id="number" value="" v-model="number" placeholder="inserisci il tuo numbero">
            </div>
            <div class="Datepick">
                 <div class="DateDay">
                 <div>Prenota per il</div>
                    <datetime v-model="date"></datetime>
                 </div>
            </div>
        </div>
        <div>
            <button v-on:click="console.log('a')" class="bottoneConferma">
                Conferma La Prenotazione
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "FormPrenotazione",
        data: function () {
            return {
                nome: "",
                cognome: "",
                number:"",
                email:""
            }
        }
    }
</script>
<style lang="scss" scoped>
    .FormFlex {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-flow: column;
        background: white;
    }

    .Form {
        margin-top: 20px;
        width: 100%;
        display: flex;
    }

    .FlexName {
        width: 45%;
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        margin-bottom: 30px;
        input {
            margin-bottom: 30px;
        }
    }
    .Datepick{
        width: 60%;
        justify-content: center;
    }
    .button, input, select, textarea,{
        border-style: solid;
    }
    .DateDay{
        display: flex;
        justify-content: space-evenly;
        flex-flow: nowrap;
    }
    .bottoneConferma {
        background: transparent;
        border: 1px solid black;
        height: 50px;
        width: 200px;
        font-size: 20px;
        outline: none;
        margin-bottom: 30px;
    }
</style>