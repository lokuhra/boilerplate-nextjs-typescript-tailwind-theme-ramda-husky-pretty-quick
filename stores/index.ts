import { configureStore } from '@reduxjs/toolkit'
import nft from './reducers/nft'
import { nftSlice } from './reducers/nft'

const store = configureStore({
    reducer: {
        nft,
    },
})

export { store, nftSlice }
