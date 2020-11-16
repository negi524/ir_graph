<template>
  <div class="container">
    <h2 class="mt-5">貸借対照表（B/S）</h2>
    <div class="row mt-4">
      <div class="col-4 my-auto">
        <div class="form-group row">
          <label class="col-6 col-form-label">資産</label>
          <b-form-input v-model="assets" class="col-6" type="number" />
        </div>
        <div class="form-group row">
          <label class="col-6 col-form-label">負債</label>
          <b-form-input v-model="liabilities" class="col-6" type="number" />
        </div>
        <div class="form-group row">
          <label class="col-6 col-form-label">純資産</label>
          <b-form-input v-model="netAssets" class="col-6" type="number" />
        </div>
        <div class="row mt-3">
          <b-button class="mx-auto" variant="outline-primary" @click="fillData()">反映</b-button>
        </div>
      </div>
      <balance-sheet class="col-8" :chart-data="datacollection" />
    </div>
  </div>
</template>

<script>
import BalanceSheet from '~/components/BalanceSheet.vue'

export default {
  components: {
    BalanceSheet,
  },
  data() {
    return {
      // チャートを構成するデータセット一覧
      datacollection: null,
      // 資産
      assets: 100,
      // 負債
      liabilities: 30,
      // 純資産
      netAssets: 70,
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ['運用状況', '調達状況'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '資産',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [this.assets, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '純資産',
            data: [null, this.netAssets],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '負債',
            data: [null, this.liabilities],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
        ],
      }
    },
  },
}
</script>
