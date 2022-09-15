// const ModelingCartFun = (mean, max, UScov_data) => {
//   setChartnum(1) /////
//   axios
//     .get('https://server.covid19-modeling.ru/getMsim')
//     .then(res => {
//       setLoadingprosses(false)
//       setSomeerrors(false)
//       for (const dataObj of res.data.results[mean]) {
//         cov_nd.push(parseInt(dataObj))
//         UScov_data(cov_nd)
//       }
//       for (const dataObj of res.data.results.date) {
//         cov_data.push(dataObj)
//         setData(cov_data)
//       }
//       for (const dataObj of res.data.results[max]) {
//         cov_nd_high.push(dataObj)
//         setData_cov_nd_high(cov_nd_high)
//       }
//       let mm = '0, 191, 255, 1'
//       setChartData_all({
//         labels: cov_data,
//         datasets: [
//           {
//             label: 'cредний прогноз',
//             data: cov_nd,
//             fill: false,
//             borderColor: `rgba(${mm})`,
//             backgroundColor: 'rgba(0, 191, 255, 1)',
//             tension: 0.9,
//             borderWidth: 2,
//             pointRadius: 0.3,
//             pointHoverRadius: 5,
//             pointHitRadius: 30,
//             pointBorderWidth: 0.1,
//           },
//           {
//             label: 'максимальный прогноз',
//             data: cov_nd_high,
//             fill: true,
//             backgroundColor: 'rgba(0, 191, 255, 0.1)',
//             borderColor: 'rgba(0, 191, 255, 0.3)',
//             tension: 0.9,
//             borderWidth: 0.5,
//             pointRadius: 0.3,
//             pointHoverRadius: 5,
//             pointHitRadius: 30,
//             pointBorderWidth: 0.1,
//           },
//         ],
//       })
//       setChartOptions({
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//           pan: {
//             enabled: true,
//             mode: 'xy',
//           },
//           zoom: {
//             pan: {
//               enabled: true,
//               mode: 'xy',
//             },
//             zoom: {
//               wheel: {
//                 enabled: true,
//                 speed: 0.1,
//               },
//               drag: {
//                 enabled: true,
//               },
//               pan: {
//                 enabled: true,
//               },
//               pinch: {
//                 enabled: true,
//               },
//               mode: 'xy',
//             },
//           },
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             align: 'start',
//             text: 'Прогноз новых случаев заражения',
//           },
//           subtitle: {
//             display: true,
//             align: 'end',
//             position: 'top',
//             text: [
//               'Регион прогнозирования: ' + region_name,
//               'Численность популяции: ' + population_data,
//               'Начально инфицированных: ' + init_inf,
//               'Дней прогнозирования: ' + n_future_day,
//             ],
//           },
//         },
//       })
//     })
//     .catch(err => {
//       setLoadingprosses(false)
//       setSomeerrors(true)
//       console.log(err)
//     })
// }

// export default ModelingCartFun
