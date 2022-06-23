<template>
  <div class="modal-background">
    <div class="modal">
      <div>
        <h2>Modifier cette fiche</h2>
        <button class="top-btn" @click="cancel">&#128473;</button>
        <form @submit.prevent="saveAnswer">
          <div class="answers">
            <div class="job">
              <h4>OFFRE</h4>

              <h5>Intitulé du poste</h5>
              <input
                type="text"
                v-model="answerToEdit.jobName"
                placeholder=""
              />
              <p class="avert">obligatoire</p>
              <h5>Lien</h5>
              <input type="url" v-model="answerToEdit.jobLink" />
              <p class="avert">obligatoire</p>
              <div>
                <h5>Type de poste hyyy</h5>
                <input type="text" v-model="answerToEdit.jobType" />
              </div>
              <div>
                <h5>Lieu d'emploi</h5>
                <input type="text" v-model="answerToEdit.jobLocation" />
              </div>

              <div>
                <h5>Salaire annuel</h5>
                <input type="number" v-model="answerToEdit.jobPay" />
              </div>
            </div>
            <div class="firm">
              <h4>ENTREPRISE</h4>

              <div>
                <h5>Nom de l'entreprise</h5>
                <input type="text" v-model="answerToEdit.firmName" />
              </div>
              <div>
                <h5>Type d'entreprise</h5>
                <input type="text" v-model="answerToEdit.firmType" />
              </div>
              <div>
                <h5>Pays d'origine</h5>
                <input type="text" v-model="answerToEdit.firmOrigin" />
              </div>

              <div>
                <h5>Site de l'entreprise</h5>
                <input type="url" v-model="answerToEdit.firmSite" />
              </div>
              <div>
                <h5>LinkedIn</h5>
                <input type="url" v-model="answerToEdit.firmLinkedin" />
              </div>
              <div>
                <h5>Welcome To The Jungle</h5>
                <input type="url" v-model="answerToEdit.firmJungle" />
              </div>
              <div>
                <h5>Téléphone</h5>
                <input type="phone" v-model="answerToEdit.firmPhone" />
              </div>
              <div>
                <h5>Effectif</h5>
                <input type="number" v-model="answerToEdit.firmEffectif" />
              </div>
            </div>
            <div class="contact">
              <h4>CANDIDATURE</h4>

              <div class="answer">
                <div class="firstAnswer">
                  <div>
                    <h5>Date de réponse à l'offre</h5>
                    <input type="date" v-model="answerToEdit.firthDate" />
                  </div>
                  <div>
                    <h5>Date de réponse du recruteur</h5>
                    <input type="date" v-model="answerToEdit.answerDate" />
                  </div>
                  <div>
                    <h5>Réponse du recruteur</h5>
                    <textarea v-model="answerToEdit.txtAnswer" />
                  </div>
                </div>
                <div class="relance">
                  <div>
                    <h5>Date de relance</h5>
                    <input type="date" v-model="answerToEdit.relanceDate" />
                    <p>{{ answerToEdit.relanceDate }}</p>
                  </div>
                  <div>
                    <h5>Date de réponse à la relance</h5>
                    <input
                      type="date"
                      v-model="answerToEdit.answerRelanceDate"
                    />
                  </div>
                  <div>
                    <h5>Réponse suite à relance</h5>
                    <textarea v-model="answerToEdit.txtRelanceAnswer" />
                  </div>
                  <div>
                    <h5>Commentaires</h5>
                    <textarea v-model="answerToEdit.comment" />
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
                    <input type="text" v-model="answerToEdit.staff1Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="answerToEdit.staff1Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input type="url" v-model="answerToEdit.staff1Linkedin" />
                    <p>{{ answerToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="answerToEdit.staff1Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input type="phone" v-model="answerToEdit.staff1Phone" />
                  </div>
                </div>
                <div class="line"></div>
                <div class="second-staff">
                  <h5>Contact n°1</h5>
                  <div>
                    <h6>Nom</h6>
                    <input type="text" v-model="answerToEdit.staff2Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="answerToEdit.staff2Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input type="url" v-model="answerToEdit.staff2Linkedin" />
                    <p>{{ answerToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="answerToEdit.staff2Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input type="phone" v-model="answerToEdit.staff2Phone" />
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
  name: "AnswerModal",
  emits: ["updateanswer", "cancel"],
  props: {
    answer: {
      require: true,
    },
  },
  setup(props, context) {
    let answerToEdit = ref({ ...props.answer });

    function saveAnswer() {
      const answerUpdated = {
        id: answerToEdit.value.id,
        jobName: answerToEdit.value.jobName,
        jobLink: answerToEdit.value.jobLink,
        jobType: answerToEdit.value.jobType,
        jobLocation: answerToEdit.value.jobLocation,
        jobPay: answerToEdit.value.jobPay,
        firmName: answerToEdit.value.firmName,
        firmType: answerToEdit.value.firmType,
        firmOrigin: answerToEdit.value.firmOrigin,
        firmSite: answerToEdit.value.firmSite,
        firmLinkedin: answerToEdit.value.firmLinkedin,
        firmJungle: answerToEdit.value.firmJungle,
        firmPhone: answerToEdit.value.firmPhone,
        firmEffectif: answerToEdit.value.firmEffectif,
        firthDate: answerToEdit.value.firthDate,
        answerDate: answerToEdit.value.answerDate,
        txtAnswer: answerToEdit.value.txtAnswer,
        relanceDate: answerToEdit.value.relanceDate,
        answerRelanceDate: answerToEdit.value.answerRelanceDate,
        txtRelanceAnswer: answerToEdit.value.txtRelanceAnswer,
        comment: answerToEdit.value.comment,
        staff1Name: answerToEdit.value.staff1Name,
        staff1Job: answerToEdit.value.staff1Job,
        staff1Linkedin: answerToEdit.value.staff1Linkedin,
        staff1Mail: answerToEdit.value.staff1Mail,
        staff1Phone: answerToEdit.value.staff1Phone,
        staff2Name: answerToEdit.value.staff2Name,
        staff2Job: answerToEdit.value.staff2Job,
        staff2Linkedin: answerToEdit.value.staff2Linkedin,
        staff2Mail: answerToEdit.value.staff2Mail,
        staff2Phone: answerToEdit.value.staff2Phone,
      };
      console.log("answerUpdated", answerUpdated);
      context.emit("updateanswer", answerUpdated);
      window.scrollTo({ top: 0 });
    }
    function cancel() {
      context.emit("cancel");
      window.scrollTo({ top: 0 });
    }
    const isFormValid = computed(() => {
      if (
        answerToEdit.value.jobName.length > 1 &&
        answerToEdit.value.jobLink.length > 1
      ) {
        return true;
      } else {
        return false;
      }
    });
    return {
      answerToEdit,
      saveAnswer,
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
