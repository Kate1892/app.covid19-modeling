export const chartData = [
  {
    label: 'реальные данные',
    fill: false,
    borderColor: 'rgba(2, 117, 216, 1)',
    backgroundColor: 'rgba(2, 117, 216, 1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'модель',
    fill: false,
    borderColor: 'rgba(217, 83, 79, 1)',
    backgroundColor: 'rgba(217, 83, 79, 1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
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
      position: 'right',
    },
    title: {
      display: true,
      align: 'start',
      text: '',
    },
  },
}

export const chartR0Data = [
  {
    label: 'реальные данные',
    fill: false,
    borderColor: 'rgba(2, 117, 216, 0.1)',
    backgroundColor: 'rgba(2, 117, 216, 0.1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'реальные данные',
    fill: '-1',
    borderColor: 'rgba(2, 117, 216, 0.1)',
    backgroundColor: 'rgba(2, 117, 216, 0.1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'реальные данные',
    fill: false,
    borderColor: 'rgba(2, 117, 216, 1)',
    backgroundColor: 'rgba(2, 117, 216, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'модель',
    fill: false,
    borderColor: 'rgba(217, 83, 79, 0.1)',
    backgroundColor: 'rgba(217, 83, 79, 0.1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'модель',
    fill: '-1',
    borderColor: 'rgba(217, 83, 79, 0.1)',
    backgroundColor: 'rgba(217, 83, 79, 0.1)',
    tension: 0.9,
    borderWidth: 0.1,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
  {
    label: 'модель',
    fill: false,
    borderColor: 'rgba(217, 83, 79, 1)',
    backgroundColor: 'rgba(217, 83, 79, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
    barPercentage: 2,
  },
]

export const chartR0Options = {
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
