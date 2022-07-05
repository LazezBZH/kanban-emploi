<template>
  <div class="demo">
    <div class="demo-banner">
      <BannerCompo
        msg="Testez cette version démo"
        msg2="quelques fiches ont déjà été créées"
      />
    </div>

    <AnswerDemo />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCompo from "@/components/BannerCompo.vue";
import AnswerDemo from "@/components/demo/AnswerDemo.vue";

export default {
  name: "DemoView",

  components: {
    BannerCompo,
    AnswerDemo,
  },
};
</script>
<style>
.demo {
  background-color: rgba(255, 255, 0, 0.3);
  padding: 2rem 0.5rem;
}
.demo-banner {
  background-color: rgba(255, 166, 0, 0.7);
  padding: 2rem 0.2rem;
}
.demo h1 {
  color: rgb(201, 55, 2);
}
.demo h2 {
  color: rgba(255, 68, 0, 0.8);
}
.demo-btn {
  margin-top: 1rem;
}
</style>
