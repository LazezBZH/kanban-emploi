<template>
  <div class="form-demo" v-if="revelebis3">
    <div class="overlay">
      <modale
        v-bind:revele="revele"
        v-bind:toggleDemoModal="toggleDemoModalBis"
      ></modale>
      <div class="close">
        <button
          v-on:click="
            toggleDemoForm();
            resetForm();
          "
        >
          Retour à l'accueil
        </button>
      </div>
      <div class="form-title-demo">
        <h3>Fiche réponse à une annonce</h3>
      </div>
      <form v-on:submit.prevent="createDemo">
        <div class="demo">
          <div class="job">
            <h4>OFFRE</h4>
            <p>Intitulé</p>
            <input
              type="text"
              placeholder="Intitulé du poste"
              v-model="jobName"
            />
            <p class="avert">obligatoire</p>
            <p>Lien</p>
            <input
              type="url"
              placeholder="Lien vers l'offre"
              v-model="jobLink"
            />
            <p class="avert">obligatoire</p>
            <p>Type de poste</p>
            <input type="text" placeholder="CDD, CDI..." v-model="jobType" />

            <p>Lieu d'emploi</p>
            <input
              type="text"
              placeholder="Lieu de travail"
              v-model="jobLocation"
            />

            <p>Salaire annuel</p>
            <input type="number" placeholder="Salaire" v-model="jobPay" />
          </div>
          <div class="firm">
            <h4>ENTREPRISE</h4>
            <p>Nom</p>
            <input type="text" placeholder="Firm's Name" v-model="firmName" />
            <p>Type d'entreprise</p>
            <input
              type="text"
              placeholder="Start up, ESN..."
              v-model="firmType"
            />
            <p>Pays d'origine</p>
            <input type="text" placeholder="Créée en:" v-model="firmOrigin" />

            <p>Site de l'entreprise</p>
            <input type="url" placeholder="Site web" v-model="firmSite" />
            <p>LinkedIn</p>
            <input type="url" placeholder="LinkendIn" v-model="firmLinkedin" />
            <p>Welcome To The Jungle</p>
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
            <h4>CANDIDATURE</h4>
            <div class="demos">
              <div class="firstAnswer">
                <p>Date de réponse à l'offre</p>
                <input type="date" v-model="firthDate" />
                <p>Date de réponse du recruteur</p>
                <input type="date" v-model="answerDate" />
                <p>Réponse du recruteur</p>
                <textarea placeholder="Réponse" v-model="txtAnswer" />
              </div>
              <div class="relance">
                <p>Date de relance</p>
                <input type="date" v-model="relanceDate" />
                <p>Date de réponse à la relance</p>
                <input type="date" v-model="answerRelanceDate" />
                <p>Réponse suite à relance</p>
                <textarea placeholder="Réponse" v-model="txtRelanceAnswer" />
                <p>Commentaires</p>
                <textarea placeholder="Commentaires" v-model="comment" />
              </div>
            </div>
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
        <button :disabled="!isFormValid" v-on:click="toggleDemoModal">
          Enregistrer &#x00AE;
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import MyFormDemoModal from "./MyFormDemoModal.vue";
export default {
  name: "DemoForm",
  props: ["revelebis3", "toggleDemoForm"],
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: MyFormDemoModal,
  },
  methods: {
    toggleDemoModal: function () {
      this.revele = !this.revele;

      window.scrollTo({ top: 0 });
    },
    toggleDemoModalBis: function () {
      this.revele = !this.revele;
      window.location.reload();
      window.scrollTo({ top: 0 });
    },
  },
  emits: ["createdemo"],
  setup(props, context) {
    let jobName = ref("");
    let jobLink = ref("");
    let jobType = ref("");
    let jobLocation = ref("");
    let jobPay = ref("");
    let firmName = ref("");
    let firmType = ref("");
    let firmOrigin = ref("");
    let firmSite = ref("");
    let firmLinkedin = ref("");
    let firmJungle = ref("");
    let firmPhone = ref("");
    let firmEffectif = ref("");
    let firthDate = ref("");
    let answerDate = ref("");
    let txtAnswer = ref("");
    let relanceDate = ref("");
    let answerRelanceDate = ref("");
    let txtRelanceAnswer = ref("");
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
    function createDemo() {
      const demo = {
        id: Date.now(),
        jobName: jobName.value,
        jobLink: jobLink.value,
        jobType: jobType.value,
        jobLocation: jobLocation.value,
        jobPay: jobPay.value,
        firmName: firmName.value,
        firmType: firmType.value,
        firmOrigin: firmOrigin.value,
        firmSite: firmSite.value,
        firmLinkedin: firmLinkedin.value,
        firmJungle: firmJungle.value,
        firmPhone: firmPhone.value,
        firmEffectif: firmEffectif.value,
        firthDate: firthDate.value,
        answerDate: answerDate.value,
        txtAnswer: txtAnswer.value,
        relanceDate: relanceDate.value,
        answerRelanceDate: answerRelanceDate.value,
        txtRelanceAnswer: txtRelanceAnswer.value,
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
        list: 8,
      };
      console.log("démo", demo);
      context.emit("createdemo", demo);
      resetForm();
    }
    function resetForm() {
      jobName.value = "";
      jobLink.value = "";
      jobType.value = "";
      jobLocation.value = "";
      jobPay.value = "";
      firmName.value = "";
      firmType.value = "";
      firmOrigin.value = "";
      firmSite.value = "";
      firmLinkedin.value = "";
      firmJungle.value = "";
      firmPhone.value = "";
      firmEffectif.value = "";
      firthDate.value = "";
      answerDate.value = "";
      txtAnswer.value = "";
      relanceDate.value = "";
      answerRelanceDate.value = "";
      txtRelanceAnswer.value = "";
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
      if (jobName.value.length > 1 && jobLink.value.length > 1) {
        return true;
      } else {
        return false;
      }
    });
    return {
      jobName,
      jobLink,
      jobType,
      jobLocation,
      jobPay,
      firmName,
      firmType,
      firmOrigin,
      firmSite,
      firmLinkedin,
      firmJungle,
      firmPhone,
      firmEffectif,
      firthDate,
      answerDate,
      txtAnswer,
      relanceDate,
      answerRelanceDate,
      txtRelanceAnswer,
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
      createDemo,
      resetForm,
      isFormValid,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
  padding: 2rem;
  background-color: rgb(167, 138, 138);
}
.demo input {
  width: 70%;
  height: 1.5rem;
  margin-bottom: 0.5rem;
}
.form-title-demo {
  width: 50%;
  margin: 2rem auto;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgb(143, 45, 45);
  border: 0.5rem ridge rgb(143, 45, 45);
}

