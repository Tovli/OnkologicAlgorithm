<template>
  <canvas ref="paper"></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';

const random = (max = 100, min = 0) => Math.round(Math.random() * max) - min;

const randoms = (num = 10, eachMax = 100, eachMin = 0) => [...Array(num).keys()]
  .map(random.bind(null, eachMax, eachMin));

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
            backgroundColor: '#ef5575',
            data: randoms(7),
          },
          {
            label: 'Data Two',
            backgroundColor: '#2bc1e0',
            data: randoms(7),
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
