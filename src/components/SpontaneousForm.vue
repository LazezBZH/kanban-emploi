<template>
  <div class="form-spontaneous" v-if="revelebis">
    <div class="overlay">
      <modale v-bind:revele="revele" v-bind:toggleModal="toggleModal"></modale>
      <div class="close">
        <button
          v-on:click="
            toggleSpontaneousForm();
            resetForm();
          "
        >
          Retour à l'accueil
        </button>
      </div>
      <div class="form-title-spontaneous">
        <h3>Fiche candidature spontanée</h3>
      </div>
      <form v-on:submit.prevent="createSpontaneous">
        <div class="spontaneous">
          <div class="firm">
            <h4>Entreprise</h4>
            <p>Nom</p>
            <input
              type="text"
              placeholder="Capgemini, Mano Mano..."
              v-model="firmName"
            />
            <p class="avert">obligatoire</p>
            <p>Type d'entreprise</p>
            <input
              type="text"
              placeholder="Start up, ESN..."
              v-model="firmType"
            />
            <p>Pays d'origine</p>
            <input
              type="text"
              placeholder="France, Canada..."
              v-model="firmOrigin"
            />
            <p>Lieu d'emploi</p>
            <input
              type="text"
              placeholder="Lieu de travail souhaité"
              v-model="firmLocation"
            />
            <p>Site de l'entreprise</p>
            <input type="url" placeholder="Site web" v-model="firmSite" />
            <p>LinkedIn</p>
            <input type="url" placeholder="LinkendIn" v-model="firmLinkedin" />
            <p>welcome To The Jungle</p>
            <input
              type="url"
              placeholder="Welcome to the jungle"
              v-model="firmJungle"
            />
            <p>Téléphone</p>
            <input type="tel" placeholder="Téléphone" v-model="firmPhone" />
            <p>Effectif</p>
            <input
              type="number"
              placeholder="Nombre de salariés"
              v-model="firmEffectif"
            />
          </div>
          <div class="contact">
            <h4>Prise de contact</h4>
            <p>Date premier contact</p>
            <input type="date" v-model="firthDate" />
            <p>Date de réponse</p>
            <input type="date" v-model="answerDate" />
            <p>Réponse</p>
            <textarea placeholder="Réponse" v-model="txtAnswer" />
            <p>Commentaire</p>
            <textarea placeholder="Réponse" v-model="comment" />
          </div>
          <div class="staffs">
            <h4>CONTACTS DANS L'ENTREPRISE</h4>
            <div class="staff">
              <div class="firth-staff">
                <h5>Contact n°1</h5>
                <p>Nom</p>
                <input
                  type="text"
                  placeholder="Nom, prénom"
                  v-model="staff1Name"
                />
                <p>Fonction</p>
                <input
                  type="text"
                  placeholder="Poste occupé"
                  v-model="staff1Job"
                />
                <p>LinkedIn</p>
                <input
                  type="url"
                  placeholder="LinkedIn"
                  v-model="staff1Linkedin"
                />
                <p>Mail</p>
                <input type="mail" placeholder="E-mail" v-model="staff1Mail" />

                <p>Téléphone</p>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  v-model="staff1Phone"
                />
              </div>
              <div class="line"></div>
              <div class="second-staff">
                <h5>Contact n°2</h5>
                <p>Nom</p>
                <input
                  type="text"
                  placeholder="Nom, prénom"
                  v-model="staff2Name"
                />
                <p>Fonction</p>
                <input
                  type="text"
                  placeholder="Poste occupé"
                  v-model="staff2Job"
                />
                <p>LinkedIn</p>
                <input
                  type="url"
                  placeholder="LinkedIn"
                  v-model="staff2Linkedin"
                />
                <p>Mail</p>
                <input type="mail" placeholder="E-mail" v-model="staff2Mail" />

                <p>Téléphone</p>
                <input
                  type="tel"
                  placeholder="Téléphone"
                  v-model="staff2Phone"
                />
              </div>
            </div>
          </div>
        </div>
        <button :disabled="!isFormValid" v-on:click="toggleModal">
          Enregistrer &#x00AE;
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import MyFormModal from "../components/MyFormModal.vue";
export default {
  name: "SpontaneousForm",
  props: ["revelebis", "toggleSpontaneousForm"],
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: MyFormModal,
  },
  methods: {
    toggleModal: function () {
      this.revele = !this.revele;
      window.scrollTo({ top: 0 });
    },
  },
  emits: ["createspontaneous"],
  setup(props, context) {
    let firmName = ref("");
    let firmOrigin = ref("");
    let firmType = ref("");
    let firmLocation = ref("");
    let firmSite = ref("");
    let firmLinkedin = ref("");
    let firmJungle = ref("");
    let firmPhone = ref("");
    let firmEffectif = ref("");
    let firthDate = ref("");
    let answerDate = ref("");
    let txtAnswer = ref("");
    let comment = ref("");
    let staff1Name = ref("");
    let staff1Job = ref("");
    let staff1Linkedin = ref("");
    let staff1Mail = ref("");
    let staff1Phone = ref("");
    let staff2Name = ref("");
    let staff2Job = ref("");
    let staff2Linkedin = ref("");
    let staff2Mail = ref("");
    let staff2Phone = ref("");

    function createSpontaneous() {
      const spontaneous = {
        id: Date.now(),
        firmName: firmName.value,
        firmOrigin: firmOrigin.value,
        firmType: firmType.value,
        firmLocation: firmLocation.value,
        firmSite: firmSite.value,
        firmLinkedin: firmLinkedin.value,
        firmJungle: firmJungle.value,
        firmPhone: firmPhone.value,
        firmEffectif: firmEffectif.value,
        firthDate: firthDate.value,
        answerDate: answerDate.value,
        txtAnswer: txtAnswer.value,
        comment: comment.value,
        staff1Name: staff1Name.value,
        staff1Job: staff1Job.value,
        staff1Linkedin: staff1Job.value,
        staff1Mail: staff1Mail.value,
        staff1Phone: staff1Phone.value,
        staff2Name: staff2Name.value,
        staff2Job: staff2Job.value,
        staff2Linkedin: staff2Job.value,
        staff2Mail: staff2Mail.value,
        staff2Phone: staff2Phone.value,
        list: 1,
      };
      console.log("spont", spontaneous);
      context.emit("createspontaneous", spontaneous);
      resetForm();
    }
    function resetForm() {
      firmName.value = "";
      firmOrigin.value = "";
      firmType.value = "";
      firmLocation.value = "";
      firmSite.value = "";
      firmLinkedin.value = "";
      firmJungle.value = "";
      firmPhone.value = "";
      firmEffectif.value = "";
      firthDate.value = "";
      answerDate.value = "";
      txtAnswer.value = "";
      comment.value = "";
      staff1Name.value = "";
      staff1Job.value = "";
      staff1Linkedin.value = "";
      staff1Mail.value = "";
      staff1Phone.value = "";
      staff2Name.value = "";
      staff2Job.value = "";
      staff2Linkedin.value = "";
      staff2Mail.value = "";
      staff2Phone.value = "";
    }
    const isFormValid = computed(() => {
      if (firmName.value.length > 1) {
        return true;
      } else {
        return false;
      }
    });
    return {
      firmName,
      firmOrigin,
      firmType,
      firmLocation,
      firmSite,
      firmLinkedin,
      firmJungle,
      firmPhone,
      firmEffectif,
      firthDate,
      answerDate,
      txtAnswer,
      comment,
      staff1Name,
      staff1Job,
      staff1Linkedin,
      staff1Mail,
      staff1Phone,
      staff2Name,
      staff2Job,
      staff2Linkedin,
      staff2Mail,
      staff2Phone,
      createSpontaneous,
      resetForm,
      isFormValid,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spontaneous {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
  background-color: rgba(0, 110, 144, 0.3);
  padding: 2rem;
}
.spontaneous input {
  width: 70%;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}
.form-title-spontaneous {
  width: 50%;
  margin: 2rem auto;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 110, 144, 0.8);
  border: 0.5rem ridge #006e90ff;
}
button {
  width: 8rem;
  height: 2rem;
  margin: 1rem auto 0;
  background-color: #444444;
  color: white;
  padding-bottom: 1.6rem;
  padding-top: 0.6rem;
  font-weight: bold;
  background-color: rgba(0, 110, 144, 0.8);
  border: 0.5rem ridge #006e90ff;
  border-radius: 0.5rem;
}
button:disabled {
  color: rgba(255, 0, 0, 1);
  cursor: not-allowed;
  border: 0.5rem ridge rgb(193, 192, 192);
}
.close button {
  width: auto;
  height: 4rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 0.6rem;
  font-weight: 200;
  background: rgba(0, 110, 144, 0.8);
  border: 0.5rem ridge #006e90ff;
  color: white;
  padding: 0.2rem 0.5rem;
  cursor: default;
}
.overlay {
  background-color: rgb(247, 245, 240);
  position: absolute;
  top: 0;
  bottom: -110rem;
  left: 0;
  right: 0;
}
.job {
  width: 60%;
  border: 2px solid rgba(0, 110, 144, 0.8);
  padding: 0.2rem 5rem;
  margin: auto;
}
.form-spontaneous h4 {
  color: rgba(0, 110, 144, 1);
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 2rem;
}
.firm {
  width: 50%;
  border: 2px solid rgba(0, 110, 144, 0.8);
  padding: 0.2rem 5rem;
  margin: 1rem auto;
}
.contact {
  width: 100%;
  border-top: 2px solid rgba(0, 110, 144, 0.8);
  margin: auto;
  text-align: center;
}
.contact input,
.contact textarea {
  width: 50%;
}
.contact textarea {
  height: 5rem;
}
.staffs {
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  border: 2px solid rgba(0, 110, 144, 0.8);
}
.staff {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.staffs h4 {
  text-align: center;
}
.firth-staff,
.second-staff {
  width: 45%;
}
.line {
  width: 0.2rem;
  background-color: rgba(0, 110, 144, 0.5);
}
.avert {
  width: 70%;
  margin: -0.3rem 0 0 0;
  font-size: 0.7rem;
  color: red;
  font-style: italic;
  text-align: right;
}
</style>
