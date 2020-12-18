<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  props: {
    // 費用(推移前)
    beforeExpenses: {
      type: Object,
      required: true,
      default: () => ({
        cogs: 10, // 売上原価
        sga: 20, // 販管費(Salling, General, Administration)
        nonOperatingExpense: 30, // 営業外費用
        extraordinaryLoss: 0, // 特別損失
        corporateTax: 20, // 法人税等
      }),
    },
    // 収益(推移前)
    beforeRevenue: {
      type: Object,
      required: true,
      default: () => ({
        sales: 50, // 売上高
        nonOperatingIncome: 50, // 営業外収益
        extraordinaryGain: 0, // 特別利益
      }),
    },
    // 利益(推移前)
    beforeNetIncome: {
      type: Number,
      required: true,
    },
    // 損失(推移前)
    beforeNetLoss: {
      type: Number,
      required: true,
    },
    // 費用(推移後)
    afterExpenses: {
      type: Object,
      required: true,
      default: () => ({
        cogs: 10, // 売上原価
        sga: 20, // 販管費(Salling, General, Administration)
        nonOperatingExpense: 30, // 営業外費用
        extraordinaryLoss: 0, // 特別損失
        corporateTax: 20, // 法人税等
      }),
    },
    // 収益(推移後)
    afterRevenue: {
      type: Object,
      required: true,
      default: () => ({
        sales: 50, // 売上高
        nonOperatingIncome: 50, // 営業外収益
        extraordinaryGain: 0, // 特別利益
      }),
    },
    // 利益(推移後)
    afterNetIncome: {
      type: Number,
      required: true,
    },
    // 損失(推移後)
    afterNetLoss: {
      type: Number,
      required: true,
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
      // チャートデータを格納する変数
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
        labels: ['借方1', '貸方1', '貸方2', '借方2'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '利益',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [this.beforeNetIncome, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '法人税等',
            data: [this.beforeExpenses.corporateTax, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別損失',
            data: [this.beforeExpenses.extraordinaryLoss, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外費用',
            data: [this.beforeExpenses.nonOperatingExpense, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '販管費',
            data: [this.beforeExpenses.sga, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上原価',
            data: [this.beforeExpenses.cogs, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '損失',
            data: [null, this.afterNetLoss],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別利益',
            data: [null, this.beforeRevenue.extraordinaryGain],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外収益',
            data: [null, this.beforeRevenue.nonOperatingIncome],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上高',
            data: [null, this.beforeRevenue.sales],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '利益',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [null, null, this.afterNetIncome, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '法人税等',
            data: [null, null, this.afterExpenses.corporateTax, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別損失',
            data: [null, null, this.afterExpenses.extraordinaryLoss, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外費用',
            data: [null, null, this.afterExpenses.nonOperatingExpense, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '販管費',
            data: [null, null, this.afterExpenses.sga, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上原価',
            data: [null, null, this.afterExpenses.cogs, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '損失',
            data: [null, null, null, this.beforeNetLoss],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別利益',
            data: [null, null, null, this.afterRevenue.extraordinaryGain],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外収益',
            data: [null, null, null, this.afterRevenue.nonOperatingIncome],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上高',
            data: [null, null, null, this.afterRevenue.sales],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      }
    },
  },
}
</script>
