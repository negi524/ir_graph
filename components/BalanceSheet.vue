<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    // 資産
    assets: {
      type: Number,
      default: 0,
    },
    // 負債
    liabilities: {
      type: Number,
      default: 0,
    },
    // 純資産
    netAssets: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      chartData: {
        labels: ['運用状況', '調達状況'],
        datasets: [
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '資産',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            data: [this.assets, null],
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '純資産',
            data: [null, this.netAssets],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            type: 'bar',
            barPercentage: 1.2,
            label: '負債',
            data: [null, this.liabilities],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
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
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
