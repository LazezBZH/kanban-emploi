<template>
  <DemoModal
    v-if="isInEditMode"
    :demo="demoToEdit"
    @updatedemo="updateDemo($event)"
    @cancel="cancelEdit"
  />

  <DemoForm
    v-bind:revelebis3="revelebis3"
    v-bind:toggleDemoForm="toggleDemoForm"
    @createdemo="addDemo"
  />
  <div class="demo-btn">
    <div class="refresh">
      <button @click="refresh">
        <h2>
          <span class="clic">Cliquez ici</span> si les fiches pré-enregistrées
          ne s'affichent pas à l'ouverture de la page. Vous pourrez ensuite
          ajouter, éditer, supprimer, glisser/déposer les fiches, tout est
          stocké dans le localstorage
        </h2>
      </button>
    </div>
    <div class="formOpenBtn">
      <button class="demo-button" v-on:click="toggleDemoForm">
        Créer une fiche réponse à une offre
      </button>
    </div>
  </div>

  <div>
    <h2 class="annonces">ANNONCES</h2>
    <div class="drops">
      <div
        class="drop-zone"
        @drop="onDrop($event, 8)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Préparer réponse</h2></div>
        <div v-if="listEight.length > 0">
          <div
            v-for="demo in listEight"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <DemoCard :demo="demo" />
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 9)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse envoyée, prévoir relance</h2></div>
        <div v-if="listNine.length > 0">
          <div
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
            v-for="demo in listNine"
            :key="demo.id"
            :id="demo.id"
          >
            <DemoCard :demo="demo" />
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 10)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Relance effectuée</h2></div>
        <div v-if="listTen.length > 0">
          <div
            v-for="demo in listTen"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <DemoCard :demo="demo" />
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 11)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse reçue</h2></div>
        <div v-if="listEleven.length > 0">
          <div
            v-for="demo in listEleven"
            :key="demo.id"
            :id="demo.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, demo)"
          >
            <DemoCard :demo="demo" />
            <div class="btn">
              <button @click="() => deleteDemo(demo.id)">Supprimer</button>
              <button @click="() => toggle(demo)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import demosService from "@/services/demo.js";
import DemoModal from "./DemoModal.vue";
import DemoForm from "./DemoForm.vue";
import DemoCard from "./DemoCard.vue";

