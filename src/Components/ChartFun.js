export const download_chart=(e, chart) => {
  e.preventDefault()
  const imageLink = document.createElement('a')
  const img = document.getElementById(chart)
  imageLink.download = 'scenario.png'
  imageLink.href = img.toDataURL('image/png', 1)
  imageLink.click()
}

export const zoom_chart=(e) => {
  e.preventDefault()
  const img = document.getElementById('chart')
  img.plugins.scales.y.min = 80;
  img.plugins.scales.y.max = 100;
  img.update()
}
