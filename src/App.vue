<script setup lang="ts">
import { ref } from "vue";
import Counter from "./components/Counter.vue";
import Watch from "./components/Watch.vue";
const current = ref("watch");
</script>

<template>
  <div>
    <div style="margin-bottom: 10px">
      <button @click="current = 'counter'">counter</button>&nbsp;
      <button @click="current = 'watch'">watch</button>
    </div>
    <component :is="current === 'counter' ? Counter : Watch" />
    <footer-contents />
  </div>
</template>
