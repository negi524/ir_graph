<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">損益計算書（P/L）の推移</h2>
    <div class="mt-4">
      <!-- グラフ -->
      <transitive-profit-and-loss
        ref="pl"
        :before-expenses="before.expenses"
        :before-revenue="before.revenue"
        :before-net-income="total(before.income)"
        :before-net-loss="total(before.loss)"
        :after-expenses="after.expenses"
        :after-revenue="after.revenue"
        :after-net-income="total(after.income)"
        :after-net-loss="total(after.loss)"
      />
    </div>
    <div class="row">
      <div class="pl-input col-md-6">
        <div class="pl-input__summary">
          <div>費用</div>
          <div>{{ total(before.expenses) }}</div>
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">売上原価</label>
          <b-form-input v-model.number="before.expenses.cogs" class="pl-input__form" type="number" step="1" min="0" />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">販管費</label>
          <b-form-input v-model.number="before.expenses.sga" class="pl-input__form" type="number" step="1" min="0" />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">営業外費用</label>
          <b-form-input
            v-model.number="before.expenses.nonOperatingExpense"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">特別損失</label>
          <b-form-input
            v-model.number="before.expenses.extraordinaryLoss"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">法人税等</label>
          <b-form-input
            v-model.number="before.expenses.corporateTax"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__summary">
          <div>収益</div>
          <div>{{ total(before.revenue) }}</div>
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">売上高</label>
          <b-form-input v-model.number="before.revenue.sales" class="pl-input__form" type="number" step="1" min="0" />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">営業外収益</label>
          <b-form-input
            v-model.number="before.revenue.nonOperatingIncome"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">特別利益</label>
          <b-form-input
            v-model.number="before.revenue.extraordinaryGain"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__summary">
          <div>利益</div>
          <div>{{ total(before.income) }}</div>
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">当期純利益</label>
          <b-form-input
            v-model.number="before.income.netIncome"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__summary">
          <div>損失</div>
          <div>{{ total(before.loss) }}</div>
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">当期純損失</label>
          <b-form-input v-model.number="before.loss.netLoss" class="pl-input__form" type="number" step="1" min="0" />
        </div>
      </div>
      <div class="pl-input col-md-6">
        <div class="pl-input__summary">
          <div>費用</div>
          <div>{{ total(after.expenses) }}</div>
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">売上原価</label>
          <b-form-input v-model.number="after.expenses.cogs" class="pl-input__form" type="number" step="1" min="0" />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">販管費</label>
          <b-form-input v-model.number="after.expenses.sga" class="pl-input__form" type="number" step="1" min="0" />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">営業外費用</label>
          <b-form-input
            v-model.number="after.expenses.nonOperatingExpense"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">特別損失</label>
          <b-form-input
            v-model.number="after.expenses.extraordinaryLoss"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
        </div>
        <div class="pl-input__item">
          <label class="pl-input__label">法人税等</label>
          <b-form-input
            v-model.number="after.expenses.corporateTax"
            class="pl-input__form"
            type="number"
            step="1"
            min="0"
          />
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

// PC
@media (min-width: 897px) {
  .pl-input {
    margin-top: 50px;
    padding: 0 30px;
    &__summary {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    &__item {
      display: flex;
      justify-content: space-between;
      margin-left: 30px;
    }
    &__label {
      width: 100px;
    }
    &__form {
      width: 200px;
    }
  }
}

// SP
@media (max-width: 896px) {
}
</style>
