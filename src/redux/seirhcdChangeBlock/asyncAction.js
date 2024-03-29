import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchChangeCovData = createAsyncThunk(
  'seirhcdChungeData/fetchChangeCovData',
  async obj => {
    let url = ''
    if (obj.key === 'train') {
      url = 'https://server.covid19-modeling.ru/api/res_train'
    } else {
      url = 'https://server.covid19-modeling.ru/api/res_valid'
    }

    const { data } = await axios.get(url)
    const res = await axios.get(
      'https://server.covid19-modeling.ru/api/csvCovid/nd'
    )

    return {
      data: data,
      realData: res.data,
      key: obj.key,
      mean: obj.mean,
      max: obj.max,
      min: obj.min,
      title: obj.real_data,
    }
  }
)
