<template>
  <div class="container">
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <profit-and-loss :chart-data="datacollection" />
  </div>
</template>

<script>
import ProfitAndLoss from '~/components/ProfitAndLoss.vue'

export default {
  components: {
    ProfitAndLoss,
  },
  data() {
    return {
      // チャートを構成するデータセット一覧
      datacollection: null,
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ['借方', '貸方'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '利益',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [80, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '費用',
            data: [20, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '損失',
            data: [null, 60],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '収益',
            data: [null, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      }
    },
  },
}
</script>
