<template>
  <div class="demo-modal" v-if="revele">
    <div class="overlay" v-on:click="toggleDemoModal"></div>
    <div class="demo-modale">
      <div>Fiche créée</div>

      <button class="close" @click="toggleDemoModal">&#128473;</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyFormDemoModal",
  props: ["revele", "toggleDemoModal"],
};
</script>

<style scoped>
.demo-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.demo-modale {
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.5rem ridge rgba(255, 255, 255, 0.9);
  color: red;
  padding: 5rem;
  position: fixed;
  top: 25%;
  font-size: 1.5rem;
  font-weight: bold;
}
.demo-modale button {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  font-size: 1.5rem;
  font-weight: 200;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.5rem ridge rgba(255, 255, 255, 0.9);
  color: red;
  padding: 0.2rem 0.5rem;

  cursor: default;
}
</style>
