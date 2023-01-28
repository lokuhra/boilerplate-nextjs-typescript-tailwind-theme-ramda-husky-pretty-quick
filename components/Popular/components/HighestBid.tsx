import { FC } from 'react'
import { HighestBidProps } from 'types'

export const HighestBid: FC<HighestBidProps> = ({ highestBid, highestBidUsd }) => {
    return (
        <div className="flex flex-col items-start justify-start">
            <p className="w-full text-center text-base font-medium leading-normal text-gray-50">Current Bid</p>
            <p className="w-full text-center text-5xl font-bold leading-10 text-gray-50">{highestBid}</p>
            <p className="w-full text-center text-2xl font-semibold leading-loose text-gray-500">${highestBidUsd}</p>
        </div>
    )
}

HighestBid.defaultProps = {
    highestBid: '0.00',
    highestBidUsd: '0.00',
}
