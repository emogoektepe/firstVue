<script setup lang="ts">
import router from '@/router'

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
        <PrimeButton icon="pi pi-user" @click="guestLogin" label="Guest login"></PrimeButton>
        <a href="https://github.com/emogoektepe/firstVue" target="_blank">
          <PrimeButton icon="pi pi-github" style="width: 200px" label="Github Repo"></PrimeButton>
        </a>
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
