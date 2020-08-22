<template>
  <div class="container">
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <div class="row mt-5 mx-4">
      <label class="col-3 col-form-label">利益</label>
      <div class="col-9">
        <b-form-input v-model="netIncome" type="number" placeholder="利益" />
      </div>
    </div>
    <div class="row my-1 mx-4">
      <label class="col-3 col-form-label">費用</label>
      <div class="col-9">
        <b-form-input v-model="expenses" type="number" placeholder="費用" />
      </div>
    </div>
    <div class="row my-1 mx-4">
      <label class="col-3 col-form-label">収益</label>
      <div class="col-9">
        <b-form-input v-model="revenue" type="number" placeholder="収益" />
      </div>
    </div>
    <div class="row my-1 mx-4">
      <label class="col-3 col-form-label">損失</label>
      <div class="col-9">
        <b-form-input v-model="netLoss" type="number" placeholder="損失" />
      </div>
    </div>
    <div class="row my-5">
      <b-button class="mx-auto" variant="outline-primary" @click="fillData()">
        反映
      </b-button>
    </div>
    <profit-and-loss class="mt-4" :chart-data="datacollection" />
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
      // 利益
      netIncome: 20,
      // 費用
      expenses: 80,
      // 収益
      revenue: 100,
      // 損失
      netLoss: 0,
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
            data: [this.netIncome, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '費用',
            data: [this.expenses, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '損失',
            data: [null, this.netLoss],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '収益',
            data: [null, this.revenue],
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
