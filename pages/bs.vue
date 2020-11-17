<template>
  <div class="container">
    <h2 class="mt-5">貸借対照表（B/S）</h2>
    <div class="row mt-4">
      <balance-sheet class="col-md-8" :chart-data="datacollection" />
      <div class="col-md-4 my-auto">
        <div class="row">
          <div class="col-6">資産</div>
          <div class="col-6 text-right">{{ assets.sum() }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">流動資産</label>
              <div class="col-6">
                <b-form-input v-model="assets.currentAssets" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">固定資産</label>
              <div class="col-6">
                <b-form-input v-model="assets.fixedAssets" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">負債</div>
          <div class="col-6 text-right">{{ liabilities.sum() }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">流動負債</label>
              <div class="col-6">
                <b-form-input v-model="liabilities.currentLiabilities" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">固定負債</label>
              <div class="col-6">
                <b-form-input v-model="liabilities.fixedLiabilities" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">純資産</div>
          <div class="col-6 text-right">{{ netAssets }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">純資産</label>
              <div class="col-6">
                <b-form-input v-model="netAssets" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row mt-3">
          <b-button class="mx-auto" variant="outline-primary" @click="fillData()">反映</b-button>
        </div>
      </div>
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
      assets: {
        currentAssets: 80,
        fixedAssets: 20,
        /**
         * 資産の合計値を計算して返却する
         */
        sum() {
          let sum = 0
          // eslint-disable-next-line no-unused-vars
          for (const [key, value] of Object.entries(this)) {
            sum += parseInt(value, 10) || 0
          }
          return sum
        },
      },
      // 負債
      liabilities: {
        currentLiabilities: 20,
        fixedLiabilities: 10,
        /**
         * 負債の合計値を計算して返却する
         */
        sum() {
          let sum = 0
          // eslint-disable-next-line no-unused-vars
          for (const [key, value] of Object.entries(this)) {
            sum += parseInt(value, 10) || 0
          }
          return sum
        },
      },
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
            label: '固定資産',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [this.assets.fixedAssets, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '流動資産',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [this.assets.currentAssets, null],
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
            label: '固定負債',
            data: [null, this.liabilities.fixedLiabilities],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '流動負債',
            data: [null, this.liabilities.currentLiabilities],
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
