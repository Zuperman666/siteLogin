<template>
  <div>
    <div class="fixedHeaderContainer">
      <HeaderContainer />
    </div>
    <div class="bg-white">
      <div class="container text-left">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="H1">Contatti</div>
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
                <label for="type">Tipo Postazione</label>
                <select
                  id="type"
                  class="form-control"
                  v-model="dataSave.typePc"
                  onchange="dataSave.typePc = target.value"
                >
                  <option>Pc</option>
                  <option>Racing</option>
                </select>
              </div>
              <div class="form-group" v-if="dataSave.typePc === 'Pc'">
                <label for="topicSelect">Numero Persone</label>
                <select id="topicSelect" class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <div class="form-group" v-if="dataSave.typePc === 'Racing'">
                <label for="numberRacing">Numero Persone</label>
                <select id="numberRacing" class="form-control">
                  <option>1</option>
                  <option>2</option>
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
              <div class="btn btn-primary" v-on:click="sendData(dataSave)">
                Invia
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooterElement />
  </div>
</template>
<script>
import FooterElement from "../components/Footer.vue";

export default {
  name: "Contattaci",
  components: { FooterElement },
  mounted: function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  metaInfo: {
    title: 'PrenotaPc LoginGaming',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Pagina dedicata alla prenotazione dei pc del LoginGaming' },
      { name:'keyword',content:'PrenotaPc LoginGaming'}
    ]
  },
  data() {
    return {
      dataSave: {
        nome: "",
        cognome: "",
        email: "",
        check: false,
        typePc: this.setTypePc(),
      },
    };
  },
  methods: {
    sendData: (dataSave) => {
      console.log(dataSave);
    },
    setTypePc: () => {
      let uri = window.location.search.substring(1);
      let params = new URLSearchParams(uri);
      if (params.get("typePc")) {
        console.log(params.get("typePc"));
        return params.get("typePc");
      } else {
        return "Pc";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.fixedHeaderContainer {
  background-image: url("../assets/logincarosello.jpg");
  background-size: cover;
  min-height: 80vh;
}
</style>
