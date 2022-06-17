<template>
  <div class="banner">
    <div class="logo-contain">
      <img alt="logo" src="../assets/logo.png" />
    </div>
    <div class="banner-txt-container">
      <div class="banner-txt">
        <h1>{{ msg }}</h1>
        <h2>{{ msg2 }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    msg2: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  display: flex;
}
.banner .logo-contain {
  flex: 1 1 0;
}
.banner .banner-txt-container {
  flex: 2 1 0;
}
.logo-contain {
  width: 301px;
  height: 301px;
}
.banner-txt-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.banner-txt {
  display: inline-block;
  margin: auto 2rem;
  border-radius: 20% 5%;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
