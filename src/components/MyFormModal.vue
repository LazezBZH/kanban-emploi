<template>
  <div class="modal" v-if="revele">
    <div class="overlay" v-on:click="toggleModal"></div>
    <div class="modale">
      <div>Fiche créée</div>
      <div class="close" v-on:click="toggleModal">X</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyFormModal",
  props: ["revele", "toggleModal"],
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  display: flex;
  background-color: rgba(0, 110, 144, 0.8);
  border: 0.5rem ridge rgb(1, 88, 115);
  color: white;
  padding: 5rem;
  position: fixed;
  top: 25%;
  font-size: 1.5rem;
  font-weight: bold;
}
.close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  font-size: 1.5rem;
  font-weight: 200;
  background-color: rgba(0, 110, 144, 1);
  border: 0.5rem ridge rgb(1, 88, 115);
  color: white;
  padding: 0.2rem 0.5rem;

  cursor: default;
}
</style>
