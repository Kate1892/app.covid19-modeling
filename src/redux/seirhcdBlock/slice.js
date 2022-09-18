import { createSlice } from '@reduxjs/toolkit'
import {
  chartDataset_R0,
  Status,
  chartOptionsR0,
  chartOptionsP,
  chartDataP,
} from '../types'
import { fetchCovData } from './asyncAction'

const fillSubState = (state, date, r0_mean, r0_max, r0_min, chartData) => {
  state.chartOptions_R0 = { ...chartOptionsR0 }
  state[chartData].labels = date

  state[chartData].datasets[0] = {
    ...chartDataset_R0[0],
    data: r0_min,
  }
  state[chartData].datasets[1] = {
    ...chartDataset_R0[1],
    data: r0_max,
  }
  state[chartData].datasets[2] = {
    ...chartDataset_R0[2],
    data: r0_mean,
  }
}

const fillSubState2 = (
  state,
  date,
  ae_data,
  ai_data,
  e_data,
  m_data,
  chartData
) => {
  state.chartOptions_P = { ...chartOptionsP }
  state[chartData].labels = date

  state[chartData].datasets[0] = {
    ...chartDataP[0],
    data: ae_data,
  }
  state[chartData].datasets[1] = {
    ...chartDataP[1],
    data: ai_data,
  }
  state[chartData].datasets[2] = {
    ...chartDataP[2],
    data: e_data,
  }
  state[chartData].datasets[3] = {
    ...chartDataP[3],
    data: m_data,
  }
}

const initialState = {
  status: Status.LOADING,

  chartData_tR0: {
    labels: '',
    datasets: [{}, {}, {}],
  },
  chartData_vR0: {
    labels: '',
    datasets: [{}, {}, {}],
  },
  chartData_tP: {
    labels: '',
    datasets: [{}, {}, {}, {}],
  },
  chartData_vP: {
    labels: '',
    datasets: [{}, {}, {}, {}],
  },
  chartOptions_R0: {},
  chartOptions_P: {},
}

export const covidDataSlice = createSlice({
  name: 'seirhcdData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCovData.pending, state => {
      state.status = Status.LOADING
    })
    builder.addCase(fetchCovData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS

      if (action.payload.key === 'tR0' || action.payload.key === 'vR0') {
        let date = [],
          r0_mean = [],
          r0_max = [],
          r0_min = []

        for (const dataObj of action.payload.data) {
          date.push(dataObj.Date)
          r0_mean.push(dataObj.R0_mean)
          r0_max.push(dataObj.R0_max)
          r0_min.push(dataObj.R0_min)
        }
        if (action.payload.key === 'tR0') {
          fillSubState(state, date, r0_mean, r0_max, r0_min, 'chartData_tR0')
        } else {
          fillSubState(state, date, r0_mean, r0_max, r0_min, 'chartData_vR0')
        }
      }

      if (action.payload.key === 'tP' || action.payload.key === 'vP') {
        let date = [],
          ae_data = [],
          ai_data = [],
          e_data = [],
          m_data = []

        for (const dataObj of action.payload.data) {
          date.push(dataObj.Date)
          ae_data.push(dataObj.alpha_e_mean)
          ai_data.push(dataObj.alpha_i_mean)
          e_data.push(dataObj.eps_hc_mean)
          m_data.push(dataObj.mu_mean)
        }

        if (action.payload.key === 'tP') {
          fillSubState2(
            state,
            date,
            ae_data,
            ai_data,
            e_data,
            m_data,
            'chartData_tP'
          )
        } else {
          fillSubState2(
            state,
            date,
            ae_data,
            ai_data,
            e_data,
            m_data,
            'chartData_vP'
          )
        }
      }
    })
    builder.addCase(fetchCovData.rejected, state => {
      state.status = Status.ERROR
    })
  },
})

export const {} = covidDataSlice.actions

export default covidDataSlice.reducer
