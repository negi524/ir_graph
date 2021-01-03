<template>
  <div class="container">
    <global-header />
    <h2 class="mt-5">キャッシュフロー計算書</h2>
    <div class="row mt-4">
      <!-- グラフ -->
      <cache-flow
        ref="cf"
        class="col-md-8"
        :beginning-cache="beginningCache"
        :operating-activities="operatingActivities"
        :investment-activities="investmentActivities"
        :financing-activities="financingActivities"
      />
      <div class="col-md-4 my-auto cs-input">
        <div class="cs-input__item">
          <label class="cs-input__label">期首現金</label>
          <b-form-input v-model.number="beginningCache" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">営業活動</label>
          <b-form-input v-model="operatingActivities" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">投資活動</label>
          <b-form-input v-model="investmentActivities" class="cs-input__form" type="number" step="1" />
        </div>
        <div class="cs-input__item">
          <label class="cs-input__label">財務活動</label>
          <b-form-input v-model="financingActivities" class="cs-input__form" type="number" step="1" />
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
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import CacheFlow from '~/components/CacheFlow.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    CacheFlow,
  },
  data() {
    return {
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
  methods: {
    /**
     * チャートデータの反映を行う
     */
    updateChart() {},
    clearData() {},
  },
}
</script>
