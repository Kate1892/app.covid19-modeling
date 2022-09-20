export const chartDataset = [
  {
    label: 'данные',
    borderColor: 'rgb(255, 127, 80)',
    backgroundColor: 'rgb(255, 127, 80, 1)',
    tension: 0.9,
    borderWidth: 0.01,
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'максимальный прогноз',
    fill: true,
    backgroundColor: 'rgba(135, 206, 250, 0.2)',
    borderColor: 'rgba(135, 206, 250, 0.8)',
    tension: 0.9,
    borderWidth: 0.5,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
  {
    label: 'cредний прогноз',
    fill: false,
    borderColor: 'rgba(0, 191, 255, 1)',
    backgroundColor: 'rgba(0, 191, 255, 1)',
    tension: 0.9,
    borderWidth: 2,
    pointRadius: 0.3,
    pointHoverRadius: 5,
    pointHitRadius: 30,
    pointBorderWidth: 0.1,
  },
]

export const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    pan: {
      enabled: true,
      mode: 'xy',
    },
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
        pan: {
          enabled: true,
        },
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
      align: 'start',
      text: 'Прогноз новых случаев заражения',
    },
  },
}
