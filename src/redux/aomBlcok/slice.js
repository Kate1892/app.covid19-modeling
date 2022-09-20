import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../types'
import { chartDataset, chartOptions } from './types'
import { fetchAomData } from './asyncAction'

const nullifyState = state => {
  state.chartData = {
    labels: '',
    datasets: [{}, {}, {}],
  }
  state.date = []
  state.new_diagnoses = {
    new_diagnoses: [],
    new_diagnoses_high: [],
    real_new_diagnoses: [],
  }
  state.cum_diagnoses = {
    cum_diagnoses: [],
    cum_diagnoses_high: [],
    real_cum_diagnoses: [],
  }

  state.new_deaths = {
    new_deaths: [],
    new_deaths_high: [],
    real_new_deaths: [],
  }
  state.new_recoveries = {
    new_recoveries: [],
    new_recoveries_high: [],
    real_new_recoveries: [],
  }

  state.new_critical = {
    new_critical: [],
    new_critical_high: [],
    real_new_critical: [],
  }
}

const setChartData = (
  state,
  key,
  population_data,
  region_data,
  n_future_day,
  init_inf
) => {
  state.chartData.labels = state.date
  let region_name = 'Новосибирская область'
  if (region_data === 2) {
    region_name = 'Омская область'
  } else if (region_data === 3) {
    region_name = 'Алтайский край'
  }
  const pluginsOption = {
    ...chartOptions.plugins,
    subtitle: {
      display: true,
      align: 'end',
      position: 'top',
      text: [
        'Регион прогнозирования: ' + region_name,
        'Численность популяции: ' + population_data,
        'Начально инфицированных: ' + init_inf,
        'Дней прогнозирования: ' + n_future_day,
      ],
    },
  }

  state.chartOptions_ = {
    ...chartOptions,
    plugins: pluginsOption,
  }
  //   switch keys по ключам для цветов и т д

  state.chartData.datasets[0] = {
    ...chartDataset[0],
    data: state[key]['real_' + key],
  }
  state.chartData.datasets[1] = {
    ...chartDataset[1],
    data: state[key][key + '_high'],
  }
  state.chartData.datasets[2] = {
    ...chartDataset[2],
    data: state[key][key],
  }
}

const initialState = {
  status: Status.LOADING,

  chartData: {
    labels: '',
    datasets: [{}, {}, {}],
  },
  chartOptions_: {},

  date: [],
  new_diagnoses: {
    new_diagnoses: [],
    new_diagnoses_high: [],
    real_new_diagnoses: [],
  },
  cum_diagnoses: {
    cum_diagnoses: [],
    cum_diagnoses_high: [],
    real_cum_diagnoses: [],
  },
  new_deaths: {
    new_deaths: [],
    new_deaths_high: [],
    real_new_deaths: [],
  },
  new_recoveries: {
    new_recoveries: [],
    new_recoveries_high: [],
    real_new_recoveries: [],
  },
  new_critical: {
    new_critical: [],
    new_critical_high: [],
    real_new_critical: [],
  },
}

export const prognoseSlice = createSlice({
  name: 'aomData',
  initialState,
  reducers: {
    setNewChartData(state, action) {
      setChartData(
        state,
        action.payload.prType,
        action.payload.population_data,
        action.payload.region_data,
        action.payload.n_future_day,
        action.payload.init_inf
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAomData.pending, state => {
      state.status = Status.LOADING

      nullifyState(state)
    })
    builder.addCase(fetchAomData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS

      for (const dataObj of action.payload.data.results.date) {
        state.date.push(dataObj)
      }
      const keys = [
        'new_diagnoses',
        'cum_diagnoses',
        'new_deaths',
        'new_recoveries',
        'new_critical',
      ]

      for (const key of keys) {
        for (const dataObj of action.payload.data.results[key]) {
          state[key][key].push(parseInt(dataObj))
        }
        for (const dataObj of action.payload.data.results[key + '_high']) {
          state[key][key + '_high'].push(parseInt(dataObj))
        }
        for (const dataObj of action.payload.real_data) {
          if (key === 'new_critical') {
            state[key]['real_' + key].push(parseInt(dataObj['n_critical']))
          } else {
            state[key]['real_' + key].push(parseInt(dataObj[key]))
          }
        }
      }
      setChartData(
        state,
        'new_diagnoses',
        action.payload.population_data,
        action.payload.region_data,
        action.payload.n_future_day,
        action.payload.init_inf
      )
    })
    builder.addCase(fetchAomData.rejected, state => {
      state.status = Status.ERROR
      nullifyState(state)
    })
  },
})

export const { setNewChartData } = prognoseSlice.actions

export default prognoseSlice.reducer
