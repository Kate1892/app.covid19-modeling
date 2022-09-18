export const Status = {
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
}

export const chartDatasets = [
  {
    label: 'новые случаи, шк.1',
    fill: false,
    borderColor: 'rgba(0, 191, 255, 1)',
    backgroundColor: 'rgba(0, 191, 255, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'quantity',
  },
  {
    label: 'летальные исходы, шк.2',
    borderColor: 'rgb(255,0,0)',
    backgroundColor: 'rgb(255,0,0, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'y',
  },
  {
    label: 'сум. заболеваемость, шк.2',
    borderColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(0, 0, 0)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'y',
  },
  {
    label: 'заражения детей, шк.2',
    borderColor: 'rgb(255, 192, 203)',
    backgroundColor: 'rgb(255, 192, 203)',
    tension: 0.9,
    borderWidth: 4,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'y',
  },
  {
    label: 'выздоровления, шк.2',
    borderColor: 'rgb(252,141,214)',
    backgroundColor: 'rgb(252,141,214)',
    tension: 0.9,
    borderWidth: 4,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'y',
  },
  {
    label: 'критические, шк.1',
    borderColor: 'rgb(128, 0, 255)',
    backgroundColor: 'rgb(128,0,255)',
    tension: 0.9,
    borderWidth: 4,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    yAxisID: 'quantity',
  },
]

export const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        drag: {
          enabled: true,
        },
        pan: { enabled: true },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
    },
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Статистические данные',
    },
  },
  scales: {
    quantity: {
      title: {
        display: true,
        text: 'шкала 1',
      },
      position: 'left',
      type: 'linear',
    },
    y: {
      title: {
        display: true,
        text: 'шкала 2',
      },
      position: 'right',
      beginAtZero: true,
      type: 'linear',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}

export const chartDataset_R0 = [
  {
    label: 'R0 min',
    fill: false,
    borderColor: 'rgba(0,0,0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    tension: 0.9,
    borderWidth: 1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'R0 max',
    fill: '-1',
    borderColor: 'rgba(0,0,0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    tension: 0.9,
    borderWidth: 1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'R0 среднее',
    fill: false,
    borderColor: 'rgba(255,0,0, 1)',
    backgroundColor: 'rgba(255, 0, 0, 1)',
    tension: 0.9,
    borderWidth: 1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
]

export const chartOptionsR0 = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        drag: {
          enabled: true,
        },
        pan: { enabled: true },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
    },
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      align: 'start',
      text: '',
    },
  },
}

export const chartOptionsP = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        drag: {
          enabled: true,
        },
        pan: { enabled: true },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
    },
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      align: 'center',
      text: '',
    },
  },
  scales: {
    quantity: {
      title: {
        display: true,
        text: 'вероятность',
      },
      position: 'left',
      type: 'linear',
    },
  },
}

export const chartDataP = [
  {
    label: '\u03B1\u2091',
    fill: false,
    borderColor: 'rgba(0,0,255, 1)',
    backgroundColor: 'rgba(0, 0, 255, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: '\u03B1\u1D62',
    fill: false,
    borderColor: 'rgba(255,0,0, 1)',
    backgroundColor: 'rgba(255, 0, 0, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: '\u03B5\u2095\u1D9C',
    fill: false,
    borderColor: 'rgba(92, 184, 92, 1)',
    backgroundColor: 'rgba(92, 184, 92, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: '\u03BC',
    fill: false,
    borderColor: 'rgba(128, 0, 255, 1)',
    backgroundColor: 'rgba(128, 0, 255, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
]

export const changeChartData = [
  {
    label: 'min',
    fill: false,
    borderColor: 'rgba(0,0,0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    tension: 0.9,
    borderWidth: 1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'max',
    fill: '-1',
    borderColor: 'rgba(0,0,0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    tension: 0.9,
    borderWidth: 1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'среднее',
    fill: false,
    borderColor: 'rgba(13,110,253, 1)',
    backgroundColor: 'rgba(13, 110, 253, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'Реальные данные',
    fill: false,
    borderColor: 'rgba(255, 127, 80, 1)',
    backgroundColor: 'rgba(255, 127, 80, 1)',
    tension: 0.9,
    borderWidth: 0.01,
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
]

export const changeOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        drag: {
          enabled: true,
        },
        pan: { enabled: true },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
    },
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      align: 'center',
      text: 'Новые выявленные случаи',
    },
  },
}
