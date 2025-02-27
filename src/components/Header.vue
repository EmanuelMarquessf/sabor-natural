<script setup lang="ts"></script>

<template>
  <div
    class="absolute -top-10 left-0 w-full h-[180px] max-w-none lg:w-full -z-30 bg-cover"
    :style="{ backgroundImage: 'url(\'/effect.png\')' }"
  ></div>
  <!-- <img class="absolute -top-10 left-0 w-[1000px] max-w-none lg:w-full -z-30" src="/effect.png" alt="" /> -->

  <header class="relative h-24 my-3.5 lg:max-w-[1400px] mx-auto z-10">
    <nav class="flex justify-between items-center mx-4 md:mx-9">
      <a href="">
        <img class="max-h-24" src="/logo3.png" alt="" />
      </a>
      <ul
        class="flex gap-12 lg:gap-20 font-merienda text-[#cbea7e] font-bold text-xl"
      >
        <li><a href="">Cardápio</a></li>
        <li><a href="">Sobre Nós</a></li>
      </ul>
    </nav>
  </header>
</template>
