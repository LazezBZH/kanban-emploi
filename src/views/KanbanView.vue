<template>
  <div class="kanban">
    <div class="kanban-banner">
      <BannerCompo
        msg="Gérez votre recherche d'emploi"
        msg2=" Consultez et gérez vos fiches"
      />
    </div>
    <AnswerView />
    <SpontaneousView />
  </div>
</template>

<script>
// @ is an alias to /src
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
</style>
