<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">キャッシュフロー計算書（C/S）</h2>
    <corp-detail class="mt-5" />
    <div class="row mt-5">
      <!-- グラフ -->
      <cache-flow
        ref="cf"
        class="cache-flow-graph col-md-8"
        :beginning-cache="Number(beginningCache)"
        :operating-activities="Number(operatingActivities)"
        :investment-activities="Number(investmentActivities)"
        :financing-activities="Number(financingActivities)"
      />
      <div class="col-md-4 my-auto cs-input">
        <div class="cs-input__item">
          <label class="cs-input__label">期首現金</label>
          <b-form-input v-model.number="beginningCache" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">営業活動</label>
          <b-form-input v-model.number="operatingActivities" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">投資活動</label>
          <b-form-input v-model.number="investmentActivities" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">財務活動</label>
          <b-form-input v-model.number="financingActivities" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <div>期末現金</div>
          <div>{{ total }}</div>
        </div>
        <div class="row mt-4">
          <b-button class="mx-auto" variant="outline-primary" @click="updateChart()">反映</b-button>
          <b-button class="mx-auto" variant="outline-secondary" @click="clearData()">クリア</b-button>
        </div>
      </div>
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import CacheFlow from '~/components/CacheFlow.vue'
import CorpDetail from '~/components/CorpDetail.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    CacheFlow,
    CorpDetail,
  },
  data() {
    return {
      // ローカルストレージに保存するキー名
      storageKeyName: 'csData',
      // 期首現金
      beginningCache: 100,
      // 営業活動
      operatingActivities: 40,
      // 投資活動
      investmentActivities: -170,
      // 財務活動
      financingActivities: 40,
      // 期末現金
    }
  },
  computed: {
    /**
     * 期末現金の計算結果を返却する
     */
    total() {
      return (
        Number(this.beginningCache) +
        Number(this.operatingActivities) +
        Number(this.investmentActivities) +
        Number(this.financingActivities)
      )
    },
  },
  created() {
    // ローカルストレージにデータが存在すれば取り出してセットする
    const localCsData = localStorage.getItem(this.storageKeyName)
    if (localCsData) {
      const data = JSON.parse(localCsData)
      this.beginningCache = data.beginningCache
      this.operatingActivities = data.operatingActivities
      this.investmentActivities = data.investmentActivities
      this.financingActivities = data.financingActivities
    }
  },
  methods: {
    /**
     * チャートデータの反映を行う
     */
    updateChart() {
      // 子コンポーネントのデータ更新メソッドを呼び出し
      this.$refs.cf.fillData()
      // ローカルストレージにデータを保存
      const temp = {
        beginningCache: this.beginningCache,
        operatingActivities: this.operatingActivities,
        investmentActivities: this.investmentActivities,
        financingActivities: this.financingActivities,
      }
      localStorage.setItem(this.storageKeyName, JSON.stringify(temp))
    },
    /**
     * フォーム入力データのクリアを行う
     */
    clearData() {
      this.beginningCache = 0
      this.operatingActivities = 0
      this.investmentActivities = 0
      this.financingActivities = 0
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
  .cs-input {
    &__item {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
    &__label {
      width: 120px;
      margin: auto 0;
    }
  }
  // キャッシュフローのグラフの最大サイズを制限する
  .cache-flow-graph {
    max-width: 610px;
  }
}

// SP
@media (max-width: 896px) {
  .cs-input {
    &__item {
      display: flex;
      justify-content: space-between;
    }
    &__label {
      width: 120px;
      margin: auto 0;
    }
  }
}
</style>
