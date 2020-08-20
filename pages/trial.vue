<template>
  <div>
    <h2>チャートのテスト描画</h2>
    <balance-sheet v-bind="bsData" />
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
      bsData: {
        // 資産
        assets: 100,
        // 負債
        liabilities: 30,
        // 純資産
        netAssets: 70,
      },
    }
  },
}
</script>
