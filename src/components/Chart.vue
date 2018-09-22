<template>
  <canvas ref="paper"></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';

const random = (ceil = 100, floor = 0) => Math.round(Math.random() * ceil) - floor;

const randoms = (num = 10, ceil = 100, floor = 0) => [...Array(num).keys()]
  .map(random.bind(null, ceil, floor));

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
