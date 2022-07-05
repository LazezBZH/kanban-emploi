<template>
  <div class="modal-background">
    <div class="modal">
      <div>
        <h2>Modifier cette fiche</h2>
        <button class="top-btn" @click="cancel">&#128473;</button>
        <form @submit.prevent="saveSpontaneous">
          <div class="spontaneous">
            <div class="firm">
              <h4>ENTREPRISE</h4>

              <div>
                <h5>Nom de l'entreprise</h5>
                <input type="text" v-model="spontaneousToEdit.firmName" />
              </div>
              <div>
                <h5>Type d'entreprise</h5>
                <input type="text" v-model="spontaneousToEdit.firmType" />
              </div>
              <div>
                <h5>Pays d'origine</h5>
                <input type="text" v-model="spontaneousToEdit.firmOrigin" />
              </div>

              <div>
                <h5>Site de l'entreprise</h5>
                <input type="url" v-model="spontaneousToEdit.firmSite" />
              </div>
              <div>
                <h5>LinkedIn</h5>
                <input type="url" v-model="spontaneousToEdit.firmLinkedin" />
              </div>
              <div>
                <h5>Welcome To The Jungle</h5>
                <input type="url" v-model="spontaneousToEdit.firmJungle" />
              </div>
              <div>
                <h5>Téléphone</h5>
                <input type="phone" v-model="spontaneousToEdit.firmPhone" />
              </div>
              <div>
                <h5>Effectif</h5>
                <input type="number" v-model="spontaneousToEdit.firmEffectif" />
              </div>
            </div>
            <div class="contact">
              <h4>CANDIDATURE</h4>

              <div class="answer">
                <div class="firstAnswer">
                  <div>
                    <h5>Date de réponse à l'offre</h5>
                    <input type="date" v-model="spontaneousToEdit.firthDate" />
                  </div>
                  <div>
                    <h5>Date de réponse du recruteur</h5>
                    <input type="date" v-model="spontaneousToEdit.answerDate" />
                  </div>
                  <div>
                    <h5>Réponse du recruteur</h5>
                    <textarea v-model="spontaneousToEdit.txtAnswer" />
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
                    <input type="text" v-model="spontaneousToEdit.staff1Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="spontaneousToEdit.staff1Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input
                      type="url"
                      v-model="spontaneousToEdit.staff1Linkedin"
                    />
                    <p>{{ spontaneousToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="spontaneousToEdit.staff1Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input
                      type="phone"
                      v-model="spontaneousToEdit.staff1Phone"
                    />
                  </div>
                </div>
                <div class="line"></div>
                <div class="second-staff">
                  <h5>Contact n°1</h5>
                  <div>
                    <h6>Nom</h6>
                    <input type="text" v-model="spontaneousToEdit.staff2Name" />
                  </div>
                  <div>
                    <h6>Fonction</h6>
                    <input type="text" v-model="spontaneousToEdit.staff2Job" />
                  </div>
                  <div>
                    <h6>LinkedIn</h6>
                    <input
                      type="url"
                      v-model="spontaneousToEdit.staff2Linkedin"
                    />
                    <p>{{ spontaneousToEdit.staff1Linkedin }}</p>
                  </div>
                  <div>
                    <h6>Mail</h6>
                    <input type="mail" v-model="spontaneousToEdit.staff2Mail" />
                  </div>
                  <div>
                    <h6>Téléphone</h6>
                    <input
                      type="phone"
                      v-model="spontaneousToEdit.staff2Phone"
                    />
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
  name: "SpontaneousModal",
  emits: ["updatespontaneous", "cancel"],
  props: {
    sponta: {
      require: true,
    },
  },

  setup(props, context) {
    let spontaneousToEdit = ref({ ...props.sponta });

    function saveSpontaneous() {
      const spontaneousUpdated = {
        id: spontaneousToEdit.value.id,
        firmName: spontaneousToEdit.value.firmName,
        firmType: spontaneousToEdit.value.firmType,
        firmOrigin: spontaneousToEdit.value.firmOrigin,
        firmSite: spontaneousToEdit.value.firmSite,
        firmLinkedin: spontaneousToEdit.value.firmLinkedin,
        firmJungle: spontaneousToEdit.value.firmJungle,
        firmPhone: spontaneousToEdit.value.firmPhone,
        firmEffectif: spontaneousToEdit.value.firmEffectif,
        firthDate: spontaneousToEdit.value.firthDate,
        answerDate: spontaneousToEdit.value.answerDate,
        txtAnswer: spontaneousToEdit.value.txtAnswer,
        comment: spontaneousToEdit.value.comment,
        staff1Name: spontaneousToEdit.value.staff1Name,
        staff1Job: spontaneousToEdit.value.staff1Job,
        staff1Linkedin: spontaneousToEdit.value.staff1Linkedin,
        staff1Mail: spontaneousToEdit.value.staff1Mail,
        staff1Phone: spontaneousToEdit.value.staff1Phone,
        staff2Name: spontaneousToEdit.value.staff2Name,
        staff2Job: spontaneousToEdit.value.staff2Job,
        staff2Linkedin: spontaneousToEdit.value.staff2Linkedin,
        staff2Mail: spontaneousToEdit.value.staff2Mail,
        staff2Phone: spontaneousToEdit.value.staff2Phone,
        list: spontaneousToEdit.value.list,
      };
      console.log("spontaneousUpdated", spontaneousUpdated);
      context.emit("updatespontaneous", spontaneousUpdated);
    }
    function cancel() {
      context.emit("cancel");
      window.scrollTo({ top: 0 });
    }
    const isFormValid = computed(() => {
      if (spontaneousToEdit.value.firmName.length > 1) {
        return true;
      } else {
        return false;
      }
    });
    return {
      spontaneousToEdit,
      saveSpontaneous,
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
.spontaneous {
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
  color: rgb(137, 83, 13);
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
