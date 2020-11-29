<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <div class="row mt-4">
      <!-- グラフ -->
      <profit-and-loss
        ref="pl"
        class="col-md-8"
        :expenses="expenses"
        :revenue="revenue"
        :net-income="total(income)"
        :net-loss="total(loss)"
      />
      <div class="col-md-4 my-auto">
        <div class="row">
          <div class="col-6">費用</div>
          <div class="col-6 text-right">{{ total(expenses) }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">売上原価</label>
              <div class="col-6">
                <b-form-input v-model.number="expenses.cogs" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">販管費</label>
              <div class="col-6">
                <b-form-input v-model.number="expenses.sga" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">営業外費用</label>
              <div class="col-6">
                <b-form-input v-model.number="expenses.nonOperatingExpense" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">特別損失</label>
              <div class="col-6">
                <b-form-input v-model.number="expenses.extraordinaryLoss" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">法人税等</label>
              <div class="col-6">
                <b-form-input v-model.number="expenses.corporateTax" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="row">
          <div class="col-6">収益</div>
          <div class="col-6 text-right">{{ total(revenue) }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">売上高</label>
              <div class="col-6">
                <b-form-input v-model.number="revenue.sales" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">営業外収益</label>
              <div class="col-6">
                <b-form-input v-model.number="revenue.nonOperatingIncome" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">特別利益</label>
              <div class="col-6">
                <b-form-input v-model.number="revenue.extraordinaryGain" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="row">
          <div class="col-6">利益</div>
          <div class="col-6 text-right">{{ total(income) }}</div>
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">当期純利益</label>
              <div class="col-6">
                <b-form-input v-model.number="income.netIncome" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">損失</div>
          <div class="col-6 text-right">{{ total(loss) }}</div>
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">当期純損失</label>
              <div class="col-6">
                <b-form-input v-model.number="loss.netLoss" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row mt-3">
          <b-button class="mx-auto" variant="outline-primary" @click="updateChart()">
            反映
          </b-button>
        </div>
      </div>
    </div>
    <global-footer />
  </div>
</template>

<script>
import ProfitAndLoss from '~/components/ProfitAndLoss.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    ProfitAndLoss,
    GlobalHeader,
    GlobalFooter,
  },
  data() {
    return {
      // ローカルストレージに保存するキー名
      storageKeyName: 'plData',
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
      },
      // 収益
      revenue: {
        // 売上高
        sales: 50,
        // 営業外収益
        nonOperatingIncome: 50,
        // 特別利益
        extraordinaryGain: 0,
      },
      // 利益
      income: {
        netIncome: 20,
      },
      // 損失
      loss: {
        netLoss: 0,
      },
    }
  },
  created() {
    // ローカルストレージにデータが存在すれば取り出してセットする
    const localPlData = localStorage.getItem(this.storageKeyName)
    if (localPlData) {
      const data = JSON.parse(localPlData)
      this.expenses = data.expenses
      this.revenue = data.revenue
      this.income = data.income
      this.loss = data.loss
    }
  },
  methods: {
    /**
     * オブジェクトの要素の合計値を計算して返却する
     */
    total(element) {
      let sum = 0
      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(element)) {
        sum += Number(value)
      }
      return sum
    },
    /**
     * チャートデータの反映を行う
     */
    updateChart() {
      // 子コンポーネントのデータ更新メソッドを呼び出し
      this.$refs.pl.fillData()
      // ローカルストレージにデータを保存
      const temp = {
        expenses: this.expenses,
        revenue: this.revenue,
        income: this.income,
        loss: this.loss,
      }
      localStorage.setItem(this.storageKeyName, JSON.stringify(temp))
    },
  },
}
</script>

<style lang="scss" scoped>
input:invalid {
  border: solid 1px red;
}
</style>
