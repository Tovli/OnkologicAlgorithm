<template>
  <canvas ref="paper"></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
  data() {
    return {
      chart: null,
      chartType: 'bar',
      plugins: [],
    };
  },
  methods: {
    renderChart(data: any, options: any) {
      const paper = this.$refs.paper as HTMLCanvasElement;
      this.chart = new Chart(paper.getContext('2d'), {
        data,
        options,
        type: this.chartType,
        plugins: this.plugins,
      });
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#FC2525',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: 'Data Two',
            backgroundColor: '#05CBE1',
            data: [60, 55, 32, 10, 2, 12, 53],
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
