<template>
  <AnswerModal
    v-if="isInEditMode"
    :answer="answerToEdit"
    @updateanswer="updateAnswer($event)"
    @cancel="cancelEdit"
  />
  <button class="download">
    <a :href="url" download="réponses.json">Sauvegarder les réponses</a>
  </button>
  <div class="annonces-all">
    <h2 class="annonces">ANNONCES</h2>
    <div class="drops">
      <div
        class="drop-zone"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Préparer réponse</h2></div>
        <div v-if="listOne.length > 0">
          <div
            v-for="answer in listOne"
            :key="answer.id"
            :id="answer.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, answer)"
          >
            <AnswerCard :answer="answer" />
            <div class="btn">
              <button @click="() => deleteAnswer(answer.id)">Supprimer</button>
              <button @click="() => toggle(answer)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse envoyée, prévoir relance</h2></div>
        <div v-if="listTwo.length > 0">
          <div
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, answer)"
            v-for="answer in listTwo"
            :key="answer.id"
            :id="answer.id"
          >
            <AnswerCard :answer="answer" />
            <div class="btn">
              <button @click="() => deleteAnswer(answer.id)">Supprimer</button>
              <button @click="() => toggle(answer)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Relance effectuée</h2></div>
        <div v-if="listThree.length > 0">
          <div
            v-for="answer in listThree"
            :key="answer.id"
            :id="answer.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, answer)"
          >
            <AnswerCard :answer="answer" />
            <div class="btn">
              <button @click="() => deleteAnswer(answer.id)">Supprimer</button>
              <button @click="() => toggle(answer)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 4)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse reçue</h2></div>
        <div v-if="listFour.length > 0">
          <div
            v-for="answer in listFour"
            :key="answer.id"
            :id="answer.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, answer)"
          >
            <AnswerCard :answer="answer" />
            <div class="btn">
              <button @click="() => deleteAnswer(answer.id)">Supprimer</button>
              <button @click="() => toggle(answer)">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import answersService from "@/services/answer.js";
import AnswerModal from "../components/AnswerModal.vue";
import AnswerCard from "./AnswerCard.vue";

export default {
  name: "AnswerView",
  components: {
    AnswerModal,
    AnswerCard,
  },
  data() {
    const answers = ref([]);
    answers.value = answersService.read();
    console.log("test answ", answers);

    var json = JSON.stringify(answers.value, null, "\t");
    var blob = new Blob([json], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    console.log(url);

    return {
      items: answers,
      url,
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },

    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    listThree() {
      return this.items.filter((item) => item.list === 3);
    },
    listFour() {
      return this.items.filter((item) => item.list === 4);
    },
  },

  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
      answersService.updateAnsMove(item);
    },
  },
  setup() {
    const answers = ref([]);

    let isInEditMode = ref(false);
    let answerToEdit = ref(null);
    answers.value = answersService.read();

    function toggle(answer) {
      answerToEdit.value = answer;
      isInEditMode.value = true;
      window.scrollTo({ top: 0 });
    }
    function updateAnswer(answer) {
      console.log("updateAnswertest", answer);
      answersService.updateAns(answer);
      answers.value = answersService.read();

      cancelEdit();
    }
    function cancelEdit() {
      isInEditMode.value = false;
      answerToEdit.value = null;
    }
    function deleteAnswer(id) {
      answersService.deleteAns(id);
      answers.value = answersService.read();
    }

    return {
      answers,
      deleteAnswer,
      isInEditMode,
      answerToEdit,
      toggle,
      updateAnswer,
      cancelEdit,
    };
  },
};
</script>
<style scoped>
.annonces-all {
  width: 59.5%;
  margin: auto;
}
.annonces {
  color: rgb(78, 57, 57);
  margin: 2rem auto auto auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  background-color: rgb(168, 131, 131);
  border: 0.3rem ridge rgb(168, 131, 131);
  border-bottom: none;
  border-radius: 2rem 2rem 0 0;
}
.drops {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  background-color: rgb(168, 131, 131);
}
.drop-zone {
  width: 22%;
  background-color: rgb(242, 194, 194);
  margin-bottom: 1rem;
  padding: 0.5%;
  border: 0.3rem ridge rgb(242, 194, 194);
}
.entete {
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(168, 131, 131);
  border: 0.3rem ridge rgb(168, 131, 131);
  border-radius: 2rem 0;
}
.entete h2 {
  color: rgb(72, 93, 33);
  font-size: 1.2rem;
}
.drag-el {
  width: 90%;
  margin: 0.5rem auto;
  border: 0.3rem solid rgb(72, 93, 33);
  border-radius: 1rem;
  background-color: rgb(231, 230, 230);
  cursor: grab;
}
.drag-el:hover {
  border: 0.5rem solid rgb(72, 93, 33);
  background-color: rgb(236, 236, 201);
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
.download a {
  text-decoration: none;
  color: rgb(36, 48, 13);
  font-weight: bold;
  cursor: url("https://surlapage.fr/widget/cursors/16/1281092.gif"), default;
}
.download {
  width: 7rem;
  position: absolute;
  right: 9%;
}
</style>
