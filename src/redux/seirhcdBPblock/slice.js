import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../types'
import { fetchBPCovData } from './asyncAction'
import { chartOptions, chartData, chartR0Options, chartR0Data } from './types'

const nullifyState = state => {
  //   state.chartData_BP = {
  //     labels: '',
  //     datasets: [{}, {}],
  //   }
  state.date = []
  state.new_diagnoses = []
  state.ventilation = []
  state.cum_deaths = []

  state.fk_mean = []
  state.C_mean = []
  state.D_mean = []

  state.R0_mean_entire = []
  state.R0_max_entire = []
  state.R0_min_entire = []

  state.R0_mean_train = []
  state.R0_max_train = []
  state.R0_min_train = []
}

const setChartData = (state, stype) => {
  state.chartOptions_bp = { ...chartOptions }
  state.chartData_BP.labels = state.date
  let rDataType = 'new_diagnoses'
  let dataType = 'fk_mean'

  if (stype === 2) {
    rDataType = 'ventilation'
    dataType = 'C_mean'
  } else if (stype === 3) {
    rDataType = 'cum_deaths'
    dataType = 'D_mean'
  }
  state.chartData_BP.datasets[0] = {
    ...chartData[0],
    data: state[rDataType],
  }
  state.chartData_BP.datasets[1] = {
    ...chartData[1],
    data: state[dataType],
  }
}

const setChartR0Data = state => {
  state.chartOptions_bpR0 = { ...chartR0Options }
  state.chartData_bpR0.labels = state.date

  const keys = [
    'R0_min_train',
    'R0_max_train',
    'R0_mean_train',
    'R0_min_entire',
    'R0_max_entire',
    'R0_mean_entire',
  ]
  let cur = 0

  for (const key of keys) {
    state.chartData_bpR0.datasets[cur] = {
      ...chartR0Data[cur],
      data: state[key],
    }
    cur++
  }

  //   state.chartData_bpR0.datasets[0] = {
  //     ...chartR0Data[0],
  //     data: state.R0_min_train,
  //   }
  //   state.chartData_bpR0.datasets[1] = {
  //     ...chartR0Data[1],
  //     data: state.R0_max_train,
  //   }
  //   state.chartData_bpR0.datasets[2] = {
  //     ...chartR0Data[2],
  //     data: state.R0_mean_train,
  //   }
  //   state.chartData_bpR0.datasets[3] = {
  //     ...chartR0Data[3],
  //     data: state.R0_min_entire,
  //   }
  //   state.chartData_bpR0.datasets[4] = {
  //     ...chartR0Data[4],
  //     data: state.R0_max_entire,
  //   }
  //   state.chartData_bpR0.datasets[5] = {
  //     ...chartR0Data[5],
  //     data: state.R0_mean_entire,
  //   }
}

const roundParamValue = (data, paramName) => {
  return Math.round(parseFloat(data[data.length - 1][paramName]) * 1000) / 1000
}

const initialState = {
  status: Status.LOADING,

  chartData_bpR0: {
    labels: '',
    datasets: [{}, {}, {}, {}, {}, {}],
  },

  chartData_BP: {
    labels: '',
    datasets: [{}, {}],
  },

  chartOptions_bpR0: {},
  chartOptions_bp: {},

  date: [],
  new_diagnoses: [],
  ventilation: [],
  cum_deaths: [],

  fk_mean: [],
  C_mean: [],
  D_mean: [],

  params: [
    {
      ae: '',
      ae_mean: '',
    },
    {
      ai: '',
      ai_mean: '',
    },
    {
      ehc: '',
      ehc_mean: '',
    },
    {
      m: '',
      m_mean: '',
    },
  ],

  R0_mean_entire: [],
  R0_max_entire: [],
  R0_min_entire: [],

  R0_mean_train: [],
  R0_max_train: [],
  R0_min_train: [],
}

export const covidBPDataSlice = createSlice({
  name: 'seirhcdBPdata',
  initialState,
  reducers: {
    setChartDataType(state, action) {
      setChartData(state, action.payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBPCovData.pending, state => {
      state.status = Status.LOADING
      nullifyState(state)
    })
    builder.addCase(fetchBPCovData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      console.log(action.payload)

      for (const dataObj of action.payload.true_data) {
        state.date.push(dataObj.Date)
        state.new_diagnoses.push(dataObj.new_diagnoses)
        state.ventilation.push(dataObj.ventilation)
        state.cum_deaths.push(dataObj.cum_deaths)

        state.fk_mean.push(0)
        state.C_mean.push(0)
        state.D_mean.push(0)
      }

      for (const dataObj of action.payload.train_data) {
        state.R0_mean_train.push(dataObj.R0_mean)
        state.R0_min_train.push(dataObj.R0_min)
        state.R0_max_train.push(dataObj.R0_max)

        state.R0_mean_entire.push(dataObj.R0_mean)
        state.R0_max_entire.push(dataObj.R0_max)
        state.R0_min_entire.push(dataObj.R0_min)
      }

      for (const dataObj of action.payload.forecasts) {
        state.date.push(dataObj.Date)
        state.fk_mean.push(dataObj.fk_mean)
        state.C_mean.push(dataObj.C_mean)
        state.D_mean.push(dataObj.D_mean)

        state.R0_mean_entire.push(dataObj.R0_mean)
        state.R0_max_entire.push(dataObj.R0_max)
        state.R0_min_entire.push(dataObj.R0_min)

        state.params[0].ae = roundParamValue(
          action.payload.forecasts,
          'alpha_e_std'
        )
        state.params[0].ae_mean = roundParamValue(
          action.payload.forecasts,
          'alpha_e_mean'
        )
        state.params[1].ai = roundParamValue(
          action.payload.forecasts,
          'alpha_i_std'
        )
        state.params[1].ai_mean = roundParamValue(
          action.payload.forecasts,
          'alpha_i_mean'
        )
        state.params[2].ehc = roundParamValue(
          action.payload.forecasts,
          'eps_hc_std'
        )
        state.params[2].ehc_mean = roundParamValue(
          action.payload.forecasts,
          'eps_hc_mean'
        )
        state.params[3].m = roundParamValue(action.payload.forecasts, 'mu_std')
        state.params[3].m_mean = roundParamValue(
          action.payload.forecasts,
          'mu_mean'
        )
      }
      setChartR0Data(state)
      setChartData(state, action.payload.stype)
    })
    builder.addCase(fetchBPCovData.rejected, state => {
      state.status = Status.ERROR
      nullifyState(state)
    })
  },
})

export const { setChartDataType } = covidBPDataSlice.actions

export default covidBPDataSlice.reducer
