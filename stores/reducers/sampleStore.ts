import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SampleTypes } from '../types'

const initialState: SampleTypes = {
    sample: 'Test Data',
}

export const sampleSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setSample: (state, action: PayloadAction<string>) => {
            state.sample = action.payload
        },
    },
})

export default sampleSlice.reducer
