<template>
  <div class="home">
    <div class="home-banner">
      <BannerCompo
        msg="Gérez votre recherche d'emploi"
        msg2=" Créez vos fiches"
      />
    </div>
    <spontaneousForm
      v-bind:revelebis="revelebis"
      v-bind:toggleSpontaneousForm="toggleSpontaneousForm"
      @createspontaneous="addSpontaneous"
    />
    <div class="formOpenBtn">
      <button class="spontaneous-btn" v-on:click="toggleSpontaneousForm">
        Créer une fiche candidature spontanée
      </button>
      <answerForm
        v-bind:revelebis2="revelebis2"
        v-bind:toggleAnswerForm="toggleAnswerForm"
        @createanswer="addAnswer"
      />

      <button class="answer-btn" v-on:click="toggleAnswerForm">
        Créer une fiche réponse à une offre
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCompo from "@/components/BannerCompo.vue";
import SpontaneousForm from "@/components/SpontaneousForm.vue";
import spontaneousServices from "@/services/spontaneous.js";
import AnswerForm from "@/components/AnswerForm.vue";
import answerServices from "@/services/answer.js";

export default {
  name: "HomeView",
  data() {
    return {
      revelebis: false,
      revelebis2: false,
    };
  },
  components: {
    BannerCompo,
    SpontaneousForm,
    AnswerForm,
  },
  methods: {
    toggleSpontaneousForm: function () {
      this.revelebis = !this.revelebis;
    },
    toggleAnswerForm: function () {
      this.revelebis2 = !this.revelebis2;
    },

    setup() {
      function addSpontaneous(data) {
        console.log("coucou");
        console.log("Home.vue | addSpontaneous()", data);
        spontaneousServices.create(data);
      }
      function addAnswer(data) {
        console.log("coucou");
        console.log("Home.vue | addAnswer()", data);
        answerServices.create(data);
      }
      return { addSpontaneous, addAnswer };
    },
  },
};
</script>
<style>
.home {
  background-color: rgba(173, 202, 214, 0.3);
  padding: 2rem 0.5rem;
}
.home-banner {
  background-color: rgba(173, 202, 214, 0.7);
  padding: 2rem 0.2rem;
}
.home h1 {
  color: rgb(0, 63, 82);
}
.home h2 {
  color: rgb(0, 110, 144);
}
.spontaneous-btn,
.answer-btn {
  width: 30%;
  max-width: 30rem;
  margin: 2rem auto 50vh auto;

  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 110, 144, 0.8);
  border: 0.5rem ridge #006e90ff;
}
.formOpenBtn {
  width: 90%;
  max-width: 70rem;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin: auto;
}
</style>
