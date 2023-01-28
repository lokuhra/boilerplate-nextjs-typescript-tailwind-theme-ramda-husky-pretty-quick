import { Filter, Hero, Popular, Search } from 'components'
import { useDispatch, useSelector } from 'react-redux'

import type { InferGetStaticPropsType } from 'next'
import { RootState } from 'stores/types'
import { api } from 'lib'
import { nftSlice } from 'stores'
import { useEffect } from 'react'

export default function IndexPage({
    ethPrice,
    populars,
    aunctions,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
    const dispatch = useDispatch()

    console.log(ethPrice)
    console.log(populars)
    console.log(aunctions)

    useEffect(() => {
        dispatch(nftSlice.actions.setEthPrice(ethPrice))
        dispatch(nftSlice.actions.setPopular(populars))
        dispatch(nftSlice.actions.setAunctions(aunctions))
    }, [])

    return (
        <div className="flex w-full flex-col">
            <Hero />
            <Popular />
            <Search />
            <Filter />
        </div>
    )
}

export async function getServerSideProps() {
    const apiKey = await api.post(`/login`)

    const headers = {
        apiKey: apiKey.data.key,
    }

    const ethPrice = await api.get(`/nfpaisanos/eth-price`, {
        headers,
    })

    const populars = await api.get(`/nfpaisanos/popular`, {
        headers,
    })

    const aunctions = await api.get(`/nfpaisanos/aunctions`, {
        headers,
    })

    return {
        props: {
            ethPrice: ethPrice.data,
            populars: populars.data,
            aunctions: aunctions.data,
        },
    }
}
