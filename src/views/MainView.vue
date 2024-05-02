<script setup lang="ts">
import type { MenuItem } from '@/models/menuItem'
import router from '@/router'
import { ref, watch } from 'vue'

const active = ref(0)

const items = ref<MenuItem[]>([
  { label: 'Dashboard', icon: 'pi pi-home', path: 'dashboard' },
  { label: 'User', icon: 'pi pi-chart-line', path: 'user' }
])

const handleTabChange = (index: number) => {
  const tabName = items.value[index].path
  router.push({ path: `/main/${tabName}` })
}

const logOut = () => {
  router.push({ path: '/' })
}

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    const activeIndex = items.value.findIndex((item) => newPath.includes(item.path))
    if (activeIndex !== -1) {
      active.value = activeIndex
    }
  }
)
</script>

<template>
  <div class="card">
    <TabMenu v-model:activeIndex="active" :model="items" @update:activeIndex="handleTabChange" />
    <PrimeButton
      @click="logOut()"
      style="position: absolute; top: 5px; right: 5px"
      label="Logout"
    ></PrimeButton>
  </div>
  <RouterView />
</template>

<style scoped></style>
