<template>
  <div class="container">
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <div class="row mt-4">
      <div class="col-4 my-auto">
        <div class="form-group row">
          <label class="col-6 col-form-label">費用</label>
          <b-form-input v-model="expenses.sum" class="col-6" type="number" />
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-7 col-form-label">売上原価</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">販管費</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">営業外費用</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">特別損失</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">法人税等</label>
              <b-form-input class="col-5" type="number" />
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="form-group row">
          <label class="col-6 col-form-label">収益</label>
          <b-form-input v-model="revenue.sum" class="col-6" type="number" />
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-7 col-form-label">売上高</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">営業外収益</label>
              <b-form-input class="col-5" type="number" />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">特別利益</label>
              <b-form-input class="col-5" type="number" />
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="form-group row">
          <label class="col-6 col-form-label">利益</label>
          <b-form-input v-model="netIncome" class="col-6" type="number" />
        </div>
        <div class="form-group row">
          <label class="col-6 col-form-label">損失</label>
          <b-form-input v-model="netLoss" class="col-6" type="number" />
        </div>
        <div class="row mt-3">
          <b-button
            class="mx-auto"
            variant="outline-primary"
            @click="fillData()"
          >
            反映
          </b-button>
        </div>
      </div>
      <profit-and-loss class="col-8" :chart-data="datacollection" />
    </div>
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
      // 費用
      expenses: {
        sum: 80,
      },
      // 収益
      revenue: {
        sum: 100,
      },
      // 利益
      netIncome: 20,
      // 損失
      netLoss: 0,
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    /**
     * 数値をグラフに反映する
     */
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
            data: [this.expenses.sum, null],
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
            data: [null, this.revenue.sum],
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
