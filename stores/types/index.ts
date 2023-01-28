import { store } from 'stores'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface NftDataTypes {
    id: number
    instantPrice: string
    highestBid: string
    author: string
    authorAvatar: string
    type: string
    stock: number
    likes: number
    createdAt: string
    endsAt: string
    media: {
        id: number
        image: string
        image2x: string
    }
    attributes: {
        id: number
        color: string
        type: string
    }
    bidUsers: {
        id: number
        name: string
        avatar: string
    }[]
}

export interface EthPriceTypes {
    eth: string
    usd: string
}

export interface NftTypes {
    ethPrice: EthPriceTypes | null
    popular: NftDataTypes[] | null
    aunctions: NftDataTypes[] | null
}
