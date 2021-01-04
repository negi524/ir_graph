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
    options: {
      type: Object,
      required: false,
      default: () => ({
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
      }),
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
    }
  },
  computed: {
    /**
     * 営業活動のグラフ描画に必要な隠しグラフ
     */
    hiddenOperatingAmount() {
      let result = this.beginningCache
      // 営業活動マイナスの場合、合計値から引く
      if (this.operatingActivities < 0) {
        result += this.operatingActivities
      }

      // 0以下の場合、グラフの0を跨ぐので隠しグラフ不要
      return result > 0 ? result : null
    },
    /**
     * グラフ描画用の営業活動キャッシュフローを返却する
     */
    displayOperatingActivities() {
      // 営業活動キャッシュフロー加算時の合計
      const total = this.beginningCache + this.operatingActivities
      const result = {
        plus: 0, // 正の表示部
        minus: 0, // 負の表示部
      }
      if (total >= 0) {
        result.plus = Math.abs(this.operatingActivities)
      } else {
        result.minus = total
        result.plus = Math.abs(this.operatingActivities) + total
      }

      return result
    },
    /**
     * 投資活動のグラフ描画に必要な隠しグラフ
     */
    hiddenInvestmentAmount() {
      const beforeTotal = this.beginningCache + this.operatingActivities
      const afterTotal = beforeTotal + this.investmentActivities

      if (beforeTotal * afterTotal < 0) {
        // 0跨ぎの場合隠しグラフ不要
        return null
      } else if (beforeTotal * this.investmentActivities > 0) {
        // 加算前と符号が同じ場合は営業活動の結果を返す
        return beforeTotal
      } else {
        // 加算前と符号が異なる場合は投資活動の増減を考慮した値を返す
        return beforeTotal + this.investmentActivities
      }
    },
    /**
     * グラフ描画用の投資活動キャッシュフローを返却する
     */
    displayInvestmentActivities() {
      const result = {
        plus: 0, // 正の表示部
        minus: 0, // 負の表示部
      }

      // 投資活動加算前の合計値
      const beforeTotal = this.beginningCache + this.operatingActivities
      // 投資活動加算後の合計値
      const afterTotal = beforeTotal + this.investmentActivities

      // 0を跨いでプラスになる場合
      const minusToPlus = beforeTotal <= 0 && afterTotal > 0
      // 0を跨いでマイナスになる場合
      const plusToMinus = beforeTotal > 0 && afterTotal <= 0
      // 常にマイナスの場合
      const minusToMinus = beforeTotal <= 0 && afterTotal <= 0
      // 投資活動の費用を加算する前後のどちらかで負の値をとるとき、0を跨ぐ
      if (minusToPlus) {
        result.plus = afterTotal
        result.minus = beforeTotal
      } else if (plusToMinus) {
        result.plus = beforeTotal
        result.minus = afterTotal
      } else if (minusToMinus) {
        result.minus = Math.abs(this.investmentActivities) * -1
      } else {
        result.plus = Math.abs(this.investmentActivities)
      }
      return result
    },
    /**
     * 財務活動のグラフ描画に必要な隠しグラフ
     */
    hiddenFinancingAmount() {
      const beforeTotal = this.beginningCache + this.operatingActivities + this.investmentActivities
      const afterTotal = beforeTotal + this.financingActivities

      if (beforeTotal * afterTotal < 0) {
        // 0跨ぎの場合隠しグラフ不要
        return null
      } else if (beforeTotal * this.financingActivities > 0) {
        // 加算前と符号が同じ場合は営業活動の結果を返す
        return beforeTotal
      } else {
        // 加算前と符号が異なる場合は投資活動の増減を考慮した値を返す
        return beforeTotal + this.financingActivities
      }
    },
    /**
     * グラフ描画用の財務活動キャッシュフローを返却する
     */
    displayFinancingActivities() {
      const result = {
        plus: 0, // 正の表示部
        minus: 0, // 負の表示部
      }

      // 財務活動加算前の合計
      const beforeTotal = this.beginningCache + this.operatingActivities + this.investmentActivities
      // 財務活動加算後の合計
      const afterTotal = beforeTotal + this.financingActivities

      // 0を跨いでプラスになる場合
      const minusToPlus = beforeTotal <= 0 && afterTotal > 0
      // 0を跨いでマイナスになる場合
      const plusToMinus = beforeTotal > 0 && afterTotal <= 0
      // 常にマイナスの場合
      const minusToMinus = beforeTotal <= 0 && afterTotal <= 0
      // 財務活動の費用を加算する前後のどちらかで負の値をとるとき、0を跨ぐ
      if (minusToPlus) {
        result.plus = afterTotal
        result.minus = beforeTotal
      } else if (plusToMinus) {
        result.plus = beforeTotal
        result.minus = afterTotal
      } else if (minusToMinus) {
        result.minus = Math.abs(this.financingActivities) * -1
      } else {
        result.plus = Math.abs(this.financingActivities)
      }

      return result
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
            borderWidth: 1,
          },
          {
            label: '営業活動の非表示要素',
            data: [null, this.hiddenOperatingAmount, null, null, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            // 営業活動の正部分
            label: '営業活動',
            data: [null, this.displayOperatingActivities.plus, null, null, null],
            backgroundColor:
              this.operatingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.operatingActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            // 営業活動の負部分
            label: '営業活動',
            data: [null, this.displayOperatingActivities.minus, null, null, null],
            backgroundColor:
              this.operatingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.operatingActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            label: '投資活動の非表示要素',
            data: [null, null, this.hiddenInvestmentAmount, null, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            // 投資活動の正部分
            label: '投資活動',
            data: [null, null, this.displayInvestmentActivities.plus, null, null],
            backgroundColor:
              this.investmentActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.investmentActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            // 投資活動の負部分
            label: '投資活動',
            data: [null, null, this.displayInvestmentActivities.minus, null, null],
            backgroundColor:
              this.investmentActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.investmentActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            label: '財務活動の非表示要素',
            data: [null, null, null, this.hiddenFinancingAmount, null],
            // 配色は透明にする
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            // 財務活動の正部分
            label: '財務活動',
            data: [null, null, null, this.displayFinancingActivities.plus, null],
            backgroundColor:
              this.financingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.financingActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            // 財務活動の負部分
            label: '財務活動',
            data: [null, null, null, this.displayFinancingActivities.minus, null],
            backgroundColor:
              this.financingActivities > 0 ? this.plusColor.background : this.minusColor.background,
            borderColor: this.financingActivities > 0 ? this.plusColor.border : this.minusColor.border,
            borderWidth: 1,
          },
          {
            label: '期末現金',
            data: [null, null, null, null, this.endCache],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      }
    },
  },
}
</script>
