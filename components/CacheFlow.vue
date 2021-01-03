<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  props: {
    // 期首現金
    beginningCache: {
      type: Number,
      required: true,
      default: 100,
    },
    // 営業活動
    operatingActivities: {
      type: Number,
      required: true,
      default: 40,
    },
    // 投資活動
    investmentActivities: {
      type: Number,
      required: true,
      default: 60,
    },
    // 財務活動
    financingActivities: {
      type: Number,
      required: true,
      default: 30,
    },
  },
  data() {
    return {
      // プラスの場合の色定義
      plusColor: {
        background: 'rgba(54, 162, 235, 0.2)',
        border: 'rgba(54, 162, 235, 1)',
      },
      // マイナスの場合の色定義
      minusColor: {
        background: 'rgba(255, 99, 132, 0.2)',
        border: 'rgba(255,99,132,1)',
      },
      chartData: null,
      options: {
        responsibe: true,
        maintainAspectRaito: false,
        // 凡例を非表示にする
        legend: {
          display: false,
        },
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
      },
    }
  },
  computed: {
    /**
     * 営業活動のグラフ描画に必要な隠しグラフ
     * 期首現金がそのまま返却される
     */
    hiddenOperatingAmount() {
      return this.beginningCache
    },
    /**
     * 投資活動のグラフ描画に必要な隠しグラフ
     * 「期首現金 + 営業活動」が返却される
     */
    hiddenInvestmentAmount() {
      return this.beginningCache + this.operatingActivities
    },
    /**
     * 財務活動のグラフ描画に必要な隠しグラフ
     * 「期首現金 + 営業活動 + 投資活動」が返却される
     */
    hiddenFinancingAmount() {
      return this.beginningCache + this.operatingActivities + this.investmentActivities
    },
    /**
     * 期末現金の結果を返却する
     */
    endCache() {
      return (
        this.beginningCache + this.operatingActivities + this.investmentActivities + this.financingActivities
      )
    },
  },
  mounted() {
    this.fillData()
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ['期首現金', '営業活動', '投資活動', '財務活動', '期末現金'],
        datasets: [
          {
            label: '期首現金',
            data: [this.beginningCache, null, null, null, null],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: '営業活動の非表示要素',
            data: [null, this.hiddenOperatingAmount, null, null, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            label: '営業活動',
            data: [null, this.operatingActivities, null, null, null],
            backgroundColor:
              this.operatingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.operatingActivities > 0 ? this.plusColor.border : this.minusColor.border,
          },
          {
            label: '投資活動の非表示要素',
            data: [null, null, this.hiddenInvestmentAmount, null, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            label: '投資活動',
            data: [null, null, this.investmentActivities, null, null],
            backgroundColor:
              this.investmentActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.investmentActivities > 0 ? this.plusColor.border : this.minusColor.border,
          },
          {
            label: '財務活動の非表示要素',
            data: [null, null, null, this.hiddenFinancingAmount, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            label: '財務活動',
            data: [null, null, null, this.financingActivities, null],
            backgroundColor:
              this.financingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.financingActivities > 0 ? this.plusColor.border : this.minusColor.border,
          },
          {
            label: '期末現金',
            data: [null, null, null, null, this.endCache],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      }
    },
  },
}
</script>
