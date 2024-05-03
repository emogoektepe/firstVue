<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  color: string
  data: number[]
}>()

const chartHeight = '100px'
const chartWidth = '100%'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        data: props.data,
        fill: false,
        borderColor: props.color,
        tension: 0.4
      }
    ]
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    elements: {
      line: {
        fill: false,
        borderColor: 'red',
        tension: 0.4,
        borderWidth: 4
      },
      point: {
        radius: 0,
        hitRadius: 0,
        hoverRadius: 0
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          display: false
        }
      },
      y: {
        display: false,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          display: false
        }
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <PrimeChart
      type="line"
      :data="chartData"
      :options="chartOptions"
      :style="{ height: chartHeight, width: chartWidth }"
    />
  </div>
</template>

<style scoped></style>
