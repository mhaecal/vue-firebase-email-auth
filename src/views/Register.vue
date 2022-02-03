<template>
  <h1>Register</h1>
  <input type="text" placeholder="Email" v-model="form.email" />
  <input type="password" placeholder="Password" v-model="form.password" />
  <button @click="register(form)">Sign Up</button>
</template>

<script setup>
import { ref } from 'vue'
import { register } from '../firebase'

const form = ref({
  email: '',
  password: '',
})
</script>
