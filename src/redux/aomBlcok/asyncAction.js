import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAomData = createAsyncThunk(
  'aomData/fetchAomData',
  async () => {
    const { data } = await axios.get(
      'https://server.covid19-modeling.ru/getMsim'
    )

    const res = await axios.get(
      'https://server.covid19-modeling.ru/api/csvCovid/nd'
    )

    return {
      data: data,
      real_data: res.data,
    }
  }
)

export const fetchNewAomData = createAsyncThunk(
  'aomData/fetchNewAomData',
  async (population_data, region_data, n_future_day, init_inf) => {
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
    }
  }
)
