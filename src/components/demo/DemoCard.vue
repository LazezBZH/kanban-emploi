<template>
  <div class="card-demo">
    <div class="card-title-demo">
      <img src="@/assets/answer.jpg" alt="" />
      <h3>Réponse à une annonce</h3>
      <div
        v-if="
          demo.jobType == '' ||
          demo.jobLocation == '' ||
          demo.jobPay == '' ||
          demo.jobPay == '' ||
          demo.firmName == '' ||
          demo.firmType == '' ||
          demo.firmOrigin == '' ||
          demo.firmSite == '' ||
          demo.firmLinkedin == '' ||
          demo.firmJungle == '' ||
          demo.firmPhone == '' ||
          demo.firmEffectif == '' ||
          demo.firthDate == '' ||
          demo.answerDate == '' ||
          demo.txtAnswer == '' ||
          demo.relanceDate == '' ||
          demo.txtRelanceAnswer == '' ||
          demo.answerRelanceDate == '' ||
          demo.comment == '' ||
          demo.staff1Name !== '' ||
          demo.staff1Job !== '' ||
          demo.staff1Linkedin !== '' ||
          demo.staff1Mail !== '' ||
          demo.staff1Phone !== ''
        "
      >
        <p class="complete-all">* à compléter</p>
      </div>
    </div>

    <div class="demo-all">
      <div class="job">
        <h4>OFFRE</h4>
        <div
          v-if="
            demo.jobType == '' || demo.jobLocation == '' || demo.jobPay == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <h5>Intitulé du poste</h5>
        <p>{{ demo.jobName }}</p>
        <h5>Lien</h5>
        <a :href="demo.jobLink" target="_blank">Lien vers l'annonce</a>

        <div v-if="demo.jobType !== ''">
          <h5>Type de poste</h5>
          <p>{{ demo.jobType }}</p>
        </div>
        <div v-if="demo.jobLocation !== ''">
          <h5>Lieu d'emploi</h5>
          <p>{{ demo.jobLocation }}</p>
        </div>

        <div v-if="demo.jobPay !== ''">
          <h5>Salaire annuel</h5>
          <p>{{ demo.jobPay }}</p>
        </div>
      </div>
      <div class="firm">
        <h4>ENTREPRISE</h4>
        <div
          v-if="
            demo.firmName == '' ||
            demo.firmType == '' ||
            demo.firmOrigin == '' ||
            demo.firmSite == '' ||
            demo.firmLinkedin == '' ||
            demo.firmJungle == '' ||
            demo.firmEffectif == '' ||
            demo.firmPhone == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div v-if="demo.firmName !== ''">
          <h5>Nom de l'entreprise</h5>
          <p>{{ demo.firmName }}</p>
        </div>
        <div v-if="demo.firmType !== ''">
          <h5>Type d'entreprise</h5>
          <p>{{ demo.firmType }}</p>
        </div>
        <div v-if="demo.firmOrigin !== ''">
          <h5>Pays d'origine</h5>
          <p>{{ demo.firmOrigin }}</p>
        </div>

        <div v-if="demo.firmSite !== ''">
          <h5>Site de l'entreprise</h5>
          <a :href="demo.firmSite" target="_blank">Lien site de l'entreprise</a>
        </div>
        <div v-if="demo.firmLinkedin !== ''">
          <h5>LinkedIn</h5>
          <a :href="demo.firmLinkedin" target="_blank"
            >Linkedin de l'entreprise</a
          >
        </div>
        <div v-if="demo.firmJungle !== ''">
          <h5>Welcome To The Jungle</h5>
          <a :href="demo.firmJungle" target="_blank">WTJ de l'entreprise</a>
        </div>
        <div v-if="demo.firmPhone !== ''">
          <h5>Téléphone</h5>
          <a :href="'tel:' + demo.firmPhone">{{ demo.firmPhone }}</a>
          <p></p>
        </div>
        <div v-if="demo.firmEffectif !== ''">
          <h5>Effectif</h5>
          <p>{{ demo.firmEffectif }}</p>
        </div>
      </div>
      <div class="contact">
        <h4>CANDIDATURE</h4>
        <div
          v-if="
            demo.firthDate == '' ||
            demo.answerDate == '' ||
            demo.txtAnswer == '' ||
            demo.relanceDate == '' ||
            demo.txtRelanceAnswer == '' ||
            demo.answerRelanceDate == '' ||
            demo.comment == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div class="answer">
          <div class="firstAnswer">
            <div v-if="demo.firthDate !== ''">
              <h5>Date de réponse à l'offre</h5>
              <p>{{ demo.firthDate }}</p>
            </div>
            <div v-if="demo.answerDate !== ''">
              <h5>Date de réponse du recruteur</h5>
              <p>{{ demo.answerDate }}</p>
            </div>
            <div v-if="demo.txtAnswer !== ''">
              <h5>Réponse du recruteur</h5>
              <p>{{ demo.txtAnswer }}</p>
            </div>
          </div>
          <div class="relance">
            <div v-if="demo.relanceDate !== ''">
              <h5>Date de relance</h5>
              <p>{{ demo.relanceDate }}</p>
            </div>
            <div v-if="demo.answerRelanceDate !== ''">
              <h5>Date de réponse à la relance</h5>
              <p>{{ demo.answerRelanceDate }}</p>
            </div>
            <div v-if="demo.txtRelanceAnswer !== ''">
              <h5>Réponse suite à relance</h5>
              <p>{{ demo.txtRelanceAnswer }}</p>
            </div>
            <div v-if="demo.comment !== ''">
              <h5>Commentaires</h5>
              <p>{{ demo.comment }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="staffs">
        <h4>CONTACTS</h4>
        <div
          v-if="
            demo.staff1Name == '' ||
            demo.staff1Job == '' ||
            demo.staff1Mail == '' ||
            demo.staff1Job == '' ||
            demo.staff1Phone == '' ||
            demo.staff2Name == '' ||
            demo.staff2Job == '' ||
            demo.staff2Mail == '' ||
            demo.staff2Job == '' ||
            demo.staff2Phone == ''
          "
        >
          <p class="complete">* à compléter</p>
        </div>
        <div class="staff">
          <div
            class="firth-staff"
            v-if="
              demo.staff1Name !== '' ||
              demo.staff1Job !== '' ||
              demo.staff1Linkedin !== '' ||
              demo.staff1Mail !== '' ||
              demo.staff1Phone !== ''
            "
          >
            <h5>Contact n°1</h5>
            <div v-if="demo.staff1Name !== ''">
              <h6>Nom</h6>
              <p>{{ demo.staff1Name }}</p>
            </div>
            <div v-if="demo.staff1Job !== ''">
              <h6>Fonction</h6>
              <p>{{ demo.staff1Job }}</p>
            </div>
            <div v-if="demo.staff1Linkedin !== ''">
              <h6>LinkedIn</h6>
              <a :href="demo.staff1Linkedin">LinkedIn</a>
            </div>
            <div v-if="demo.staff1Mail !== ''">
              <h6>Mail</h6>
              <a :href="'mailto:' + demo.staff1Mail"> Mail </a>
            </div>
            <div v-if="demo.staff1Phone !== ''">
              <h6>Téléphone</h6>
              <a :href="'tel:' + demo.staff1Phone">Tél</a>
            </div>
          </div>
          <div class="line"></div>
          <div
            class="second-staff"
            v-if="
              demo.staff2Name !== '' ||
              demo.staff2Job !== '' ||
              demo.staff2Linkedin !== '' ||
              demo.staff2Mail !== '' ||
              demo.staff2Phone !== ''
            "
          >
            <h5>Contact n°2</h5>
            <div v-if="demo.staff2Name !== ''">
              <h6>Nom</h6>
              <p>{{ demo.staff2Name }}</p>
            </div>
            <div v-if="demo.staff2Job !== ''">
              <h6>Fonction</h6>
              <p>{{ demo.staff2Job }}</p>
            </div>
            <div v-if="demo.staff2Linkedin !== ''">
              <h6>LinkedIn</h6>
              <a :href="demo.staff2Linkedin">LinkedIn</a>
            </div>
            <div v-if="demo.staff2Mail !== ''">
              <h6>Mail</h6>
              <a :href="'mailto:' + demo.staff2Mail"> Mail </a>
            </div>
            <div v-if="demo.staff2Phone !== ''">
              <h6>Téléphone</h6>
              <a :href="'tel:' + demo.staff2Phone">Tél</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoCard",

  props: {
    demo: Object,
  },
};
</script>

<style scoped>
.demo-all {
  height: 15rem;
  overflow-y: scroll;
  overflow-x: auto;
  word-wrap: break-word;
  background-color: white;
}
.demo-all::-webkit-scrollbar {
  width: 0.5rem;
  background-color: rgb(231, 230, 230);
}
.demo-all::-webkit-scrollbar-thumb {
  background: rgba(143, 45, 45, 0.7);
  border-radius: 2rem;
}
.demo-all::-webkit-scrollbar-button {
  border-style: none;
  height: 2rem;
}
.demo-all::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  box-shadow: inset 0 0 6px rgba(72, 93, 33, 0.3);
  border-radius: 2rem;
}
img {
  height: 3.5rem;
}
h3 {
  color: rgb(143, 45, 45);
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
  color: rgb(241, 61, 61);
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
