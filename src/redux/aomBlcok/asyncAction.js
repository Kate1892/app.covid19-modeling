import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAomData = createAsyncThunk(
  'aomData/fetchAomData',
  async postData => {
    if (postData.key === 'defaultCharts') {
      const { data } = await axios.get(
        'https://server.covid19-modeling.ru/getMsim'
      )
      const res = await axios.get(
        'https://server.covid19-modeling.ru/api/csvCovid/nd'
      )
      return {
        data: data,
        real_data: res.data,
        population_data: postData.population_data,
        region_data: postData.region_data,
        n_future_day: postData.n_future_day,
        init_inf: postData.init_inf,
      }
    } else {
      const population_data = postData.population_data
      const region_data = postData.region_data
      const n_future_day = postData.n_future_day
      const init_inf = postData.init_inf

      const { data } = await axios({
        url: 'https://server.covid19-modeling.ru/getUMsim2',
        method: 'POST',
        data: { population_data, region_data, n_future_day, init_inf },
      })
      const res = await axios({
        url: 'https://server.covid19-modeling.ru/api/curData',
        method: 'POST',
        data: { region_data },
      })
      return {
        data: data,
        real_data: res.data,
        population_data: population_data,
        region_data: region_data,
        n_future_day: n_future_day,
        init_inf: init_inf,
      }
    }
  }
)
