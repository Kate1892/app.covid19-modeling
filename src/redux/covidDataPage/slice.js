import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../types'
import { fetchData } from './asyncAction'
import { chartDatasets, chartOptions } from '../types'

const keys = [
  'new_diagnoses',
  'cum_deaths',
  'cum_diagnoses',
  'cum_children',
  'cum_recoveries',
  'n_critical',
]

const nullifyState = state => {
  for (const key of keys) {
    state[key] = []
  }
  state.date = []
  state.chartOptions = {}
}

const setDataSets = state => {
  state.chartOptions = { ...chartOptions }

  state.chartData.labels = state.date
  let cur = 0
  for (const key of keys) {
    state.chartData.datasets[cur] = {
      ...chartDatasets[cur],
      data: state[key],
    }
    cur++
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
      nullifyState(state)
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      for (const dataObj of action.payload) {
        state.date = [...state.date, dataObj.date]
        for (const key of keys) {
          state[key] = [...state[key], parseInt(dataObj[key])]
        }
      }

      const sKeys = ['new_diagnoses', 'new_recoveries', 'new_deaths']
      let cur = 0
      for (const k of sKeys) {
        state.lastData[cur].date = state.date[state.date.length - 1]
        state.lastData[cur].value = parseInt(
          action.payload[action.payload.length - 1][k]
        )
        cur++
      }
      setDataSets(state)
    })
    builder.addCase(fetchData.rejected, state => {
      state.status = Status.ERROR
      nullifyState(state)
    })
  },
})

export const {} = covidDataSlice.actions

export default covidDataSlice.reducer
