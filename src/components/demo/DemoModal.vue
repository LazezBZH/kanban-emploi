<template>
  <div class="modal-background">
    <div class="modal">
      <div>
        <h2>Modifier cette fiche</h2>
        <button class="top-btn" @click="cancel">&#128473;</button>
        <form @submit.prevent="saveDemo">
          <div class="answers">
            <div class="job">
              <h4>OFFRE</h4>

              <h5>Intitulé du poste</h5>
              <input type="text" v-model="demoToEdit.jobName" placeholder="" />
              <p class="avert">obligatoire</p>
              <h5>Lien</h5>
              <input type="url" v-model="demoToEdit.jobLink" />
              <p class="avert">obligatoire</p>
              <div>
                <h5>Type de poste hyyy</h5>
                <input type="text" v-model="demoToEdit.jobType" />
              </div>
              <div>
                <h5>Lieu d'emploi</h5>
                <input type="text" v-model="demoToEdit.jobLocation" />
              </div>

              <div>
                <h5>Salaire annuel</h5>
                <input type="number" v-model="demoToEdit.jobPay" />
              </div>
            </div>
            <div class="firm">
              <h4>ENTREPRISE</h4>

              <div>
                <h5>Nom de l'entreprise</h5>
                <input type="text" v-model="demoToEdit.firmName" />
              </div>
              <div>
                <h5>Type d'entreprise</h5>
                <input type="text" v-model="demoToEdit.firmType" />
              </div>
              <div>
                <h5>Pays d'origine</h5>
                <input type="text" v-model="demoToEdit.firmOrigin" />
              </div>

              <div>
                <h5>Site de l'entreprise</h5>
                <input type="url" v-model="demoToEdit.firmSite" />
              </div>
              <div>
                <h5>LinkedIn</h5>
                <input type="url" v-model="demoToEdit.firmLinkedin" />
              </div>
              <div>
                <h5>Welcome To The Jungle</h5>
                <input type="url" v-model="demoToEdit.firmJungle" />
              </div>
              <div>
                <h5>Téléphone</h5>
                <input type="phone" v-model="demoToEdit.firmPhone" />
              </div>
              <div>
                <h5>Effectif</h5>
                <input type="number" v-model="demoToEdit.firmEffectif" />
              </div>
            </div>
            <div class="contact">
              <h4>CANDIDATURE</h4>

              <div class="answer">
                <div class="firstAnswer">
                  <div>
                    <h5>Date de réponse à l'offre</h5>
                    <input type="date" v-model="demoToEdit.firthDate" />
                  </div>
                  <div>
                    <h5>Date de réponse du recruteur</h5>
                    <input type="date" v-model="demoToEdit.answerDate" />
                  </div>
                  <div>
                    <h5>Réponse du recruteur</h5>
                    <textarea v-model="demoToEdit.txtAnswer" />
                  </div>
                </div>
                <div class="relance">
                  <div>
                    <h5>Date de relance</h5>
                    <input type="date" v-model="demoToEdit.relanceDate" />
                    <p>{{ demoToEdit.relanceDate }}</p>
                  </div>
                  <div>
                    <h5>Date de réponse à la relance</h5>
                    <input type="date" v-model="demoToEdit.demoRelanceDate" />
                  </div>
                  <div>
                    <h5>Réponse suite à relance</h5>
                    <textarea v-model="demoToEdit.txtRelanceAnswer" />
                  </div>
                  <div>
                    <h5>Commentaires</h5>
                    <textarea v-model="demoToEdit.comment" />
                  </div>
                </div>
              </div>
            </div>
            <div class="staffs">
              <h4>CONTACTS</h4>

              <div class="staff">
                <div class="firth-staff">
                  <h5>Contact n°1</h5>
                  <div>
                    <h6>Nom</h6>
                    <input type="text" v-model="demoToEdit.staff1Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="demoToEdit.staff1Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input type="url" v-model="demoToEdit.staff1Linkedin" />
                    <p>{{ demoToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="demoToEdit.staff1Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input type="phone" v-model="demoToEdit.staff1Phone" />
                  </div>
                </div>
                <div class="line"></div>
                <div class="second-staff">
                  <h5>Contact n°1</h5>
                  <div>
                    <h6>Nom</h6>
                    <input type="text" v-model="demoToEdit.staff2Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="demoToEdit.staff2Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input type="url" v-model="demoToEdit.staff2Linkedin" />
                    <p>{{ demoToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="demoToEdit.staff2Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input type="phone" v-model="demoToEdit.staff2Phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="edit-btn">
            <button :disabled="!isFormValid">
              Sauvegarder
              <span class="allowed">&#9989;</span>
            </button>
            <button @click="cancel">Annuler &#x21A9;</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "DemoModal",
  emits: ["updatedemo", "cancel"],
  props: {
    demo: {
      require: true,
    },
  },
  setup(props, context) {
    let demoToEdit = ref({ ...props.demo });

    function saveDemo() {
      const demoUpdated = {
        id: demoToEdit.value.id,
        jobName: demoToEdit.value.jobName,
        jobLink: demoToEdit.value.jobLink,
        jobType: demoToEdit.value.jobType,
        jobLocation: demoToEdit.value.jobLocation,
        jobPay: demoToEdit.value.jobPay,
        firmName: demoToEdit.value.firmName,
        firmType: demoToEdit.value.firmType,
        firmOrigin: demoToEdit.value.firmOrigin,
        firmSite: demoToEdit.value.firmSite,
        firmLinkedin: demoToEdit.value.firmLinkedin,
        firmJungle: demoToEdit.value.firmJungle,
        firmPhone: demoToEdit.value.firmPhone,
        firmEffectif: demoToEdit.value.firmEffectif,
        firthDate: demoToEdit.value.firthDate,
        answerDate: demoToEdit.value.answerDate,
        txtAnswer: demoToEdit.value.txtAnswer,
        relanceDate: demoToEdit.value.relanceDate,
        answerRelanceDate: demoToEdit.value.answerRelanceDate,
        txtRelanceAnswer: demoToEdit.value.txtRelanceAnswer,
        comment: demoToEdit.value.comment,
        staff1Name: demoToEdit.value.staff1Name,
        staff1Job: demoToEdit.value.staff1Job,
        staff1Linkedin: demoToEdit.value.staff1Linkedin,
        staff1Mail: demoToEdit.value.staff1Mail,
        staff1Phone: demoToEdit.value.staff1Phone,
        staff2Name: demoToEdit.value.staff2Name,
        staff2Job: demoToEdit.value.staff2Job,
        staff2Linkedin: demoToEdit.value.staff2Linkedin,
        staff2Mail: demoToEdit.value.staff2Mail,
        staff2Phone: demoToEdit.value.staff2Phone,
        list: demoToEdit.value.list,
      };
      console.log("demoUpdated", demoUpdated);
      context.emit("updatedemo", demoUpdated);
      window.scrollTo({ top: 0 });
    }
    function cancel() {
      context.emit("cancel");
      window.scrollTo({ top: 0 });
    }
    const isFormValid = computed(() => {
      if (
        demoToEdit.value.jobName.length > 1 &&
        demoToEdit.value.jobLink.length > 1
      ) {
        return true;
      } else {
        return false;
      }
    });
    return {
      demoToEdit,
      saveDemo,
      cancel,
      isFormValid,
    };
  },
};
</script>

<style scoped>
form {
  max-width: 130rem;
  margin: auto;
  padding: 0 10rem;
}
.modal-background {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 500%;
  background-color: rgb(248, 179, 75);
}
.answers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.job,
.firm,
.contact {
  width: 30rem;
  border: 2px solid black;
  padding-bottom: 1rem;
  border-radius: 2rem;
  margin: 0.3rem;
  background-color: wheat;
}
.staffs {
  width: 40rem;
  border: 2px solid black;
  padding-bottom: 1rem;
  border-radius: 2rem;
  margin: 0.3rem;
  background-color: wheat;
}
.staff {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.modal h2 {
  color: red;
}
.modal h4 {
  color: rgb(72, 93, 33);
}
.edit-btn {
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: auto;
}

.edit-btn button {
  width: 10rem;
  height: 2rem;
  margin: 1rem auto 0;
  color: purple;
  padding-bottom: 1.6rem;
  padding-top: 0.6rem;
  font-weight: bold;
  background-color: rgba(241, 145, 1, 0.7);
  border: 0.5rem ridge #f18f01ff;
  border-radius: 0.5rem;
}

.edit-btn button:disabled {
  color: rgba(255, 0, 0, 1);
  cursor: not-allowed;
  background-color: rgb(227, 227, 226);
  border: 0.5rem ridge rgb(193, 192, 192);
}
.edit-btn button:disabled .allowed {
  display: none;
}

.top-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.2rem;
  background-color: rgba(241, 145, 1, 0.751);
  border: 0.5rem ridge #f18f01ff;
  border-radius: 0.3rem;
}
.avert {
  width: 70%;
  margin: 0rem 0 0 0;
  font-size: 0.7rem;
  color: red;
  font-style: italic;
  text-align: right;
}
</style>
