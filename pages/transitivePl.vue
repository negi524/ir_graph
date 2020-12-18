<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">損益計算書（P/L）の推移</h2>
    <div class="row mt-4">
      <!-- グラフ -->
      <transitive-profit-and-loss
        ref="pl"
        class="col-md-8"
        :before-expenses="before.expenses"
        :before-revenue="before.revenue"
        :before-net-income="total(before.income)"
        :before-net-loss="total(before.loss)"
        :after-expenses="after.expenses"
        :after-revenue="after.revenue"
        :after-net-income="total(after.income)"
        :after-net-loss="total(after.loss)"
      />
      <div class="col-md-4 my-auto">
        <div class="row">
          <div class="col-6">費用</div>
          <div class="col-6 text-right">{{ total(before.expenses) }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">売上原価</label>
              <div class="col-6">
                <b-form-input v-model.number="before.expenses.cogs" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">販管費</label>
              <div class="col-6">
                <b-form-input v-model.number="before.expenses.sga" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">営業外費用</label>
              <div class="col-6">
                <b-form-input
                  v-model.number="before.expenses.nonOperatingExpense"
                  type="number"
                  step="1"
                  min="0"
                />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">特別損失</label>
              <div class="col-6">
                <b-form-input
                  v-model.number="before.expenses.extraordinaryLoss"
                  type="number"
                  step="1"
                  min="0"
                />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">法人税等</label>
              <div class="col-6">
                <b-form-input v-model.number="before.expenses.corporateTax" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="row">
          <div class="col-6">収益</div>
          <div class="col-6 text-right">{{ total(before.revenue) }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">売上高</label>
              <div class="col-6">
                <b-form-input v-model.number="before.revenue.sales" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">営業外収益</label>
              <div class="col-6">
                <b-form-input
                  v-model.number="before.revenue.nonOperatingIncome"
                  type="number"
                  step="1"
                  min="0"
                />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">特別利益</label>
              <div class="col-6">
                <b-form-input
                  v-model.number="before.revenue.extraordinaryGain"
                  type="number"
                  step="1"
                  min="0"
                />
              </div>
            </li>
          </ul>
          <!-- 内訳 -->
        </div>
        <div class="row">
          <div class="col-6">利益</div>
          <div class="col-6 text-right">{{ total(before.income) }}</div>
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">当期純利益</label>
              <div class="col-6">
                <b-form-input v-model.number="before.income.netIncome" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">損失</div>
          <div class="col-6 text-right">{{ total(before.loss) }}</div>
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">当期純損失</label>
              <div class="col-6">
                <b-form-input v-model.number="before.loss.netLoss" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row mt-3">
          <b-button class="mx-auto" variant="outline-primary" @click="updateChart()">反映</b-button>
        </div>
      </div>
    </div>
    <global-footer />
  </div>
</template>

<script>
import TransitiveProfitAndLoss from '~/components/TransitiveProfitAndLoss.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    TransitiveProfitAndLoss,
    GlobalHeader,
    GlobalFooter,
  },
  data() {
    return {
      // 推移前のデータ
      storageKeyNameForBefore: 'beforePlData', // ローカルストレージに保存するキー名
      before: {
        // 費用
        expenses: {
          cogs: 10, // 売上原価
          sga: 20, // 販管費(Salling, General, Administration)
          nonOperatingExpense: 30, // 営業外費用
          extraordinaryLoss: 0, // 特別損失
          corporateTax: 20, // 法人税等
        },
        // 収益
        revenue: {
          sales: 50, // 売上高
          nonOperatingIncome: 50, // 営業外収益
          extraordinaryGain: 0, // 特別利益
        },
        // 利益
        income: {
          netIncome: 20,
        },
        // 損失
        loss: {
          netLoss: 0,
        },
      },
      // 推移後のデータ
      storageKeyNameForAfter: 'afterPlData', // ローカルストレージに保存するキー名
      after: {
        // 費用
        expenses: {
          cogs: 10, // 売上原価
          sga: 20, // 販管費(Salling, General, Administration)
          nonOperatingExpense: 30, // 営業外費用
          extraordinaryLoss: 0, // 特別損失
          corporateTax: 20, // 法人税等
        },
        // 収益
        revenue: {
          sales: 50, // 売上高
          nonOperatingIncome: 50, // 営業外収益
          extraordinaryGain: 0, // 特別利益
        },
        // 利益
        income: {
          netIncome: 20,
        },
        // 損失
        loss: {
          netLoss: 0,
        },
      },
    }
  },
  created() {
    // ローカルストレージにデータが存在すれば取り出してセットする
    const localBeforePlData = localStorage.getItem(this.storageKeyNameForBefore)
    const localAfterPlData = localStorage.getItem(this.storageKeyNameForAfter)
    if (localBeforePlData) {
      const localData = JSON.parse(localBeforePlData)
      this.before = localData.before
    }
    if (localAfterPlData) {
      const localData = JSON.parse(localAfterPlData)
      this.after = localData.after
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
      localStorage.setItem(this.storageKeyNameForBefore, JSON.stringify(this.before))
      localStorage.setItem(this.storageKeyNameForAfter, JSON.stringify(this.after))
    },
  },
}
</script>

<style lang="scss" scoped>
input:invalid {
  border: solid 1px red;
}
</style>
