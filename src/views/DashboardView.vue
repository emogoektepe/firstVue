<script setup lang="ts">
import DashboardDummyData from '@/public/dashboardHeader.json'
import ChartCards from '@/components/ChartCards.vue'
import VerticalBar from '@/components/VerticalBar.vue'
import PieChart from '@/components/PieChart.vue'
</script>

<template>
  <main>
    <div class="cards">
      <ChartCards
        v-for="(card, index) in DashboardDummyData"
        :key="index"
        :header="card.header"
        :second-header="card.secondHeader"
        :color="card.color"
        :data="card.data"
        :percentage="card.percentage"
        class="chart-card"
      ></ChartCards>
    </div>
    <div class="mid-wrapper">
      <div class="vertical-bar-and-pie-chart">
        <h3>Revenue Overview</h3>
        <VerticalBar></VerticalBar>
      </div>
      <div class="pie-chart">
        <h3>Sales by Category</h3>
        <PieChart></PieChart>
      </div>
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

.vertical-bar-and-pie-chart {
  border: 1px solid #3cc698;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
}

.pie-chart {
  border: 1px solid #3cc698;
  border-radius: 30px;
  padding: 20px;
  margin-left: 25px;
}

.mid-wrapper {
  display: flex;
  margin-top: 25px;
}
</style>
