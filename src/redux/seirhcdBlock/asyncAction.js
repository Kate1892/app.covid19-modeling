import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCovData = createAsyncThunk(
  'seirhcdData/fetchCovData',
  async key => {
    let url = ''
    if (key === 'tR0' || key === 'tP') {
      url = 'https://server.covid19-modeling.ru/api/res_train'
    } else {
      url = 'https://server.covid19-modeling.ru/api/res_valid'
    }
    const { data } = await axios.get(url)

    return {
      data: data,
      key: key,
    }
  }
)
