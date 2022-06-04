<script setup lang="ts">
import Counter from "./components/Counter.vue";
const atr1 = "hoge";
</script>

<template>
  <div :[atr1]="atr1">
    <hoge />
    <counter />
  </div>
</template>
