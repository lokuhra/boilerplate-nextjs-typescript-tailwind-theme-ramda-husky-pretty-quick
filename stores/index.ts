import { clothesSlice } from './reducers/clothes'
import { configureStore } from '@reduxjs/toolkit'
import weather from './reducers/clothes'

const store = configureStore({
    reducer: {
        weather,
    },
})

export { store, clothesSlice }
