import { configureStore } from '@reduxjs/toolkit'
import covidData from './covidDataPage/slice'
import seirhcdData from './seirhcdBlock/slice'
import seirhcdChangeData from './seirhcdChangeBlock/slice'

export const store = configureStore({
  reducer: {
    covidData,
    seirhcdData,
    seirhcdChangeData,
  },
})
