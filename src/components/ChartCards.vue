<script setup lang="ts">
import DynamicChart from '@/components/DynamicChart.vue'
const props = defineProps<{
  data: number[]
  header: string
  secondHeader: string
  color: string
  percentage: number
}>()

import { ref } from 'vue'

const number = ref(props.percentage)

const isPositive = ref()
isPositive.value = number.value >= 0
const textColor = ref(isPositive.value ? '#059669' : 'red')
const signedNumber = ref(`${isPositive.value ? '+' : '-'}${Math.abs(number.value)}%`)
const arrowIcon = ref(
  isPositive.value ? 'pi pi-arrow-up text-xs ml-2' : 'pi pi-arrow-down text-xs ml-2'
)
</script>

<template>
  <div class="card-container">
    <div>
      <h3>{{ header }}</h3>
      <h1>{{ secondHeader }}</h1>
      <h3 :style="{ color: textColor }">{{ signedNumber }} <i :class="arrowIcon"></i></h3>
    </div>
    <div class="chart">
      <DynamicChart :color="color" :data="data" />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #059669;
  border-radius: 30px;
  padding: 10px;
}
</style>
