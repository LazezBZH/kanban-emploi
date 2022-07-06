<template>
  <SpontaneousModal
    v-if="isInEditMode"
    :sponta="spontaneousToEdit"
    @updatespontaneous="updateSpontaneous($event)"
    @cancel="cancelEdit"
  />
  <div>
    <h2 class="spontas">CANDIDATURES</h2>
    <div class="drops">
      <div
        class="drop-zone"
        @drop="onDrop($event, 5)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Préparer candidature</h2></div>
        <div v-if="listFive.length > 0">
          <div
            v-for="sponta in listFive"
            :key="sponta.id"
            :id="sponta.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, sponta)"
          >
            <SpontaneousCard :sponta="sponta" />
            <button @click="() => deleteSpontaneous(sponta.id)">
              Supprimer
            </button>
            <button @click="() => toggle(sponta)">Modifier</button>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 6)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Candidature envoyée</h2></div>
        <div v-if="listSix.length > 0">
          <div
            v-for="sponta in listSix"
            :key="sponta.id"
            :id="sponta.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, sponta)"
          >
            <SpontaneousCard :sponta="sponta" />
            <button @click="() => deleteSpontaneous(sponta.id)">
              Supprimer
            </button>
            <button @click="() => toggle(sponta)">Modifier</button>
          </div>
        </div>
      </div>
      <div
        class="drop-zone"
        @drop="onDrop($event, 7)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="entete"><h2>Réponse reçue</h2></div>
        <div v-if="listSeven.length > 0">
          <div
            v-for="sponta in listSeven"
            :key="sponta.id"
            :id="sponta.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, sponta)"
          >
            <SpontaneousCard :sponta="sponta" />
            <button @click="() => deleteSpontaneous(sponta.id)">
              Supprimer
            </button>
            <button @click="() => toggle(sponta)">Modifier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import spontaneousService from "@/services/spontaneous.js";
import SpontaneousModal from "./SpontaneousModal.vue";
import SpontaneousCard from "./SpontaneousCard.vue";

export default {
  name: "SpontaneousView",
  components: {
    SpontaneousModal,
    SpontaneousCard,
  },
  data() {
    const spontaneous = ref([]);
    spontaneous.value = spontaneousService.read();
    console.log("test spont", spontaneous);
    return {
      items: spontaneous,
    };
  },
  computed: {
    listFive() {
      return this.items.filter((item) => item.list === 5);
    },
    listSix() {
      return this.items.filter((item) => item.list === 6);
    },
    listSeven() {
      return this.items.filter((item) => item.list === 7);
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
      spontaneousService.updateSpontMove(item);
    },
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
.spontas {
  color: rgb(169, 58, 10);
  width: 59.5%;
  margin: 2rem auto auto auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  background-color: rgb(232, 182, 125);
  border: 0.3rem ridge rgb(232, 182, 125);
  border-bottom: none;
  border-radius: 2rem 2rem 0 0;
}
.drops {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.drop-zone {
  width: 30%;
  background-color: rgb(233, 210, 183);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 0.3rem ridge rgb(244, 208, 168);
}
.entete {
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(232, 182, 125);
  border: 0.3rem ridge rgb(232, 182, 125);
  border-radius: 2rem 0;
}
.entete h2 {
  color: rgb(137, 83, 13);
  font-size: 1.2rem;
}
.drag-el {
  width: 90%;
  margin: 0.5rem auto;
  border: 0.3rem solid rgb(137, 83, 13);
  border-radius: 1rem;
  background-color: rgb(231, 230, 230);
}
.drag-el:hover {
  border: 0.5rem solid rgb(137, 83, 13);
  background-color: rgb(210, 195, 175);
}

button {
  margin: 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background: rgb(185, 119, 34);
  color: white;
  padding: 0.4rem;
  cursor: pointer;
}
</style>
