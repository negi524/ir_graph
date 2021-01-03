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
      <div class="col-md-4 my-auto">
        <ul>
          <li>期首現金</li>
          <li>営業活動</li>
          <li>投資活動</li>
          <li>財務活動</li>
        </ul>
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
}
</script>
