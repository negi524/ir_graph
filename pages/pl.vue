<template>
  <div class="container">
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <div class="row mt-4">
      <div class="col-4 my-auto">
        <div class="form-group row">
          <div class="col-6">費用</div>
          <div class="col-6 text-right">{{ expenses.sum() }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-7 col-form-label">売上原価</label>
              <b-form-input
                v-model="expenses.cogs"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">販管費</label>
              <b-form-input
                v-model="expenses.sga"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">営業外費用</label>
              <b-form-input
                v-model="expenses.nonOperatingExpense"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">特別損失</label>
              <b-form-input
                v-model="expenses.extraordinaryLoss"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">法人税等</label>
              <b-form-input
                v-model="expenses.corporateTax"
                class="col-5"
                type="number"
              />
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="form-group row">
          <div class="col-6">収益</div>
          <div class="col-6 text-right">{{ revenue.sum() }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-7 col-form-label">売上高</label>
              <b-form-input
                v-model="revenue.sales"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">営業外収益</label>
              <b-form-input
                v-model="revenue.nonOperatingIncome"
                class="col-5"
                type="number"
              />
            </li>
            <li class="row">
              <label class="col-7 col-form-label">特別利益</label>
              <b-form-input
                v-model="revenue.extraordinaryGain"
                class="col-5"
                type="number"
              />
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
        // 売上原価
        cogs: 10,
        // 販管費(Salling, General, Administration)
        sga: 20,
        // 営業外費用
        nonOperatingExpense: 30,
        // 特別損失
        extraordinaryLoss: 0,
        // 法人税等
        corporateTax: 20,
        /**
         * 費用の合計値を計算して返却する
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
      // 収益
      revenue: {
        // 売上高
        sales: 50,
        // 営業外収益
        nonOperatingIncome: 50,
        // 特別利益
        extraordinaryGain: 0,
        /**
         * 収益の合計値を計算して返却する
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
            label: '法人税等',
            data: [this.expenses.corporateTax, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別損失',
            data: [this.expenses.extraordinaryLoss, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外費用',
            data: [this.expenses.nonOperatingExpense, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '販管費',
            data: [this.expenses.sga, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上原価',
            data: [this.expenses.cogs, null],
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
            label: '特別利益',
            data: [null, this.revenue.extraordinaryGain],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外収益',
            data: [null, this.revenue.nonOperatingIncome],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上高',
            data: [null, this.revenue.sales],
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
