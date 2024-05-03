<script setup lang="ts">
import ChartCards from '@/components/ChartCards.vue'
import dashboardDummyData from '@/public/dashboardHeader.json'
</script>

<template>
  <main>
    <div class="cards">
      <ChartCards
        v-for="(card, index) in dashboardDummyData"
        :key="index"
        :header="card.header"
        :second-header="card.secondHeader"
        :color="card.color"
        :data="card.data"
        :percentage="card.percentage"
        class="chart-card"
      ></ChartCards>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 25px;
  min-height: calc(100vh - 49px);
}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.chart-card {
  width: 33%;
}
</style>
