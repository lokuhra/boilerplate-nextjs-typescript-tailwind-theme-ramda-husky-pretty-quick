import {
    Author,
    AuthorAvatar,
    BackArrowItem,
    BidBtn,
    Countdown,
    HighestBid,
    Image,
    InstantPrice,
    NextArrowItem,
    Title,
    ViewItemBtn,
} from './components'
import { FC, useState } from 'react'
import { addOneYear, ethToUsd } from 'utils'

import { RootState } from 'stores/types'
import { useSelector } from 'react-redux'

export const Popular: FC = () => {
    const [active, setActive] = useState(0)
    const ethPrice = useSelector((state: RootState) => state.nft.ethPrice)
    const popular = useSelector((state: RootState) => state.nft.popular)

    const handleBack = () => {
        if (active === 0 && popular) {
            setActive(popular.length - 1)
        } else {
            setActive(active - 1)
        }
    }

    const handleNext = () => {
        if (popular && active === popular.length - 1) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    const {
        authorAvatar = '',
        author = '',
        instantPrice = '',
        highestBid = '',
        endsAt = '',
        media = { image2x: '' },
    } = popular ? popular[active] : {}

    return (
        <div className="inline-flex items-start justify-start space-x-32 bg-[#141416] px-40 py-32">
            <Image image2x={media.image2x} />
            {popular && ethPrice && (
                <div className="inline-flex w-[21rem] flex-col items-start justify-start space-y-10">
                    <div className="flex flex-col items-start justify-start space-y-5">
                        <Title />

                        <div className="inline-flex w-full items-center justify-start space-x-8">
                            <div className="flex flex-1 items-center justify-start space-x-2">
                                <AuthorAvatar authorAvatar={authorAvatar} />
                                <Author author={author} />
                            </div>
                            <InstantPrice instantPrice={instantPrice} />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-3xl bg-gray-800 p-8 shadow">
                        <HighestBid
                            highestBid={highestBid}
                            highestBidUsd={ethPrice ? ethToUsd(highestBid, ethPrice?.usd) : 'error'}
                        />
                        <div className="flex w-full flex-col items-start justify-start space-y-2 rounded-3xl">
                            <Countdown date={addOneYear(endsAt)} />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start space-y-2">
                        <BidBtn />
                        <ViewItemBtn />
                    </div>
                    <div className="inline-flex items-start justify-start space-x-2">
                        <BackArrowItem handleBack={handleBack} />
                        <NextArrowItem handleNext={handleNext} />
                    </div>
                </div>
            )}
        </div>
    )
}
