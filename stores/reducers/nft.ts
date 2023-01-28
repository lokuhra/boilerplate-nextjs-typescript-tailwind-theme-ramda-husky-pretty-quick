import { EthPriceTypes, NftDataTypes, NftTypes } from '../types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: NftTypes = {
    ethPrice: null,
    popular: null,
    aunctions: null,
}

export const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {
        setEthPrice: (state, action: PayloadAction<EthPriceTypes>) => {
            state.ethPrice = action.payload
        },
        setPopular: (state, action: PayloadAction<NftDataTypes[]>) => {
            state.popular = action.payload
        },
        setAunctions: (state, action: PayloadAction<NftDataTypes[]>) => {
            state.aunctions = action.payload
        },
    },
})

export default nftSlice.reducer
