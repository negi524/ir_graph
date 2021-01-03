<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
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
  mounted() {
    this.fillData()
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ['期首現金', '営業活動', '投資活動', '期末現金'],
        datasets: [
          {
            label: '期首現金',
            data: [700, null, null, null],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: '営業活動の非表示要素',
            data: [null, 700, null, null],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            label: '営業活動',
            data: [null, 550, null, null],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: '投資活動の非表示要素',
            data: [null, null, 200, null],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
          },
          {
            label: '投資活動',
            data: [null, null, 200, null],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      }
    },
  },
}
</script>
