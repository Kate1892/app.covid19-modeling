import { createSlice } from '@reduxjs/toolkit'
import { Status, changeOptions, changeChartData } from '../types'
import { fetchChangeCovData } from './asyncAction'

const fillSubState = (state, date, mean, max, min, r_data, chartData) => {
  state.chartOptions_ = { ...changeOptions }
  state[chartData].labels = date

  state[chartData].datasets[0] = {
    ...changeChartData[0],
    data: min,
  }
  state[chartData].datasets[1] = {
    ...changeChartData[1],
    data: max,
  }
  state[chartData].datasets[2] = {
    ...changeChartData[2],
    data: mean,
  }
  state[chartData].datasets[3] = {
    ...changeChartData[3],
    data: r_data,
  }
}

const initialState = {
  status2: Status.LOADING,

  chartData_T: {
    labels: '',
    datasets: [{}, {}, {}, {}],
  },
  chartData_V: {
    labels: '',
    datasets: [{}, {}, {}, {}],
  },

  chartOptions_: {},
}

export const covidChangeDataSlice = createSlice({
  name: 'seirhcdChangeData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchChangeCovData.pending, state => {
      state.status2 = Status.LOADING
    })
    builder.addCase(fetchChangeCovData.fulfilled, (state, action) => {
      state.status2 = Status.SUCCESS
      let date = [],
        mean = [],
        max = [],
        min = [],
        r_data = []

      for (const dataObj of action.payload.data) {
        date.push(dataObj.Date)
        mean.push(dataObj[action.payload.mean])
        max.push(dataObj[action.payload.max])
        min.push(dataObj[action.payload.min])
      }
      for (const dataObj of action.payload.realData) {
        r_data.push(parseInt(dataObj[action.payload.title]))
      }
      if (action.payload.key === 'train') {
        fillSubState(state, date, mean, max, min, r_data, 'chartData_T')
      } else {
        fillSubState(state, date, mean, max, min, r_data, 'chartData_V')
      }
    })
    builder.addCase(fetchChangeCovData.rejected, state => {
      state.status2 = Status.ERROR
    })
  },
})

export const {} = covidChangeDataSlice.actions

export default covidChangeDataSlice.reducer
