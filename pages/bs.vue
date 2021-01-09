<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">貸借対照表（B/S）</h2>
    <corp-detail />
    <div class="row mt-5">
      <!-- グラフ -->
      <balance-sheet
        ref="bs"
        class="col-md-8"
        :assets="assets"
        :liabilities="liabilities"
        :net-assets="netAssets ? netAssets : 0"
      />
      <div class="col-md-4 my-auto">
        <div class="row">
          <div class="col-6">資産</div>
          <div class="col-6 text-right">{{ total(assets) }}</div>
          <!-- 内訳 -->
          <ul class="mt-2">
            <li class="row">
              <label class="col-6 col-form-label">流動資産</label>
              <div class="col-6">
                <b-form-input v-model.number="assets.currentAssets" type="number" step="1" min="0" />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">固定資産</label>
              <div class="col-6">
                <b-form-input v-model.number="assets.fixedAssets" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">負債</div>
          <div class="col-6 text-right">{{ total(liabilities) }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">流動負債</label>
              <div class="col-6">
                <b-form-input
                  v-model.number="liabilities.currentLiabilities"
                  type="number"
                  step="1"
                  min="0"
                />
              </div>
            </li>
            <li class="row">
              <label class="col-6 col-form-label">固定負債</label>
              <div class="col-6">
                <b-form-input v-model.number="liabilities.fixedLiabilities" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-6">純資産</div>
          <div class="col-6 text-right">{{ parseInt(netAssets, 10) ? netAssets : 0 }}</div>
          <!-- 内訳 -->
          <ul>
            <li class="row">
              <label class="col-6 col-form-label">純資産</label>
              <div class="col-6">
                <b-form-input v-model.number="netAssets" type="number" step="1" min="0" />
              </div>
            </li>
          </ul>
        </div>
        <div class="row mt-3">
          <b-button class="mx-auto" variant="outline-primary" @click="updateChart()">反映</b-button>
          <b-button class="mx-auto" variant="outline-secondary" @click="clearData()">クリア</b-button>
        </div>
      </div>
    </div>
    <global-footer />
  </div>
</template>

<script>
import BalanceSheet from '~/components/BalanceSheet.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import CorpDetail from '~/components/CorpDetail.vue'

export default {
  components: {
    BalanceSheet,
    GlobalHeader,
    GlobalFooter,
    CorpDetail,
  },
  data() {
    return {
      // ローカルストレージに保存するキー名
      storageKeyName: 'bsData',
      // 資産
      assets: {
        currentAssets: 80,
        fixedAssets: 20,
      },
      // 負債
      liabilities: {
        currentLiabilities: 20,
        fixedLiabilities: 10,
      },
      // 純資産
      netAssets: 70,
    }
  },
  created() {
    // ローカルストレージにデータが存在すれば取り出してセットする
    const localBsData = localStorage.getItem(this.storageKeyName)
    if (localBsData) {
      const data = JSON.parse(localBsData)
      this.assets = data.assets
      this.liabilities = data.liabilities
      this.netAssets = data.netAssets
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
      this.$refs.bs.fillData()
      const temp = {
        assets: this.assets,
        liabilities: this.liabilities,
        netAssets: this.netAssets,
      }
      localStorage.setItem(this.storageKeyName, JSON.stringify(temp))
    },
    /**
     * データのクリアを行う
     */
    clearData() {
      this.assets = {
        currentAssets: 0,
        fixedAssets: 0,
      }
      this.liabilities = {
        currentLiabilities: 0,
        fixedLiabilities: 0,
      }
      this.netAssets = 0
    },
  },
}
</script>

<style lang="scss" scoped>
input:invalid {
  border: solid 1px red;
}
</style>
