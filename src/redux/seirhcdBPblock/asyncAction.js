import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBPCovData = createAsyncThunk(
  'seirhcdBPdata/fetchBPCovData',
  async obj => {
    const datatype = obj.datatype
    const dataT = obj.datatype

    const { data } = await axios({
      url: 'https://server.covid19-modeling.ru/api/forecasts_true/',
      method: 'POST',
      data: { datatype },
    })

    const res = await axios({
      url: 'https://server.covid19-modeling.ru/api/forecasts',
      method: 'POST',
      data: { datatype },
    })

    const result = await axios({
      url: 'https://server.covid19-modeling.ru/api/forecasts_train/',
      method: 'POST',
      data: { dataT },
    })
    console.log(result)

    return {
      true_data: data,
      train_data: result.data,
      forecasts: res.data,
      stype: obj.stype,
    }
  }
)
