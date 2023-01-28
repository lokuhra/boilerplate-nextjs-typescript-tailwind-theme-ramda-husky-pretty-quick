import type { ReactNode } from 'react'

export type children = { children: ReactNode }

export type AuthorProps = {
    author: string
}

export type AuthorAvatarProps = {
    authorAvatar: string
}

export type CountdownProps = {
    date: string
}

export type HighestBidEthProps = {
    highestBid: string
}

export type HighestBidUsdProps = {
    highestBidUsd: string
}

export interface HighestBidProps extends HighestBidEthProps, HighestBidUsdProps {}

export type ImageProps = {
    image2x: string
}

export type InstantPriceProps = {
    instantPrice: string
}

export type NextArrowItemProps = {
    handleNext: () => void
}

export type BackArrowItemProps = {
    handleBack: () => void
}
