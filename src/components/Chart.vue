// <script lang="ts">
// import Vue from 'vue'
// import Chart, {Line} from 'vue-chartjs-typescript'

// export default Vue.extend({
//     extends: Line,
//     data(){
//         return {
//             _chart: '',
//         };
//     },
//     methods: {
//          renderChart(data: any, options: any) {
//     let canvas: any = this.$refs.canvas;
//     this._chart = new Chart(
//       canvas.getContext("2d"), {
//         type: this.chartType,
//         data: data,
//         options: options,
//         plugins: this._plugins
//       }
//     );
//   }
//     },
//     mounted() {
//         this.renderChart({
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [
//                 {
//                 label: 'Data One',
//                 backgroundColor: '#FC2525',
//                 data: [40, 39, 10, 40, 39, 80, 40]
//                 },{
//                 label: 'Data Two',
//                 backgroundColor: '#05CBE1',
//                 data: [60, 55, 32, 10, 2, 12, 53]
//                 }
//             ]
//             },
//             {responsive: true, maintainAspectRatio: false});
//     },
// });
// </script>


