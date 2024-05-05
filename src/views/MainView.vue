<script setup lang="ts">
import router from '@/router'

import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const active = ref(0)

const items = [
  { label: 'Dashboard', icon: 'pi pi-chart-bar', path: 'dashboard' },
  { label: 'Employees', icon: 'pi pi-users', path: 'employees' }
]

const handleTabChange = (index: number) => {
  const tabName = items[index].path
  router.push({ path: `/main/${tabName}` })
}

const logOut = () => {
  router.push({ path: '/' })
}

onMounted(() => {
  const updateActiveIndex = (newPath: string) => {
    const activeIndex = items.findIndex((item) => newPath.includes(item.path))
    if (activeIndex !== -1) {
      active.value = activeIndex
    }
  }

  updateActiveIndex(router.currentRoute.value.path)

  const unwatch = watch(() => router.currentRoute.value.path, updateActiveIndex)

  onBeforeUnmount(() => {
    unwatch()
  })
})
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
