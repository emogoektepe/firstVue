<template>
  <div class="card flex justify-content-center">
    <PrimeChart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['Electronics', 'Household', 'Fashion'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: ['#22c179', '#2fafff', '#ffff00'],
        hoverBackgroundColor: ['#1a9e63', '#1f8ec7', '#cccc00']
      }
    ]
  }
}

const setChartOptions = () => {
  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: 'white'
        }
      }
    }
  }
}
</script>

<style scoped></style>
