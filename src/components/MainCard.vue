<script setup>
import { defineProps } from "vue";

defineProps({ title : String, icon: String, item1: String, item2: String, item3: String});
</script>

<template>
  <div class="flex flex-col gap-3 xl:gap-7  items-center bg-lightGreen text-center rounded py-7">
    <h3 class="font-merienda text-2xl lg:text-4xl font-bold text-darkBrownText">{{title}}</h3>
    <v-icon class="w-32 h-32 md:w-24 md:h-24 lg:w-30 lg:h-30 xl:w-48 xl:h-48 text-brown" :name="icon" />
    <div class="flex flex-col lg:text-xl font-inter font-medium text-darkBrownText">
      <span>{{item1}}</span>
      <span>{{item2}}</span>
    </div>
    <span class="font-merriweather text-xl lg:text-2xl font-bold text-darkGreenText">{{item3}}</span>
  </div>
</template>
