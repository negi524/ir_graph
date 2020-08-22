<template>
  <div class="container">
    <h2 class="mt-5">損益計算書（P/L）</h2>
    <profit-and-loss />
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
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.datacollection = {}
    },
  },
}
</script>
