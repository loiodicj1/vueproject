<script setup lang="ts">
  import { ref } from 'vue';
  const textboxtext = ref("")
</script>

<!-- https://bulma.io/documentation/elements/box/ -->
<!-- https://bulma.io/documentation/helpers/color-helpers/ -->
<template>
  <div class="box">
    <input class="input" type="text" placeholder="input" v-model="textboxtext">
  </div>

  <div class="box">
      {{textboxtext}}
    </div>
</template>
