<script setup lang="ts">
import { ref, computed } from "vue";
import Counter from "./components/Counter.vue";
import Watch from "./components/Watch.vue";
const current = ref("counter");
const currentComponent = computed(() =>
  current.value === "counter" ? Counter : Watch
);
</script>

<template>
  <div>
    <div style="margin-bottom: 10px">
      <button @click="current = 'counter'">counter</button>&nbsp;
      <button @click="current = 'watch'">watch</button>
    </div>
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
    <footer-contents />
  </div>
</template>
