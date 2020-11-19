<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  props: {
    // 費用
    expenses: {
      type: Object,
      required: true,
      default: () => ({
        // 売上原価
        cogs: 10,
        // 販管費(Salling, General, Administration)
        sga: 20,
        // 営業外費用
        nonOperatingExpense: 30,
        // 特別損失
        extraordinaryLoss: 0,
        // 法人税等
        corporateTax: 20,
      }),
    },
    // 収益
    revenue: {
      type: Object,
      required: true,
      default: () => ({
        // 売上高
        sales: 50,
        // 営業外収益
        nonOperatingIncome: 50,
        // 特別利益
        extraordinaryGain: 0,
      }),
    },
    // 利益
    netIncome: {
      type: Number,
      required: true,
    },
    // 損失
    netLoss: {
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
        labels: ['借方', '貸方'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '利益',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [this.netIncome, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '法人税等',
            data: [this.expenses.corporateTax, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別損失',
            data: [this.expenses.extraordinaryLoss, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外費用',
            data: [this.expenses.nonOperatingExpense, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '販管費',
            data: [this.expenses.sga, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上原価',
            data: [this.expenses.cogs, null],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '損失',
            data: [null, this.netLoss],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '特別利益',
            data: [null, this.revenue.extraordinaryGain],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '営業外収益',
            data: [null, this.revenue.nonOperatingIncome],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '売上高',
            data: [null, this.revenue.sales],
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
