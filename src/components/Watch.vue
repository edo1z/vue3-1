<script setup lang="ts">
import Datetime from "./Datetime.vue";
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <h2>WATCH</h2>
    <Datetime />
    <br /><br />
    <label>MEMO</label><br />
    <input v-bind="$attrs" />
  </div>
</template>
