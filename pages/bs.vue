<template>
  <div class="container">
    <h2 class="mt-5">貸借対照表（B/S）</h2>
    <div class="row my-5 mx-4">
      <div class="col-3"><label>資産</label></div>
      <div class="col-9">
        <b-form-input v-model="assets" type="number" placeholder="資産" />
      </div>
      <div class="col-3"><label>負債</label></div>
      <div class="col-9">
        <b-form-input v-model="liabilities" type="number" placeholder="負債" />
      </div>
      <div class="col-3"><label>純資産</label></div>
      <div class="col-9">
        <b-form-input v-model="netAssets" type="number" placeholder="純資産" />
      </div>
      <b-button
        class="mt-4 mx-auto"
        variant="outline-primary"
        @click="fillData()"
        >反映
      </b-button>
    </div>
    <balance-sheet :chart-data="datacollection" />
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
