import { configureStore } from '@reduxjs/toolkit'
import slices from './slices'
import reducers from './reducers'
export const store = configureStore({
  reducer: {...slices, ...reducers},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  })
})