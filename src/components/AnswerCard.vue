<template>
  <div class="card-answer">
    <div class="card-title-answer">
      <img src="@/assets/answer.jpg" alt="" />
      <h3>Réponse à une annonce</h3>
      <div
        v-if="
          answer.jobType == '' ||
          answer.jobLocation == '' ||
          answer.jobPay == '' ||
          answer.jobPay == '' ||
          answer.firmName == '' ||
          answer.firmType == '' ||
          answer.firmOrigin == '' ||
          answer.firmSite == '' ||
          answer.firmLinkedin == '' ||
          answer.firmJungle == '' ||
          answer.firmPhone == '' ||
          answer.firmEffectif == '' ||
          answer.firthDate == '' ||
          answer.answerDate == '' ||
          answer.txtAnswer == '' ||
          answer.relanceDate == '' ||
          answer.txtRelanceAnswer == '' ||
          answer.answerRelanceDate == '' ||
          answer.comment == '' ||
          answer.staff1Name !== '' ||
          answer.staff1Job !== '' ||
          answer.staff1Linkedin !== '' ||
          answer.staff1Mail !== '' ||
          answer.staff1Phone !== ''
        "
      >
        <p class="complete-all">* à compléter</p>
      </div>
    </div>

    <div class="answer-all">
      <div class="job">
        <h4>OFFRE</h4>
        <div
          v-if="
            answer.jobType == '' ||
            answer.jobLocation == '' ||
            answer.jobPay == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <h5>Intitulé du poste</h5>
        <p>{{ answer.jobName }}</p>
        <h5>Lien</h5>
        <a :href="answer.jobLink" target="_blank">Lien vers l'annonce</a>

        <div v-if="answer.jobType !== ''">
          <h5>Type de poste</h5>
          <p>{{ answer.jobType }}</p>
        </div>
        <div v-if="answer.jobLocation !== ''">
          <h5>Lieu d'emploi</h5>
          <p>{{ answer.jobLocation }}</p>
        </div>

        <div v-if="answer.jobPay !== ''">
          <h5>Salaire annuel</h5>
          <p>{{ answer.jobPay }}</p>
        </div>
      </div>
      <div class="firm">
        <h4>ENTREPRISE</h4>
        <div
          v-if="
            answer.firmName == '' ||
            answer.firmType == '' ||
            answer.firmOrigin == '' ||
            answer.firmSite == '' ||
            answer.firmLinkedin == '' ||
            answer.firmJungle == '' ||
            answer.firmEffectif == '' ||
            answer.firmPhone == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div v-if="answer.firmName !== ''">
          <h5>Nom de l'entreprise</h5>
          <p>{{ answer.firmName }}</p>
        </div>
        <div v-if="answer.firmType !== ''">
          <h5>Type d'entreprise</h5>
          <p>{{ answer.firmType }}</p>
        </div>
        <div v-if="answer.firmOrigin !== ''">
          <h5>Pays d'origine</h5>
          <p>{{ answer.firmOrigin }}</p>
        </div>

        <div v-if="answer.firmSite !== ''">
          <h5>Site de l'entreprise</h5>
          <a :href="answer.firmSite" target="_blank"
            >Lien site de l'entreprise</a
          >
        </div>
        <div v-if="answer.firmLinkedin !== ''">
          <h5>LinkedIn</h5>
          <a :href="answer.firmLinkedin" target="_blank"
            >Linkedin de l'entreprise</a
          >
        </div>
        <div v-if="answer.firmJungle !== ''">
          <h5>Welcome To The Jungle</h5>
          <a :href="answer.firmJungle" target="_blank">WTJ de l'entreprise</a>
        </div>
        <div v-if="answer.firmPhone !== ''">
          <h5>Téléphone</h5>
          <a :href="'tel:' + answer.firmPhone">{{ answer.firmPhone }}</a>
          <p></p>
        </div>
        <div v-if="answer.firmEffectif !== ''">
          <h5>Effectif</h5>
          <p>{{ answer.firmEffectif }}</p>
        </div>
      </div>
      <div class="contact">
        <h4>CANDIDATURE</h4>
        <div
          v-if="
            answer.firthDate == '' ||
            answer.answerDate == '' ||
            answer.txtAnswer == '' ||
            answer.relanceDate == '' ||
            answer.txtRelanceAnswer == '' ||
            answer.answerRelanceDate == '' ||
            answer.comment == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div class="answer">
          <div class="firstAnswer">
            <div v-if="answer.firthDate !== ''">
              <h5>Date de réponse à l'offre</h5>
              <p>{{ answer.firthDate }}</p>
            </div>
            <div v-if="answer.answerDate !== ''">
              <h5>Date de réponse du recruteur</h5>
              <p>{{ answer.answerDate }}</p>
            </div>
            <div v-if="answer.txtAnswer !== ''">
              <h5>Réponse du recruteur</h5>
              <p>{{ answer.txtAnswer }}</p>
            </div>
          </div>
          <div class="relance">
            <div v-if="answer.relanceDate !== ''">
              <h5>Date de relance</h5>
              <p>{{ answer.relanceDate }}</p>
            </div>
            <div v-if="answer.answerRelanceDate !== ''">
              <h5>Date de réponse à la relance</h5>
              <p>{{ answer.answerRelanceDate }}</p>
            </div>
            <div v-if="answer.txtRelanceAnswer !== ''">
              <h5>Réponse suite à relance</h5>
              <p>{{ answer.txtRelanceAnswer }}</p>
            </div>
            <div v-if="answer.comment !== ''">
              <h5>Commentaires</h5>
              <p>{{ answer.comment }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="staffs">
        <h4>CONTACTS</h4>
        <div
          v-if="
            answer.staff1Name == '' ||
            answer.staff1Job == '' ||
            answer.staff1Mail == '' ||
            answer.staff1Job == '' ||
            answer.staff1Phone == '' ||
            answer.staff2Name == '' ||
            answer.staff2Job == '' ||
            answer.staff2Mail == '' ||
            answer.staff2Job == '' ||
            answer.staff2Phone == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div class="staff">
          <div
            class="firth-staff"
            v-if="
              answer.staff1Name !== '' ||
              answer.staff1Job !== '' ||
              answer.staff1Linkedin !== '' ||
              answer.staff1Mail !== '' ||
              answer.staff1Phone !== ''
            "
          >
            <h5>Contact n°1</h5>
            <div v-if="answer.staff1Name !== ''">
              <h6>Nom</h6>
              <p>{{ answer.staff1Name }}</p>
            </div>
            <div v-if="answer.staff1Job !== ''">
              <h6>Fonction</h6>
              <p>{{ answer.staff1Job }}</p>
            </div>
            <div v-if="answer.staff1Linkedin !== ''">
              <h6>LinkedIn</h6>
              <a :href="answer.staff1Linkedin">LinkedIn</a>
            </div>
            <div v-if="answer.staff1Mail !== ''">
              <h6>Mail</h6>
              <a :href="'mailto:' + answer.staff1Mail"> Mail </a>
            </div>
            <div v-if="answer.staff1Phone !== ''">
              <h6>Téléphone</h6>
              <a :href="'tel:' + answer.staff1Phone">Tél</a>
            </div>
          </div>
          <div class="line"></div>
          <div
            class="second-staff"
            v-if="
              answer.staff2Name !== '' ||
              answer.staff2Job !== '' ||
              answer.staff2Linkedin !== '' ||
              answer.staff2Mail !== '' ||
              answer.staff2Phone !== ''
            "
          >
            <h5>Contact n°2</h5>
            <div v-if="answer.staff2Name !== ''">
              <h6>Nom</h6>
              <p>{{ answer.staff2Name }}</p>
            </div>
            <div v-if="answer.staff2Job !== ''">
              <h6>Fonction</h6>
              <p>{{ answer.staff2Job }}</p>
            </div>
            <div v-if="answer.staff2Linkedin !== ''">
              <h6>LinkedIn</h6>
              <a :href="answer.staff2Linkedin">LinkedIn</a>
            </div>
            <div v-if="answer.staff2Mail !== ''">
              <h6>Mail</h6>
              <a :href="'mailto:' + answer.staff2Mail"> Mail </a>
            </div>
            <div v-if="answer.staff2Phone !== ''">
              <h6>Téléphone</h6>
              <a :href="'tel:' + answer.staff2Phone">Tél</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnswerCard",

  props: {
    answer: Object,
  },
};
</script>

<style scoped>
.answer-all {
  height: 15rem;
  overflow-y: scroll;
  overflow-x: auto;
  word-wrap: break-word;
  background-color: white;
}
.answer-all::-webkit-scrollbar {
  width: 0.5rem;
  background-color: rgb(231, 230, 230);
}
.answer-all::-webkit-scrollbar-thumb {
  background: rgba(72, 93, 33, 0.7);
  border-radius: 2rem;
}
.answer-all::-webkit-scrollbar-button {
  border-style: none;
  height: 2rem;
}
.answer-all::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  border-radius: 2rem;
}
img {
  height: 3rem;
}
h3 {
  color: rgb(72, 93, 33);
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 0;
}
h4 {
  color: purple;
  font-size: 1.3rem;
  margin-bottom: 0;
}
h5 {
  color: #99c24dff;
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
