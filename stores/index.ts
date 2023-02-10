import { configureStore } from '@reduxjs/toolkit'
import { sampleSlice } from './reducers/sampleStore'
import sampleStore from './reducers/sampleStore'

const store = configureStore({
    reducer: {
        sampleStore,
    },
})

export { store, sampleSlice }
