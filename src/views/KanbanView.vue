<template>
  <div class="kanban">
    <div class="kanban-banner">
      <BannerCompo
        msg="Gérez votre recherche d'emploi"
        msg2=" Consultez et gérez vos fiches"
      />
    </div>

    <div class="kanban-btn">
      <button v-on:click="a = true ? true : !a" :class="{ activeAnswer: a }">
        <h2>Consulter et gérer les réponses aux annonces</h2>
      </button>
      <button
        v-on:click="a = true ? false : a"
        :class="{ activeSpontaneous: !a }"
      >
        <h2>Consulter et gérer les candidatures spontanées</h2>
      </button>
    </div>
    <AnswerView v-if="a" />
    <SpontaneousView v-if="!a" />
  </div>
</template>

<script>
import BannerCompo from "@/components/BannerCompo.vue";
import AnswerView from "@/components/AnswerView.vue";
import SpontaneousView from "@/components/SpontaneousView.vue";

export default {
  name: "KanbanView",
  components: {
    BannerCompo,
    AnswerView,
    SpontaneousView,
  },
  data() {
    return {
      a: true,
    };
  },
};
</script>
<style>
.kanban {
  background-color: rgba(153, 194, 77, 0.3);
  padding: 2rem 0.5rem;
}
.kanban-banner {
  background-color: rgba(153, 194, 77, 0.7);
  padding: 2rem 0.2rem;
}
.kanban h1 {
  color: rgb(72, 93, 33);
}
.kanban h2 {
  color: rgb(105, 137, 47);
}
.kanban-btn {
  margin-top: 1rem;
}
.kanban-btn button {
  background-color: rgb(105, 137, 47);
  border: 0.3rem ridge rgb(105, 137, 47);
  margin: auto 0.2rem;
}
.kanban-btn h2 {
  background-color: rgba(255, 255, 255, 0.6);
  color: rgb(87, 6, 6);
  border: none;
  padding: 1rem;
  margin-bottom: 2rem;
}
.kanban-btn h2:hover {
  border: solid 0.5rem rgba(255, 255, 255, 0.3);
}
.activeAnswer h2,
.activeAnswer h2:active {
  border: solid 0.5rem rgb(150, 107, 107);
}
.activeSpontaneous h2,
.activeSpontaneous h2:active {
  border: solid 0.5rem rgb(232, 182, 125);
}

.upload-input {
  height: 5rem;
  position: relative;
  background-color: red;
}
.fake-input,
.file-input {
  position: absolute;
  left: 0;
  height: 5rem;
}
.fake-input {
  display: flex;
}
.file-input {
  z-index: 2;
  opacity: 0;
}
</style>
