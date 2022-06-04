<script setup lang="ts">
import { ref } from "vue";

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
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <h2>WATCH</h2>
    <button @click="updateDatetime">Now</button>
    {{ now }}
    <br /><br />
    <label>MEMO</label><br />
    <input v-bind="$attrs" />
  </div>
</template>