button {
  width: 8rem;
  height: 2rem;
  margin: 1rem auto 0;
  color: white;
  padding-bottom: 1.6rem;
  padding-top: 0.6rem;
  font-weight: bold;
  background-color: rgb(143, 45, 45);
  border: 0.5rem ridge rgb(143, 45, 45);
  border-radius: 0.5rem;
}
button:disabled {
  color: rgba(255, 0, 0, 1);
  cursor: not-allowed;
  border: 0.5rem ridge rgb(193, 192, 192);
}
.overlay {
  background-color: rgb(236, 206, 206);
  position: absolute;
  top: 0;
  bottom: -150rem;
  left: 0;
  right: 0;
}
.close button {
  width: auto;
  height: 4rem;
  position: absolute;

  top: 1.5rem;
  right: 1.5rem;
  font-size: 0.6rem;
  font-weight: 200;

  color: white;
  padding: 0.2rem 0.5rem;
  cursor: default;
}
.job {
  width: 60%;
  border: 2px solid rgb(143, 45, 45);
  padding: 0.2rem 5rem;
  margin: auto;
}

.form-demo h4 {
  color: rgb(143, 45, 45);
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 2rem;
}
.firm {
  width: 50%;
  border: 2px solid rgb(143, 45, 45);
  padding: 0.2rem 5rem;
  margin: 1rem auto;
}
.contact {
  width: 100%;
  border-top: 2px solid rgb(143, 45, 45);
  margin: auto;
  text-align: center;
  display: flex;
}
.contact input,
.contact textarea {
  width: 50%;
}
.contact textarea {
  height: 5rem;
}
.contact h4 {
  width: 10%;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.demos {
  width: 80%;
}
.staffs {
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  border: 2px solid rgb(143, 45, 45);
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
  background-color: rgba(143, 45, 45, 0.5);
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
