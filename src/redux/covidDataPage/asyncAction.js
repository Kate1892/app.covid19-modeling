import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('covidData/fetchData', async key => {
  let url = ''
  if (key === 'novosibirsk') {
    url = 'https://server.covid19-modeling.ru/api/csvCovid/nd'
  } else if (key === 'omsk') {
    url = 'https://server.covid19-modeling.ru/api/csvCovid/omsk'
  } else {
    url = 'https://server.covid19-modeling.ru/api/csvCovid/altay'
  }
  const { data } = await axios.get(url)
  return data
})
