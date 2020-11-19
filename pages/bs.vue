<template>
  <div class="container">
    <h2 class="mt-5">貸借対照表（B/S）</h2>
    <div class="row mt-4">
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
          <!-- <b-button class="mx-auto" variant="outline-primary" @click="fillData()">反映</b-button> -->
          <b-button class="mx-auto" variant="outline-primary" @click="$refs.bs.fillData()">反映</b-button>
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
  methods: {
    /**
     * オブジェクトの要素の合計値を計算して返却する
     */
    total(element) {
      let sum = 0
      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(element)) {
        sum += parseInt(value, 10) || 0
      }
      return sum
    },
  },
}
</script>

<style lang="scss" scoped>
input:invalid {
  border: solid 1px red;
}
</style>
