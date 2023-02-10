<script setup lang="ts">
  import { ref } from 'vue';
  import session, { login, logout } from '../data/session';

  const isNotifVisible = ref(true)
  const nameInput = ref("")
  const bioInput = ref("")
</script>

<!-- https://bulma.io/documentation/elements/box/ -->
<!-- https://bulma.io/documentation/helpers/color-helpers/ -->
<template>
  <div class="box" v-if="session.user == null">
    <div v-if="isNotifVisible == true" class="notification is-warning">
        <button class="delete" @click="isNotifVisible = !isNotifVisible"></button>
        You are not logged in
    </div>

    <div class="field">
        <label class="label">Name</label>
        <input class="input" type="text" placeholder="name" v-model="nameInput">
    </div>

    <div class="field">
        <label class="label">Bio</label>
        <div class="control">
            <textarea class="textarea" placeholder="tell me about yourself" v-model="bioInput"></textarea>
        </div>
    </div>

    <div class="field">
        <div class="control">
            <button class="button is-link" @click="login(nameInput, bioInput); isNotifVisible = true">Log in</button>
        </div>
    </div>
  </div>

  <div class="box" v-else>
    <div v-if="isNotifVisible == true" class="notification is-success">
        <button class="delete" @click="isNotifVisible = !isNotifVisible"></button>
        You are logged in!
    </div>

    <div class="content">
      <label class="label">{{ session.user.name }}</label>
      {{ session.user.bio }}
    </div>

    <div class="field">
        <div class="control">
            <button class="button is-link is-light" @click="logout(); isNotifVisible = true">Log out</button>
        </div>
    </div>
  </div>
</template>
