<template>
  <h1>Login</h1>
  <input type="text" placeholder="Email" v-model="form.email" />
  <input type="password" placeholder="Password" v-model="form.password" />
  <button @click="login(form)">Sign In</button>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '../firebase'

const form = ref({
  email: '',
  password: '',
})
</script>
