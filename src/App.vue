<script setup>
import TheHeader from "./components/Layout/TheHeader.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView></RouterView>
  </div>
</template>
