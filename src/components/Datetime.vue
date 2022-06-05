<script setup lang="ts">
import { ref, inject } from "vue";
const userName = inject("userName", "nanashi");
const userLocation = inject("userLocation");
const now = ref("");
const updateDatetime = () => {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const min = date.getMinutes();
  const s = date.getSeconds();
  now.value = `${y}/${m}/${d} ${h}:${min}:${s}`;
};
updateDatetime();
const translate: any = inject("translate");
const hello = translate("greetings.hello");
</script>

<template>
  {{ hello }}
  {{ userName }}-san<br />
  {{ userLocation }}<br />
  <button @click="updateDatetime">Now</button>
  {{ now }}
</template>
