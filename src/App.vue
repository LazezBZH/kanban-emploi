<template>
  <nav>
    <div class="r1"><router-link to="/">Home</router-link></div>
    <div class="r2"><router-link to="/kanban">Kanban</router-link></div>
    <div class="r3">
      <router-link to="/demo">Démo</router-link>
    </div>
    <div class="r4">
      <router-link to="/about">À propos</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: auto;
}

nav {
  display: flex;
  padding: 2rem;
  margin-bottom: 0.5rem;
  justify-content: center;
}
nav a {
  text-decoration: none;
}
nav .r1 a {
  font-weight: bold;
  font-size: 2rem;
  padding: 0.2rem;
  color: rgb(0, 110, 144);
  margin-right: 1.5rem;
}

nav .r1 a.router-link-exact-active {
  color: rgb(173, 202, 214);
  border-bottom: solid 0.3rem rgb(0, 110, 144);
}
nav .r2 a {
  font-weight: bold;
  color: rgb(105, 137, 47);
  font-size: 2rem;
  padding: 0.2rem;
  margin-left: 1.5rem;
}

nav .r2 a.router-link-exact-active {
  color: rgb(153, 194, 77);
  border-bottom: solid 0.3rem rgb(105, 137, 47);
}
nav .r3 a {
  font-weight: bold;
  color: orangered;
  font-size: 2rem;
  padding: 0.2rem;
  margin-left: 1.5rem;
}

nav .r3 a.router-link-exact-active {
  color: orange;
  border-bottom: solid 0.3rem orangered;
}
nav .r4 a {
  font-weight: bold;
  color: black;
  font-size: 2rem;
  padding: 0.2rem;
  margin-left: 1.5rem;
}

nav .r4 a.router-link-exact-active {
  color: grey;
  border-bottom: solid 0.3rem black;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
</style>
