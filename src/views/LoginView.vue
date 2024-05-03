<script setup lang="ts">
import { auth } from '@/firebase'
import router from '@/router'
// import { db } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// const users = ref<User[]>([])

// onMounted(() => {
//   const unsubscribe = onSnapshot(collection(db, 'user'), (snapshot) => {
//     users.value = [] // Leere die users-Liste, bevor wir sie aktualisieren

//     snapshot.forEach((user) => {
//       const userData = user.data() as User // Wir sagen TypeScript explizit, dass dies ein User-Objekt ist
//       userData.id = user.id
//       users.value.push(userData)
//     })
//   })

//   onUnmounted(unsubscribe)
// })

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  signInWithPopup(auth, provider)
    .then(() => {
      router.push({ path: 'main/dashboard' })
    })
    .catch((error) => {
      console.error('Something went wrong', error)
    })
}

const guestLogin = () => {
  router.push({ path: 'main/dashboard' })
}
</script>

<template>
  <main>
    <div class="main-wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="" width="125" height="125" />
        <img src="@/assets/primevue-logo.png" alt="" width="125" height="125" />
        <img src="@/assets/vite.svg" alt="" width="125" height="125" />
        <img src="@/assets/firebase.svg" alt="" width="125" height="125" />
      </div>
      <h1>Welcome to Simple E-Commerce.</h1>
      <div class="login-buttons">
        <PrimeButton
          @click="signInWithGoogle"
          icon="pi pi-google"
          label="Google Login"
        ></PrimeButton>
        <PrimeButton @click="guestLogin" label="Guest login"></PrimeButton>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
}
main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo {
  width: 50%;
  display: flex;
  gap: 50px;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  padding: 35px;
  border-radius: 25px;
  animation: rotateShadow 4s linear infinite;
}

.login-buttons {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > button {
    width: 200px;
  }
}

@keyframes rotateShadow {
  0% {
    box-shadow:
      -10px -10px 30px #41b783,
      10px 10px 30px #bd34fe;
  }
  50% {
    box-shadow:
      -10px -10px 30px #bd34fe,
      10px 10px 30px #41b783;
  }
  100% {
    box-shadow:
      -10px -10px 30px #41b783,
      10px 10px 30px #bd34fe;
  }
}
</style>
