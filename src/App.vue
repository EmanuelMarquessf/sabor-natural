<script setup lang="ts">
import OhVueIcon from "oh-vue-icons";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Carrousel from "./components/Carrousel.vue";
import MainCard from "./components/MainCard.vue";
import Chef from "./components/Chef.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <div class=" max-w-[1400px] my-0 mx-auto px-4 md:px-9">
    <Home />
    <img
    src="/effect3.png"
      class="w-full h-[2500px] absolute left-0 -z-10"
    />
    <div class="flex flex-col gap-28">
      <Carrousel />
      <div class="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
        <MainCard
          class="col-span-4"
          title="Como chegar"
          icon="md-explore-outlined"
          item1="Rua das Palmeiras, 123"
          item2="Bairro Jardim Verde"
          item3=" São Paulo"
        />
        <MainCard
          class="col-span-4"
          title="Status"
          icon="bi-door-open-fill"
          item1="Rua das Palmeiras, 123"
          item2="Bairro Jardim Verde"
          item3=" São Paulo"
        />
        <MainCard
          class="col-span-4"
          title="Contato"
          icon="md-phoneintalk-round"
          item1="Rua das Palmeiras, 123"
          item2="Bairro Jardim Verde"
          item3=" São Paulo"
        />
      </div>
      <Chef />
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
