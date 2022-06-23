<template>
  <SpontaneousModal
    v-if="isInEditMode"
    :sponta="spontaneousToEdit"
    @updatespontaneous="updateSpontaneous($event)"
    @cancel="cancelEdit"
  />

  <div v-if="spontaneous.length > 0">
    <div class="spontaneous" v-for="sponta in spontaneous" :key="sponta.id">
      <div class="card-spontaneous">
        <div class="card-title-spontaneous">
          <img src="@/assets/spontaneous.jpg" alt="" />
          <h3>Candidature spontanée</h3>
          <div
            v-if="
              sponta.firmName == '' ||
              sponta.firmType == '' ||
              sponta.firmOrigin == '' ||
              sponta.firmSite == '' ||
              sponta.firmLinkedin == '' ||
              sponta.firmJungle == '' ||
              sponta.firmPhone == '' ||
              sponta.firmEffectif == '' ||
              sponta.firthDate == '' ||
              sponta.answerDate == '' ||
              sponta.txtAnswer == '' ||
              sponta.comment == '' ||
              sponta.staff1Name !== '' ||
              sponta.staff1Job !== '' ||
              sponta.staff1Linkedin !== '' ||
              sponta.staff1Mail !== '' ||
              sponta.staff1Phone !== ''
            "
          >
            <p class="complete-all">* à compléter</p>
          </div>
        </div>

        <div class="sponta">
          <div class="firm">
            <h4>ENTREPRISE</h4>
            <div
              v-if="
                sponta.firmName == '' ||
                sponta.firmType == '' ||
                sponta.firmOrigin == '' ||
                sponta.firmSite == '' ||
                sponta.firmLinkedin == '' ||
                sponta.firmJungle == '' ||
                sponta.firmEffectif == '' ||
                sponta.firmPhone == ''
              "
            >
              <p class="complete">* à compléter</p>
            </div>
            <div v-if="sponta.firmName !== ''">
              <h5>Nom de l'entreprise</h5>
              <p>{{ sponta.firmName }}</p>
            </div>
            <div v-if="sponta.firmType !== ''">
              <h5>Type d'entreprise</h5>
              <p>{{ sponta.firmType }}</p>
            </div>
            <div v-if="sponta.firmOrigin !== ''">
              <h5>Pays d'origine</h5>
              <p>{{ sponta.firmOrigin }}</p>
            </div>

            <div v-if="sponta.firmSite !== ''">
              <h5>Site de l'entreprise</h5>
              <p>{{ sponta.firmSite }}</p>
            </div>
            <div v-if="sponta.firmLinkedin !== ''">
              <h5>LinkedIn</h5>
              <p>{{ sponta.firmLinkedin }}</p>
            </div>
            <div v-if="sponta.firmJungle !== ''">
              <h5>Welcome To The Jungle</h5>
              <p>{{ sponta.firmJungle }}</p>
            </div>
            <div v-if="sponta.firmPhone !== ''">
              <h5>Téléphone</h5>
              <p>{{ sponta.firmPhone }}</p>
            </div>
            <div v-if="sponta.firmEffectif !== ''">
              <h5>Effectif</h5>
              <p>{{ sponta.firmEffectif }}</p>
            </div>
          </div>
          <div class="contact">
            <h4>SUIVI</h4>
            <div
              v-if="
                sponta.firthDate == '' ||
                sponta.answerDate == '' ||
                sponta.txtAnswer == '' ||
                sponta.comment == ''
              "
            >
              <p class="complete">* à compléter</p>
            </div>
            <div class="answer">
              <div class="firstAnswer">
                <div v-if="sponta.firthDate !== ''">
                  <h5>Date de réponse à l'offre</h5>
                  <p>{{ sponta.firthDate }}</p>
                </div>
                <div v-if="sponta.answerDate !== ''">
                  <h5>Date de réponse du recruteur</h5>
                  <p>{{ sponta.answerDate }}</p>
                </div>
                <div v-if="sponta.txtAnswer !== ''">
                  <h5>Réponse du recruteur</h5>
                  <p>{{ sponta.txtAnswer }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="staffs">
            <h4>CONTACTS</h4>
            <div
              v-if="
                sponta.staff1Name == '' ||
                sponta.staff1Job == '' ||
                sponta.staff1Mail == '' ||
                sponta.staff1Job == '' ||
                sponta.staff1Phone == '' ||
                sponta.staff2Name == '' ||
                sponta.staff2Job == '' ||
                sponta.staff2Mail == '' ||
                sponta.staff2Job == '' ||
                sponta.staff2Phone == ''
              "
            >
              <p class="complete">* à compléter</p>
            </div>
            <div class="staff">
              <div
                class="firth-staff"
                v-if="
                  sponta.staff1Name !== '' ||
                  sponta.staff1Job !== '' ||
                  sponta.staff1Linkedin !== '' ||
                  sponta.staff1Mail !== '' ||
                  sponta.staff1Phone !== ''
                "
              >
                <h5>Contact n°1</h5>
                <div v-if="sponta.staff1Name !== ''">
                  <h6>Nom</h6>
                  <p>{{ sponta.staff1Name }}</p>
                </div>
                <div v-if="sponta.staff1Job !== ''">
                  <h6>Fonction</h6>
                  <p>{{ sponta.staff1Job }}</p>
                </div>
                <div v-if="sponta.staff1Linkedin !== ''">
                  <h6>LinkedIn</h6>
                  <p>{{ sponta.staff1Linkedin }}</p>
                </div>
                <div v-if="sponta.staff1Mail !== ''">
                  <h6>Mail</h6>
                  <p>{{ sponta.staff1Mail }}</p>
                </div>
                <div v-if="sponta.staff1Phone !== ''">
                  <h6>Téléphone</h6>
                  <p>{{ sponta.staff1Phone }}</p>
                </div>
              </div>
              <div class="line"></div>
              <div
                class="second-staff"
                v-if="
                  sponta.staff2Name !== '' ||
                  sponta.staff2Job !== '' ||
                  sponta.staff2Linkedin !== '' ||
                  sponta.staff2Mail !== '' ||
                  sponta.staff2Phone !== ''
                "
              >
                <h5>Contact n°2</h5>
                <div v-if="sponta.staff2Name !== ''">
                  <h6>Nom</h6>
                  <p>{{ sponta.staff2Name }}</p>
                </div>
                <div v-if="sponta.staff2Job !== ''">
                  <h6>Fonction</h6>
                  <p>{{ sponta.staff2Job }}</p>
                </div>
                <div v-if="sponta.staff2Linkedin !== ''">
                  <h6>LinkedIn</h6>
                  <p>{{ sponta.staff2Linkedin }}</p>
                </div>
                <div v-if="sponta.staff2Mail !== ''">
                  <h6>Mail</h6>
                  <p>{{ sponta.staff2Mail }}</p>
                </div>
                <div v-if="sponta.staff2Phone !== ''">
                  <h6>Téléphone</h6>
                  <p>{{ sponta.staff2Phone }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="() => deleteSpontaneous(sponta.id)">Supprimer</button>
      <button @click="() => toggle(sponta)">Modifier</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import spontaneousService from "@/services/spontaneous.js";
import SpontaneousModal from "./SpontaneousModal.vue";
export default {
  name: "SpontaneousView",
  components: {
    SpontaneousModal,
  },
  setup() {
    const spontaneous = ref([]);

    let isInEditMode = ref(false);
    let spontaneousToEdit = ref(null);
    spontaneous.value = spontaneousService.read();

    function toggle(sponta) {
      spontaneousToEdit.value = sponta;
      isInEditMode.value = true;
      window.scrollTo({ top: 0 });
    }
    function updateSpontaneous(sponta) {
      console.log("updatesponta", sponta);
      spontaneousService.updateSpont(sponta);
      spontaneous.value = spontaneousService.read();
      cancelEdit();
    }
    function cancelEdit() {
      isInEditMode.value = false;
      spontaneousToEdit.value = null;
    }
    function deleteSpontaneous(id) {
      spontaneousService.deleteSpont(id);
      spontaneous.value = spontaneousService.read();
    }

    return {
      spontaneous,
      deleteSpontaneous,
      isInEditMode,
      spontaneousToEdit,
      toggle,
      updateSpontaneous,
      cancelEdit,
    };
  },
};
</script>

<style scoped>
.spontaneous {
  width: 23%;
  margin: 0.5rem auto;
  border: 0.3rem solid rgb(137, 83, 13);
  border-radius: 1rem;
  background-color: rgb(231, 230, 230);
}
.sponta {
  height: 15rem;
  overflow: scroll;
  background-color: white;
  margin: 0.2rem;
}

img {
  height: 5rem;
}
h3 {
  color: rgb(137, 83, 13);
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 0;
}
h4 {
  color: rgb(215, 65, 65);
  font-size: 1.3rem;
  margin-bottom: 0;
}
h5 {
  color: rgb(185, 119, 34);
  font-size: 1.1rem;
  margin: 1rem auto 0 0.3rem;
  text-align: left;
}
h6 {
  color: rgb(181, 119, 4);
  font-size: 0.9rem;
}
p {
  font-size: 0.8rem;
  margin: 0.5rem 0.1rem;
  text-align: left;
}
button {
  margin: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background: #99c24dff;
  color: white;
  padding: 0.4rem;
  cursor: pointer;
}
.complete {
  color: red;
  font-size: 0.5rem;
  text-align: right;
  margin-right: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
}
.complete:hover {
  font-size: 1rem;
  margin-bottom: -0.55rem;
}
.complete-all {
  color: red;
  font-size: 0.7rem;
  text-align: right;
  margin-right: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
