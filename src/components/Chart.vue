<template>
  <canvas ref="paper"></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import { randoms } from '../services/math';

export default Vue.extend({
  data() {
    return {
      chart: null,
      chartType: 'bar',
    };
  },
  methods: {
    renderChart(data: any, options: any) {
      const paper = this.$refs.paper as HTMLCanvasElement;
      this.chart = new Chart(paper.getContext('2d'), {
        data,
        options,
        type: this.chartType,
      });
    },
  },
  mounted() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.renderChart(
      {
        labels,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#ef5575',
            data: randoms(labels.length),
          },
          {
            label: 'Data Two',
            backgroundColor: '#2bc1e0',
            data: randoms(labels.length),
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: true,
      },
    );
  },
});
</script>
