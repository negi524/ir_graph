<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  props: {
    // 資産
    assets: {
      type: Object,
      required: true,
      default: () => ({
        // 流動資産
        currentAssets: 80,
        // 固定資産
        fixedAssets: 20,
      }),
    },
    // 負債
    liabilities: {
      type: Object,
      required: true,
      default: () => ({
        // 流動負債
        currentLiabilities: 20,
        // 固定負債
        fixedLiabilities: 10,
      }),
    },
    // 純資産
    netAssets: {
      type: Number,
      required: true,
      default: 70,
    },
    options: {
      type: Object,
      requied: false,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      }),
    },
  },
  data() {
    return {
      // チャートデータに格納する変数
      chartData: null,
    }
  },
  mounted() {
    this.fillData()
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    /**
     * チャートのデータを更新するメソッド
     */
    fillData() {
      this.chartData = {
        labels: ['運用状況', '調達状況'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '固定資産',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [this.assets.fixedAssets, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '流動資産',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [this.assets.currentAssets, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '純資産',
            data: [null, this.netAssets],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '固定負債',
            data: [null, this.liabilities.fixedLiabilities],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '流動負債',
            data: [null, this.liabilities.currentLiabilities],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
        ],
      }
    },
  },
}
</script>
