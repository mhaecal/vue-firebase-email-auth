<template>
  <div class="container">
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link v-if="!authenticated" to="/login">Login</router-link>
      <router-link v-if="!authenticated" to="/register">Register</router-link>
      <button v-if="authenticated" @click="handleSignOut">Sign Out</button>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { handleSignOut } from './firebase'

const authenticated = ref(false)

onMounted(() => {
  onAuthStateChanged(getAuth(), user => {
    if (user) authenticated.value = true
    else authenticated.value = false
  })
})
</script>

<style scoped>
.container {
  margin: 20px;
}
nav {
  display: flex;
}
nav > * + * {
  margin-left: 20px;
}
</style>
