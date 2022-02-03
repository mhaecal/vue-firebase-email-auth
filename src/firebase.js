import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

initializeApp({
  apiKey: 'AIzaSyCs9KxdY-3VCcO9E7TsEw-OVZdPyhVIpsY',
  authDomain: 'fir-auth-513c0.firebaseapp.com',
  projectId: 'fir-auth-513c0',
  storageBucket: 'fir-auth-513c0.appspot.com',
  messagingSenderId: '719210834773',
  appId: '1:719210834773:web:60a4ace0b598b502791ddc',
})

const auth = getAuth()

export function getUserState() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, resolve, reject)
  })
}

export function register(form) {
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      window.location = '/dashboard'
    })
    .catch(error => {
      alert(error.message)
    })
}

export function login(form) {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      window.location = '/dashboard'
    })
    .catch(error => {
      alert(error.message)
    })
}

export function handleSignOut() {
  signOut(auth).then(() => {
    window.location = '/login'
  })
}