export default {
  name: "AnswerDemo",
  components: {
    DemoModal,
    DemoForm,
    DemoCard,
  },
  data() {
    const demos = ref([]);
    demos.value = demosService.read();
    console.log("test answ", demos);

    return {
      revelebis3: false,
      items: demos,
    };
  },
  computed: {
    listEight() {
      return this.items.filter((item) => item.list === 8);
    },

    listNine() {
      return this.items.filter((item) => item.list === 9);
    },
    listTen() {
      return this.items.filter((item) => item.list === 10);
    },
    listEleven() {
      return this.items.filter((item) => item.list === 11);
    },
  },

  methods: {
    refresh(event) {
      console.log(event);
      window.location.reload();
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
      demosService.updateDemMove(item);
    },
    toggleDemoForm: function () {
      this.revelebis3 = !this.revelebis3;
    },
  },

  setup() {
    const demos = ref([]);

    onMounted(() => {
      let demos = JSON.parse(localStorage.getItem("demo-vue")) || [
        {
          id: 1657017791284,
          jobName: "Développeur Front-end React",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/liksi/jobs/developpeur-front-end-react_rennes?q=50def03e336b28ce7ce7534e4e8bd141&o=1148911",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Liksi",
          firmType: "PME",
          firmOrigin: "France",
          firmSite: "https://www.liksi.fr/pages/home/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/liksi",
          firmPhone: "",
          firmEffectif: 38,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 11,
        },
        {
          id: 1657017448139,
          jobName: "Développeur Front-end Vue.js",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/liksi/jobs/developpeur-front-end-vue-js_rennes?q=50def03e336b28ce7ce7534e4e8bd141&o=1148918",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Liksi",
          firmType: "PME",
          firmOrigin: "France",
          firmSite: "https://www.liksi.fr/pages/home/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/liksi",
          firmPhone: "",
          firmEffectif: 38,
          firthDate: "2022-06-27",
          answerDate: "",
          txtAnswer: "test à passé reçu par mail le 4 juil",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 8,
        },
        {
          id: 1657017066162,
          jobName: "Développeur Confirmé Angular / ReactJS",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/niji/jobs/developpeur-confirme-angular-reactjs-h-f_rennes_NIJI_WPRyQJ0?q=50def03e336b28ce7ce7534e4e8bd141&o=937524",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "",
          firmName: "Niji",
          firmType: "",
          firmOrigin: "",
          firmSite: "https://www.niji.fr/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/niji",
          firmPhone: "",
          firmEffectif: 1000,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 8,
        },
        {
          id: 1657016496998,
          jobName: "Application Developper",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/atos/jobs/application-developer_rennes_ATOS_WQLDNkN?q=50def03e336b28ce7ce7534e4e8bd141&o=1218113",
          jobType: "CDI",
          jobLocation: "Rennes",
          jobPay: "35000",
          firmName: "Atos",
          firmType: "ESN",
          firmOrigin: "",
          firmSite: "https://atos.net/fr/",
          firmLinkedin: "",
          firmJungle: "https://www.welcometothejungle.com/fr/companies/atos",
          firmPhone: "",
          firmEffectif: 111000,
          firthDate: "",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 9,
        },
        {
          id: 1657016140891,
          jobName: "Front Development Engineer",
          jobLink:
            "https://www.welcometothejungle.com/fr/companies/actility/jobs/r-d-front-development-engineer_lannion?q=50def03e336b28ce7ce7534e4e8bd141&o=1222831",
          jobType: "CDI",
          jobLocation: "Lannion",
          jobPay: "",
          firmName: "Actility",
          firmType: "ESN",
          firmOrigin: "",
          firmSite: "https://www.actility.com/",
          firmLinkedin: "",
          firmJungle:
            "https://www.welcometothejungle.com/fr/companies/actility",
          firmPhone: "",
          firmEffectif: 111000,
          firthDate: "2022-06-07",
          answerDate: "",
          txtAnswer: "",
          relanceDate: "2022-06-30",
          answerRelanceDate: "",
          txtRelanceAnswer: "",
          comment: "",
          staff1Name: "",
          staff1Job: "",
          staff1Linkedin: "",
          staff1Mail: "",
          staff1Phone: "",
          staff2Name: "",
          staff2Job: "",
          staff2Linkedin: "",
          staff2Mail: "",
          staff2Phone: "",
          list: 10,
        },
      ];
      localStorage.setItem("demo-vue", JSON.stringify(demos));
    });
    let isInEditMode = ref(false);
    let demoToEdit = ref(null);
    demos.value = demosService.read();

    function toggle(demo) {
      demoToEdit.value = demo;
      isInEditMode.value = true;
      window.scrollTo({ top: 0 });
    }
    function updateDemo(demo) {
      console.log("updateDemo", demo);
      demosService.updateDem(demo);
      demos.value = demosService.read();

      cancelEdit();
    }
    function cancelEdit() {
      isInEditMode.value = false;
      demoToEdit.value = null;
    }
    function deleteDemo(id) {
      demosService.deleteDem(id);
      demos.value = demosService.read();
    }
    function addDemo(data) {
      console.log("coucou");
      console.log("Demo.vue | addDemo()", data);
      demosService.create(data);
    }

    return {
      demos,
      deleteDemo,
      isInEditMode,
      demoToEdit,
      toggle,
      updateDemo,
      cancelEdit,
      addDemo,
    };
  },
};
</script>
<style scoped>
.refresh button {
  width: 90%;
  background-color: rgba(255, 166, 0, 0.4);
  border: 0.3rem ridge orange;
}
.refresh h2 {
  background-color: rgba(255, 166, 0, 0.7);
  color: rgb(134, 37, 2);
  border: solid 0.5rem orange;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
.formOpenBtn button {
  padding: 1.2rem;
  margin: 0.5rem;
  border: solid rgb(242, 163, 134) 0.5rem;
  border-radius: 0.3rem;
  background: rgb(143, 45, 45);
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
}
.demo-btn {
  display: flex;
}
.clic {
  font-size: 1.5rem;
  font-weight: bolder;
  color: rgb(108, 30, 2);
}
.annonces {
  color: rgb(246, 230, 230);
  width: 94.2%;
  margin: 2rem auto auto auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  background-color: rgb(143, 45, 45);
  border: 0.3rem ridge rgb(143, 45, 45);
  border-bottom: none;
  border-radius: 2rem 2rem 0 0;
}
.drops {
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.drop-zone {
  width: 22%;
  background-color: rgb(242, 163, 134);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 0.3rem ridge rgb(242, 163, 134);
}
.entete {
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(143, 45, 45);
  border: 0.3rem ridge rgb(143, 45, 45);
  border-radius: 2rem 0;
}
.entete h2 {
  color: rgb(246, 230, 230);
  font-size: 1.2rem;
}
.drag-el {
  width: 90%;
  margin: 0.5rem auto;
  border: 0.3rem solid rgb(143, 45, 45);
  border-radius: 1rem;
  background-color: rgb(231, 230, 230);
  cursor: grab;
}
.drag-el:hover {
  border: 0.5rem solid rgb(143, 45, 45);
  background-color: rgb(229, 166, 166);
}

button {
  margin: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background: rgb(143, 45, 45);
  color: white;
  padding: 0.4rem;
  cursor: pointer;
}
</style>
