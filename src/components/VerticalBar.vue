<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#41b883',
        borderColor: documentStyle.getPropertyValue('--cyan-500'),
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Profit',
        backgroundColor: '#51bcff',
        borderColor: documentStyle.getPropertyValue('--gray-500'),
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    maintainAspectRatio: true,
    aspectRatio: 4,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <PrimeChart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
  </div>
</template>
