<script setup lang="ts">
import { ref, computed, provide, readonly } from "vue";
import Counter from "./components/Counter.vue";
import Watch2 from "./components/Watch.vue";
const current = ref("counter");
const currentComponent = computed(() =>
  current.value === "counter" ? Counter : Watch2
);
const memo = ref("");
const updatedMemo = (event: { target: HTMLButtonElement }) => {
  memo.value = event.target.value;
};
const name = ref("taro");
const long = ref(100);
const location = computed(() => ({ long, lati: 140 }));
provide("userName", readonly(name));
provide("userLocation", readonly(location));
</script>

<template>
  <div>
    <div style="margin-bottom: 10px">
      <button @click="current = 'counter'">counter</button>&nbsp;
      <button @click="current = 'watch'">watch</button>
    </div>
    <KeepAlive>
      <component :is="currentComponent" @change="updatedMemo" />
    </KeepAlive>
    <div>
      <label>Name</label>&nbsp;
      <input v-model.lazy.trim="name" />
    </div>
    <div>
      <label>Long</label>&nbsp;
      <input v-model.lazy.trim.number="long" />
    </div>
    <p>MEMO: {{ memo }}</p>
    <footer-contents />
  </div>
</template>
