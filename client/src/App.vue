<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue'
</script>

<!-- https://bulma.io/documentation/columns/basics/ -->
<!-- https://bulma.io/documentation/columns/sizes/ -->
<template>
  <br>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <SideMenu/>
      </div>

      <div class="column is-four-fifths">
        <RouterView/>
      </div>
    </div>
  </div>
</template>