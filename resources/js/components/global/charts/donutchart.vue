<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    name: 'DonutChart',
    components: {
        Doughnut
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
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
            default: 400
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
        removeLabel: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    created () {
        if (this.removeLabel) {
            this.chartOptions.plugins = {
                legend: {
                display: false
                }
            }
        }
    }
}
</script>