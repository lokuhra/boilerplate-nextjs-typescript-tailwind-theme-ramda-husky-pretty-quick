import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ClothesTypes } from '../types'

const initialState: ClothesTypes = {
    test: 'Test Data',
}

export const clothesSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<string>) => {
            state.test = action.payload
        },
    },
})

export default clothesSlice.reducer
