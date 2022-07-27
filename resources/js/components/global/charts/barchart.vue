<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 800
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      type: Object,
      default: () => { }
    },
    max_value: {
      type: Number,
    }
  },
  data () {
    return {

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
                  max: 10
              }
          }
        }
      }
    }
  },
  created () {
    this.chartOptions.plugins = {
      legend: {
        display: false
      }
    }
    if(this.max_value){
      this.chartOptions.scales.y.max = this.max_value
    }

  }
}
</script>
<style>
#bar-chart {
  height: 343px !important;
}
</style>