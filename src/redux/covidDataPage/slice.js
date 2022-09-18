import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../types'
import { fetchData } from './asyncAction'
import { chartDatasets, chartOptions } from '../types'

const setDataSets = state => {
  state.chartOptions = { ...chartOptions }

  state.chartData.labels = state.date

  state.chartData.datasets[0] = {
    ...chartDatasets[0],
    data: state.new_diagnoses,
  }
  state.chartData.datasets[1] = {
    ...chartDatasets[1],
    data: state.cum_deaths,
  }
  state.chartData.datasets[2] = {
    ...chartDatasets[2],
    data: state.cum_diagnoses,
  }
  state.chartData.datasets[3] = {
    ...chartDatasets[3],
    data: state.cum_children,
  }
  state.chartData.datasets[4] = {
    ...chartDatasets[4],
    data: state.cum_recoveries,
  }
  state.chartData.datasets[5] = {
    ...chartDatasets[5],
    data: state.n_critical,
  }
}

const initialState = {
  status: Status.LOADING,

  chartData: {
    labels: '',
    datasets: [{}, {}, {}, {}, {}, {}],
  },
  chartOptions: {},

  new_diagnoses: [],
  cum_deaths: [],
  cum_diagnoses: [],
  cum_recoveries: [],
  n_critical: [],
  cum_children: [],
  date: [],

  lastData: [
    {
      value: 0,
      date: 0,
      name: 'случаев заражения',
    },
    {
      value: 0,
      date: 0,
      name: 'случаев выздоровления',
    },
    {
      value: 0,
      date: 0,
      name: 'летальных исходов',
    },
  ],
}

export const covidDataSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.status = Status.LOADING
      state.new_diagnoses = []
      state.cum_deaths = []
      state.cum_diagnoses = []
      state.cum_recoveries = []
      state.n_critical = []
      state.cum_children = []
      state.date = []
      state.chartData = {
        labels: '',
        datasets: [{}, {}, {}, {}, {}, {}],
      }
      state.chartOptions = {}
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      for (const dataObj of action.payload) {
        state.date = [...state.date, dataObj.date]
        state.new_diagnoses = [
          ...state.new_diagnoses,
          parseInt(dataObj.new_diagnoses),
        ]
        state.cum_deaths = [...state.cum_deaths, parseInt(dataObj.cum_deaths)]
        state.cum_diagnoses = [
          ...state.cum_diagnoses,
          parseInt(dataObj.cum_diagnoses),
        ]
        state.cum_recoveries = [
          ...state.cum_recoveries,
          parseInt(dataObj.cum_recoveries),
        ]
        state.n_critical = [...state.n_critical, parseInt(dataObj.n_critical)]
        state.cum_children = [
          ...state.cum_children,
          parseInt(dataObj.cum_children),
        ]
      }

      state.lastData[0].date = state.date[state.date.length - 1]
      state.lastData[1].date = state.date[state.date.length - 1]
      state.lastData[2].date = state.date[state.date.length - 1]

      state.lastData[0].value = parseInt(
        action.payload[action.payload.length - 1].new_diagnoses
      )
      state.lastData[1].value = state.lastData[2].value = parseInt(
        action.payload[action.payload.length - 1].new_recoveries
      )
      state.lastData[2].value = parseInt(
        action.payload[action.payload.length - 1].new_deaths
      )

      setDataSets(state)
    })
    builder.addCase(fetchData.rejected, state => {
      state.status = Status.ERROR
      state.new_diagnoses = []
      state.cum_deaths = []
      state.cum_diagnoses = []
      state.cum_recoveries = []
      state.n_critical = []
      state.cum_children = []
      state.date = []
      state.chartData = {
        labels: '',
        datasets: [{}, {}, {}, {}, {}, {}],
      }
      state.chartOptions = {}
    })
  },
})

export const {} = covidDataSlice.actions

export default covidDataSlice.reducer
